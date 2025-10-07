import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CRMForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    usingCRM: '',
    employeeCountcrm: '',
    importantFeaturescrm: [],
    industrycrm: '',
    otherIndustry: '',
    zipCode: '',
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({
    zipCode: false,
    phoneNumber: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        if (onClose) onClose();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      let phoneValue = value.replace(/[^\d+]/g, '');

      if (!phoneValue.startsWith('+') && phoneValue.length > 0) {
        phoneValue = '+' + phoneValue;
      }

      if (phoneValue.length > 1) {
        const countryCode = phoneValue.slice(0, 3);
        const number = phoneValue.slice(3).replace(/\s/g, '');
        phoneValue = countryCode + number;
      }

      setFormData({
        ...formData,
        [name]: phoneValue,
      });

      const phoneRegex = /^\+\d{2}\d{10}$/;
      setErrors((prev) => ({
        ...prev,
        phoneNumber: phoneValue.length > 0 && !phoneRegex.test(phoneValue),
      }));
    } else if (name === 'zipCode') {
      const numericValue = value.replace(/\D/g, '');

      setErrors((prev) => ({
        ...prev,
        zipCode: numericValue.length > 0 && numericValue.length !== 5,
      }));

      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'industrycrm' && value !== 'Other') {
      setFormData((prev) => ({
        ...prev,
        otherIndustry: '',
      }));
    }
  };

  const handleMultiSelectToggle = (feature) => {
    setFormData((prevData) => {
      if (prevData.importantFeaturescrm.includes(feature)) {
        return {
          ...prevData,
          importantFeaturescrm: prevData.importantFeaturescrm.filter((item) => item !== feature),
        };
      } else {
        return {
          ...prevData,
          importantFeaturescrm: [...prevData.importantFeaturescrm, feature],
        };
      }
    });
  };

  const nextStep = () => {
    if (currentStep === 4) {
      if (formData.industrycrm === 'Other' && !formData.otherIndustry) {
        return;
      }
    }

    if (currentStep === 5) {
      if (formData.zipCode.length !== 5) {
        setErrors((prev) => ({
          ...prev,
          zipCode: true,
        }));
        return;
      }
    }

    if (currentStep === 7) {
      const phoneRegex = /^\+\d{2}\d{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: true,
        }));
        return;
      }
    }

    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData({
      usingCRM: '',
      employeeCountcrm: '',
      importantFeaturescrm: [],
      industrycrm: '',
      otherIndustry: '',
      zipCode: '',
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      phoneNumber: '',
    });
    setErrors({
      zipCode: false,
      phoneNumber: false,
    });
    setCurrentStep(1);
    setCaptchaValue(null);
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      
      submitData.append('access_key', '2c1b7668-e873-404a-9759-f85af53e550b');
      submitData.append('g-recaptcha-response', captchaValue);
      submitData.append('usingCRM', formData.usingCRM);
      submitData.append('employeeCountcrm', formData.employeeCountcrm);
      submitData.append('importantFeaturescrm', formData.importantFeaturescrm.join(', '));
      submitData.append('industrycrm', formData.industrycrm === 'Other' ? `Other: ${formData.otherIndustry}` : formData.industrycrm);
      submitData.append('zipCode', formData.zipCode);
      submitData.append('email', formData.email);
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('company', formData.company);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('subject', 'New CRM Form Submission');
      submitData.append('from_name', 'CRM Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        console.log('Form submitted successfully:', data);
        setShowSuccess(true);
        resetForm();
      } else {
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    'Lead tracking and management',
    'Customer service and success',
    'Sales and forecasting tools',
    '3rd party integrations',
    'Email marketing',
  ];

  const industries = [
    'Construction',
    'Ecommerce',
    'Education',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Professional Services',
    'Real Estate',
    'Retail',
    'Technology',
    'Other',
  ];

  const isZipCodeValid = (zipCode) => {
    return /^\d{5}$/.test(zipCode);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    return /^\+\d{2}\d{10}$/.test(phoneNumber);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.usingCRM !== '';
      case 2:
        return formData.employeeCountcrm !== '';
      case 3:
        return formData.importantFeaturescrm.length > 0;
      case 4:
        return formData.industrycrm !== '' && (formData.industrycrm !== 'Other' || formData.otherIndustry.trim() !== '');
      case 5:
        return formData.zipCode !== '' && isZipCodeValid(formData.zipCode) && !errors.zipCode;
      case 6:
        return formData.email !== '' && formData.email.includes('@');
      case 7:
        return (
          formData.firstName !== '' &&
          formData.lastName !== '' &&
          formData.phoneNumber !== '' &&
          isPhoneNumberValid(formData.phoneNumber) &&
          !errors.phoneNumber
        );
      case 8:
        return captchaValue !== null;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-center text-black">Are you currently using a CRM?</h2>
            <div className="space-y-2">
              <label
                className={`block p-3 rounded-md cursor-pointer ${
                  formData.usingCRM === 'Yes' ? 'border-2 border-[#ff8633] bg-[#FFFF00]' : 'bg-[#FFFF00]'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="usingCRM"
                    value="Yes"
                    checked={formData.usingCRM === 'Yes'}
                    onChange={() => handleRadioChange('usingCRM', 'Yes')}
                    className="opacity-0 absolute"
                  />
                  <div
                    className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                      formData.usingCRM === 'Yes' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'
                    }`}
                  >
                    {formData.usingCRM === 'Yes' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className="ml-2 text-sm text-black">Yes</span>
                </div>
              </label>

              <label
                className={`block p-3 rounded-md cursor-pointer ${
                  formData.usingCRM === 'No' ? 'border-2 border-[#ff8633] bg-[#FFFF00]' : 'bg-[#FFFF00]'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="usingCRM"
                    value="No"
                    checked={formData.usingCRM === 'No'}
                    onChange={() => handleRadioChange('usingCRM', 'No')}
                    className="opacity-0 absolute"
                  />
                  <div
                    className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                      formData.usingCRM === 'No' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'
                    }`}
                  >
                    {formData.usingCRM === 'No' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className="ml-2 text-sm text-black">No</span>
                </div>
              </label>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">Roughly how many employees will need access?</h2>
            <div className="space-y-2">
              {['100+', '50-99', '21-49', '11-20', 'Less than 10'].map((option) => (
                <label
                  key={option}
                  className={`block p-3 rounded-md cursor-pointer ${
                    formData.employeeCountcrm === option ? 'border-2 border-[#ff8633] bg-[#FFFF00]' : 'bg-[#FFFF00]'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="employeeCountcrm"
                      value={option}
                      checked={formData.employeeCountcrm === option}
                      onChange={() => handleRadioChange('employeeCountcrm', option)}
                      className="opacity-0 absolute"
                    />
                    <div
                      className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                        formData.employeeCountcrm === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'
                      }`}
                    >
                      {formData.employeeCountcrm === option && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className="ml-2 text-sm text-black">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">What features are most important for your evaluation?</h2>
            <p className="text-sm text-gray-600 mb-3">Select all that apply. Double-click to deselect.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className={`block p-3 rounded-md cursor-pointer ${
                    formData.importantFeaturescrm.includes(feature) ? 'border-2 border-[#ff8633] bg-[#FFFF00]' : 'bg-[#FFFF00]'
                  }`}
                  onClick={() => handleMultiSelectToggle(feature)}
                  onDoubleClick={() => {
                    if (formData.importantFeaturescrm.includes(feature)) {
                      handleMultiSelectToggle(feature);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 border ${
                        formData.importantFeaturescrm.includes(feature)
                          ? 'bg-[#ff8633] border-[#ff8633]'
                          : 'border-gray-400 bg-white'
                      } rounded flex items-center justify-center`}
                    >
                      {formData.importantFeaturescrm.includes(feature) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className="ml-2 text-sm text-black">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">What industry are you in?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {industries.map((industrycrm) => (
                <label
                  key={industrycrm}
                  className={`block p-3 rounded-md cursor-pointer ${
                    formData.industrycrm === industrycrm ? 'border-2 border-[#ff8633] bg-[#FFFF00]' : 'bg-[#FFFF00]'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="industrycrm"
                      value={industrycrm}
                      checked={formData.industrycrm === industrycrm}
                      onChange={() => handleRadioChange('industrycrm', industrycrm)}
                      className="opacity-0 absolute"
                    />
                    <div
                      className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                        formData.industrycrm === industrycrm ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'
                      }`}
                    >
                      {formData.industrycrm === industrycrm && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className="ml-2 text-sm text-black">{industrycrm}</span>
                  </div>
                </label>
              ))}
            </div>

            {formData.industrycrm === 'Other' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1 text-black">Please specify your industry</label>
                <input
                  type="text"
                  name="otherIndustry"
                  value={formData.otherIndustry}
                  onChange={handleInputChange}
                  placeholder="Enter your industry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black"
                />
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">What's your zip code?</h2>
            <div className="mb-4">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Enter your zip code"
                maxLength="5"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black ${
                  errors.zipCode ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid 5-digit zip code</p>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">What's your email address?</h2>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black ${
                  formData.email && !formData.email.includes('@') ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formData.email && !formData.email.includes('@') && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">Tell us about yourself</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+XX1234567890"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] bg-white text-black ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid phone number (+XX followed by 10 digits)</p>
                )}
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-black">Verify you're not a robot</h2>
            <div className="flex justify-center mb-4">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey="6LfMoeArAAAAAKqt8RPmhs-f8uq0TY51EqN4K7Gw"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Ultra-minimal background blur - almost no blur effect */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[0.1px]"></div>
      
      {/* Form container with close button inside */}
      <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button positioned inside the form container */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm border border-gray-200"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {showSuccess && (
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border-l-4 border-[#ff8633] z-30 slide-in-right">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-[#ff8633]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1">
                <h3 className="text-base font-medium text-gray-900">Thank you!</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your submission has been received. We will get back to you soon.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="p-6 pt-12">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-[#ff8633] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 8) * 100}%` }}
              ></div>
            </div>

            {renderStep()}

            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              )}

              {currentStep < 8 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`px-4 py-2 rounded-md ml-auto transition-colors ${
                    isStepValid() ? 'bg-[#ff8633] text-white hover:bg-[#e67a2e]' : 'bg-gray-300 text-black cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!captchaValue || isSubmitting}
                  className={`px-4 py-2 rounded-md ml-auto transition-colors ${
                    !captchaValue || isSubmitting ? 'bg-gray-300 text-black cursor-not-allowed' : 'bg-[#ff8633] text-white hover:bg-[#e67a2e]'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </div>
        </form>

        <style jsx>{`
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .slide-in-right {
            animation: slideInRight 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CRMForm;
