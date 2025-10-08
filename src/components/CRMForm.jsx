'use client';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const captchaRef = useRef(null);

    const [errors, setErrors] = useState({
        zipCode: false,
        phoneNumber: false
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'zipCode' || name === 'phoneNumber') {
          setErrors({
            ...errors,
            [name]: false
          });
        }
        
        // Handle zipCode validation - only allow numbers and max 5 digits
        if (name === 'zipCode') {
          const zipValue = value.replace(/[^\d]/g, '').slice(0, 5);
          setFormData({
            ...formData,
            [name]: zipValue
          });
          
          // Set error if length is less than 5 and user has entered something
          if (zipValue.length > 0 && zipValue.length < 5) {
            setErrors({
              ...errors,
              zipCode: true
            });
          }
          return;
        }
        
        // Handle phoneNumber validation - format as +XX followed by 10 digits
        if (name === 'phoneNumber') {
          let phoneValue = value.replace(/[^\d+]/g, '');
          
          // Ensure it starts with +
          if (!phoneValue.startsWith('+') && phoneValue.length > 0) {
            phoneValue = '+' + phoneValue;
          }
          
          // Format as +XX followed by 10 digits
          if (phoneValue.length > 1) {
            const countryCode = phoneValue.slice(0, 3); // +XX
            const number = phoneValue.slice(3).replace(/\s/g, ''); // Remove any spaces
            
            phoneValue = countryCode + number;
          }
          
          setFormData({
            ...formData,
            [name]: phoneValue
          });
          
          // Validate phone number format
          const phoneRegex = /^\+\d{2}\d{10}$/;
          if (phoneValue.length > 0 && !phoneRegex.test(phoneValue)) {
            setErrors({
              ...errors,
              phoneNumber: true
            });
          }
          return;
        }
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRadioChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
            // Clear otherIndustry if user is not selecting "Other"
            ...(name === 'industrycrm' && value !== 'Other' ? { otherIndustry: '' } : {})
        });
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
      // Validate current step before proceeding
      if (currentStep === 3) {
        // At least one feature must be selected
        if (formData.importantFeaturescrm.length === 0) {
          return;
        }
      }
      
      if (currentStep === 4) {
        // If "Other" is selected, make sure they've entered text
        if (formData.industrycrm === 'Other' && !formData.otherIndustry.trim()) {
          return;
        }
      }
      
      if (currentStep === 5) {
        // Validate zip code
        if (formData.zipCode.length < 5) {
          setErrors({
            ...errors,
            zipCode: true
          });
          return;
        }
      }
      
      if (currentStep === 7) {
        // Validate phone number
        const phoneRegex = /^\+\d{2}\d{10}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
          setErrors({
            ...errors,
            phoneNumber: true
          });
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
        setCurrentStep(1);
        setCaptchaValue(null);
        setErrors({
          zipCode: false,
          phoneNumber: false
        });
        if (captchaRef.current) {
            captchaRef.current.reset();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Final validation
        const zipCodeValid = formData.zipCode.length === 5;
        const phoneRegex = /^\+\d{2}\d{10}$/;
        const phoneNumberValid = phoneRegex.test(formData.phoneNumber);
        
        if (!zipCodeValid || !phoneNumberValid) {
          setErrors({
            zipCode: !zipCodeValid,
            phoneNumber: !phoneNumberValid
          });
          return;
        }
        
        // If "Other" is selected, make sure they've entered text
        if (formData.industrycrm === 'Other' && !formData.otherIndustry.trim()) {
          alert("Please specify your industry");
          return;
        }
        
        if (!captchaValue) {
          alert("Please complete the reCAPTCHA verification");
          return;
        }
        
        setIsSubmitting(true);

        try {
            // Prepare the data to send
            let dataToSend = {...formData};
            if (formData.industrycrm === 'Other') {
                dataToSend.industrycrm = `Other: ${formData.otherIndustry}`;
            }
            
            // Add Web3Forms specific fields
            const formDataToSend = {
                access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
                subject: 'New CRM Form Submission',
                from_name: 'CRM Form',
                botcheck: '', // Honeypot spam protection
                'Using CRM': dataToSend.usingCRM,
                'Employee Count': dataToSend.employeeCountcrm,
                'Important Features': dataToSend.importantFeaturescrm.join(', '),
                'Industry': dataToSend.industrycrm,
                'Zip Code': dataToSend.zipCode,
                'Email': dataToSend.email,
                'First Name': dataToSend.firstName,
                'Last Name': dataToSend.lastName,
                'Company': dataToSend.company,
                'Phone Number': dataToSend.phoneNumber,
                'reCAPTCHA': captchaValue
            };
            
            // Send to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataToSend)
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('Form submitted successfully:', result);
                setShowSuccess(true);
                resetForm();
            } else {
                console.error('Form submission failed:', result);
                alert('Sorry, there was a problem submitting your information. Please try again later.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was a problem submitting your information. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black h-6">Are you currently using a CRM?</h2>
                        <div className="space-y-2">
                            {['Yes', 'No'].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.usingCRM === option ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('usingCRM', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="usingCRM"
                                                className="sr-only"
                                                checked={formData.usingCRM === option}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.usingCRM === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.usingCRM === option && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm text-black">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">Roughly how many employees will need access?</h2>
                        <div className="space-y-2">
                            {['100+', '50-99', '21-49', '11-20', 'Less than 10'].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.employeeCountcrm === option ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('employeeCountcrm', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="employeeCountcrm"
                                                className="sr-only"
                                                checked={formData.employeeCountcrm === option}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.employeeCountcrm === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.employeeCountcrm === option && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm text-black">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What features are most important for your evaluation?</h2>
                        <p className="text-sm text-black mb-3">Select all that apply</p>
                        <div className="space-y-2">
                            {[
                                'Lead tracking and management',
                                'Customer service and success',
                                'Sales and forecasting tools',
                                '3rd party integrations',
                                'Email marketing'
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.importantFeaturescrm.includes(feature) ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleMultiSelectToggle(feature)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <div className={`w-4 h-4 border rounded flex items-center justify-center ${formData.importantFeaturescrm.includes(feature) ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.importantFeaturescrm.includes(feature) && (
                                                    <svg
                                                        className="w-3 h-3 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm text-black">{feature}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What industry are you in?</h2>
                        <div className="space-y-2">
                            {[
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
                                'Other'
                            ].map((industry) => (
                                <div
                                    key={industry}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.industrycrm === industry ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('industrycrm', industry)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="industrycrm"
                                                className="sr-only"
                                                checked={formData.industrycrm === industry}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.industrycrm === industry ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.industrycrm === industry && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm text-black">{industry}</span>
                                    </label>
                                </div>
                            ))}
                            
                            {/* Show text field if "Other" is selected */}
                            {formData.industrycrm === 'Other' && (
                                <div className="mt-3">
                                    <input
                                        type="text"
                                        name="otherIndustry"
                                        value={formData.otherIndustry}
                                        onChange={handleInputChange}
                                        placeholder="Please specify your industry"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-black"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What's your zip code?</h2>
                        <div className="relative">
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Enter zip code"
                                className={`w-full p-2 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.zipCode ? 'focus:ring-red-500' : 'focus:ring-[#ff8633]'} text-black`}
                                maxLength="5"
                            />
                            {errors.zipCode && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid 5-digit zip code</p>
                            )}
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What's your email address?</h2>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-black"
                        />
                        <p className="text-xs text-black mt-2">By entering your email above, you consent to receive marketing emails from Compare-Bazaar.</p>
                    </div>
                );

            case 7:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">Last step! Who do we have the pleasure of working with?</h2>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-black"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-black"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Company Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-black"
                            />
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="+XX1234567890"
                                    className={`w-full p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.phoneNumber ? 'focus:ring-red-500' : 'focus:ring-[#ff8633]'} text-black`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (+XX followed by 10 digits)</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 8:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">Please verify that you're not a robot</h2>
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey="6LfMoeArAAAAAKqt8RPmhs-f8uq0TY51EqN4K7Gw"
                            onChange={(value) => setCaptchaValue(value)}
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    const renderProgressDots = () => {
        const dots = [];
        for (let i = 1; i <= 8; i++) {
            dots.push(
                <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${currentStep === i ? 'bg-[#ff8633]' : 'bg-gray-300'}`}
                ></div>
            );
        }
        return <div className="flex justify-center space-x-2 my-3">{dots}</div>;
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
                // If "Other" is selected, require text input
                if (formData.industrycrm === 'Other') {
                    return formData.otherIndustry.trim() !== '';
                }
                return formData.industrycrm !== '';
            case 5:
                return formData.zipCode !== '' && formData.zipCode.length === 5;
            case 6:
                return formData.email !== '' && formData.email.includes('@');
            case 7:
                const phoneRegex = /^\+\d{2}\d{10}$/;
                return formData.firstName !== '' && 
                       formData.lastName !== '' && 
                       formData.phoneNumber !== '' &&
                       phoneRegex.test(formData.phoneNumber) &&
                       !errors.phoneNumber;
            case 8:
                return captchaValue !== null;
            default:
                return true;
        }
    };

    return (
        <div className="w-full bg-white relative">
            {/* Success notification */}
            {showSuccess && (
                <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border-l-4 border-[#ff8633] z-900 slide-in-right">
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

            {/* Form */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="px-1 py-2">
                        {renderStep()}
                    </div>

                    <div className="mt-6 flex items-center">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center text-black px-3 py-1 rounded-md hover:bg-gray-100 text-sm"
                                disabled={isSubmitting}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Back
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={currentStep === 8 ? handleSubmit : nextStep}
                            className={`ml-auto px-6 py-2 rounded-md font-medium text-sm ${isStepValid()
                                ? 'bg-orange-400 hover:bg-orange-500 text-white'
                                : 'bg-gray-300 cursor-not-allowed text-black'
                                }`}
                            disabled={!isStepValid() || isSubmitting}
                        >
                            {isSubmitting
                                ? 'Processing...'
                                : currentStep === 8
                                    ? 'FINISH'
                                    : 'NEXT'
                            }
                        </button>
                    </div>

                    {renderProgressDots()}
                </form>
            </div>

            {/* Add CSS for slide-in animation */}
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
    );
};

export default CRMForm;
