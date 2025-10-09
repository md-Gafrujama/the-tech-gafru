import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const AccountingSoftwareForm = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        industrySector: '',
        desiredFeatures: '',
        employeeCount: '',
        zipCode: '',
        email: '',
        firstName: '',
        lastName: '',
        companyName: '',
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
            [name]: value
        });
    };

    const nextStep = () => {
      if (currentStep === 4) {
        // Validate zip code
        if (formData.zipCode.length < 5) {
          setErrors({
            ...errors,
            zipCode: true
          });
          return;
        }
      }
      
      if (currentStep === 6) {
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
            industrySector: '',
            desiredFeatures: '',
            employeeCount: '',
            zipCode: '',
            email: '',
            firstName: '',
            lastName: '',
            companyName: '',
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
        
        if (!captchaValue) {
          alert("Please complete the reCAPTCHA verification");
          return;
        }
        
        setIsSubmitting(true);

        try {
            // Add Web3Forms specific fields
            const formDataToSend = {
                access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
                subject: 'New Accounting Software Inquiry',
                from_name: 'Accounting Software Form',
                botcheck: '', // Honeypot spam protection
                'Industry Sector': formData.industrySector,
                'Desired Features': formData.desiredFeatures,
                'Employee Count': formData.employeeCount,
                'Zip Code': formData.zipCode,
                'Email': formData.email,
                'First Name': formData.firstName,
                'Last Name': formData.lastName,
                'Company Name': formData.companyName,
                'Phone Number': formData.phoneNumber,
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
                        <h2 className="text-base font-semibold mb-3">What industry sector does your company operate in?</h2>
                        <div className="space-y-2">
                            {[
                                'Construction',
                                'Consulting', 
                                'Financial',
                                'Government',
                                'Healthcare',
                                'Internet/Ecommerce',
                                'Retail/Wholesale',
                                'Other'
                            ].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.industrySector === option ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('industrySector', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="industrySector"
                                                className="sr-only"
                                                checked={formData.industrySector === option}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.industrySector === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.industrySector === option && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">What features are you looking for?</h2>
                        <div className="space-y-2">
                            {[
                                'Budgeting/forecasting',
                                'Billing/invoicing',
                                'Financial reporting',
                                'Inventory management',
                                'Payroll management',
                                'Other or not sure'
                            ].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.desiredFeatures === option ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('desiredFeatures', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="desiredFeatures"
                                                className="sr-only"
                                                checked={formData.desiredFeatures === option}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.desiredFeatures === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.desiredFeatures === option && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">How many employees do you have?</h2>
                        <div className="space-y-2">
                            {[
                                '1-25',
                                '26-49',
                                '50+'
                            ].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.employeeCount === option ? 'border-2 border-[#ff8633]' : ''}`}
                                    onClick={() => handleRadioChange('employeeCount', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="employeeCount"
                                                className="sr-only"
                                                checked={formData.employeeCount === option}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.employeeCount === option ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                                                {formData.employeeCount === option && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-2 text-sm">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">What's your zip code?</h2>
                        <div className="relative">
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Enter zip code"
                                className={`w-full p-2 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.zipCode ? 'focus:ring-red-500' : 'focus:ring-[#ff8633]'}`}
                                maxLength="5"
                            />
                            {errors.zipCode && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid 5-digit zip code</p>
                            )}
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">What's your email address?</h2>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                        />
                        <p className="text-xs text-gray-500 mt-2">We'll send you accounting software price quotes from qualified sellers.</p>
                    </div>
                );

            case 6:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">Last step! Who do we have the pleasure of working with?</h2>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Company Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                            />
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="+XX1234567890"
                                    className={`w-full p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.phoneNumber ? 'focus:ring-red-500' : 'focus:ring-[#ff8633]'}`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (+XX followed by 10 digits)</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3">Please verify that you're not a robot</h2>
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
        for (let i = 1; i <= 7; i++) {
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
                return formData.industrySector !== '';
            case 2:
                return formData.desiredFeatures !== '';
            case 3:
                return formData.employeeCount !== '';
            case 4:
                return formData.zipCode !== '' && formData.zipCode.length === 5;
            case 5:
                return formData.email !== '' && formData.email.includes('@');
            case 6:
                const phoneRegex = /^\+\d{2}\d{10}$/;
                return formData.firstName !== '' && 
                       formData.lastName !== '' && 
                       formData.phoneNumber !== '' &&
                       phoneRegex.test(formData.phoneNumber) &&
                       !errors.phoneNumber;
            case 7:
                return captchaValue !== null; // CAPTCHA must be filled
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
                                Your accounting software inquiry has been received. We'll send you price quotes from qualified sellers soon.
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
                                className="flex items-center text-gray-600 px-3 py-1 rounded-md hover:bg-gray-100 text-sm"
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
                            onClick={currentStep === 7 ? handleSubmit : nextStep}
                            className={`ml-auto px-6 py-2 rounded-md font-medium text-sm ${isStepValid()
                                ? 'bg-orange-400 hover:bg-orange-500 text-white'
                                : 'bg-gray-300 cursor-not-allowed text-gray-500'
                                }`}
                            disabled={!isStepValid() || isSubmitting}
                        >
                            {isSubmitting
                                ? 'Processing...'
                                : currentStep === 7
                                    ? 'GET QUOTES'
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

export default AccountingSoftwareForm;
