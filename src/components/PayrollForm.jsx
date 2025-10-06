import React, { useState, useEffect, useRef } from 'react';

const PayrollForm = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        emailList: '',
        emailVolume: '',
        emailCampaign: '',
        otherServices: '',
        buyingTime: '',
        featureswithEmail: '',
        zipCode: '',
        email: '',
        customService: '',
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        importantFeature: '',
        inboundCalls: '',
        payrollSolution:'',
        payrollEmployee:''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    // Load reCAPTCHA script
    useEffect(() => {
        // Set up callback for reCAPTCHA
        window.onRecaptchaSuccess = (token) => {
            setCaptchaToken(token);
        };

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            delete window.onRecaptchaSuccess;
        };
    }, []);

    // Render reCAPTCHA when on step 6
    useEffect(() => {
        if (currentStep === 6 && window.grecaptcha && recaptchaRef.current) {
            // Check if already rendered
            if (!recaptchaRef.current.hasChildNodes()) {
                window.grecaptcha.render(recaptchaRef.current, {
                    'sitekey': '6LfMoeArAAAAAKqt8RPmhs-f8uq0TY51EqN4K7Gw',
                    'callback': window.onRecaptchaSuccess
                });
            }
        }
    }, [currentStep]);

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
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const resetForm = () => {
        setFormData({
            emailList: '',
            emailVolume: '',
            emailCampaign: '',
            otherServices: '',
            buyingTime: '',
            featureswithEmail: '',
            zipCode: '',
            customService: '',
            email: '',
            firstName: '',
            lastName: '',
            companyName: '',
            phoneNumber: '',
            importantFeature: '',
            inboundCalls: '',
            payrollSolution:'',
            payrollEmployee:''
        });
        setCurrentStep(1);
        setCaptchaToken(null);
        if (window.grecaptcha && recaptchaRef.current) {
            window.grecaptcha.reset();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare data for Web3Forms (without captcha token - handle captcha separately)
            const web3formsData = {
                access_key: "2c1b7668-e873-404a-9759-f85af53e550b",
                subject: "New Payroll Form Submission",
                from_name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                // Add all form fields with readable labels
                "Payroll Solution": formData.payrollSolution,
                "Number of Employees": formData.payrollEmployee,
                "Zip Code": formData.zipCode,
                "First Name": formData.firstName,
                "Last Name": formData.lastName,
                "Company Name": formData.companyName,
                "Phone Number": formData.phoneNumber,
                "Captcha Verified": captchaToken ? "Yes" : "No"
            };

            console.log('Submitting data:', web3formsData);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(web3formsData),
            });

            const result = await response.json();
            console.log('API Response:', result);

            if (result.success) {
                console.log('Form submitted successfully:', result);
                setShowSuccess(true);
                resetForm();
            } else {
                console.error('Submission failed:', result);
                alert(`Submission failed: ${result.message || 'Unknown error'}. Please check console for details.`);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was a problem submitting your information. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What payroll solution are you looking for?</h2>
                        <div className="space-y-2">
                            {['Payroll software only', 'Both payroll software and service', 'Payroll service only'].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.payrollSolution === option ? 'border-2' : ''}`}
                                    style={formData.payrollSolution === option ? { borderColor: '#FFFF00' } : {}}
                                    onClick={() => handleRadioChange('payrollSolution', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <div 
                                                className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.payrollSolution === option ? '' : 'border-gray-400 bg-white'}`}
                                                style={formData.payrollSolution === option ? { backgroundColor: '#FFFF00', borderColor: '#FFFF00' } : {}}
                                            >
                                                {formData.payrollSolution === option && (
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
                        <h2 className="text-base font-semibold mb-3 text-black">How many employees do you have?</h2>
                        <div className="space-y-2">
                            {['Less than 10', '10 to 49', '50 to 99', '100 to 250', 'More than 250'].map((option) => (
                                <div
                                    key={option}
                                    className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.payrollEmployee === option ? 'border-2' : ''}`}
                                    style={formData.payrollEmployee === option ? { borderColor: '#FFFF00' } : {}}
                                    onClick={() => handleRadioChange('payrollEmployee', option)}
                                >
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <div 
                                                className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.payrollEmployee === option ? '' : 'border-gray-400 bg-white'}`}
                                                style={formData.payrollEmployee === option ? { backgroundColor: '#FFFF00', borderColor: '#FFFF00' } : {}}
                                            >
                                                {formData.payrollEmployee === option && (
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
                        <h2 className="text-base font-semibold mb-3 text-black">What's your zip code?</h2>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Enter zip code"
                            className={`w-full p-2 border ${formData.zipCode && formData.zipCode.length < 5
                                ? 'border-red-500'
                                : 'border-gray-300'
                                } rounded-md focus:outline-none focus:ring-2 text-black`}
                            style={formData.zipCode && formData.zipCode.length >= 5 ? { '--tw-ring-color': '#FFFF00' } : formData.zipCode && formData.zipCode.length < 5 ? {} : { '--tw-ring-color': '#FFFF00' }}
                            maxLength="5"
                        />
                        {formData.zipCode && formData.zipCode.length < 5 && (
                            <p className="text-red-500 text-xs mt-1">
                                Please enter a valid 5-digit zip code
                            </p>
                        )}
                    </div>
                );

            case 4:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">What's your email address?</h2>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black"
                            style={{ '--tw-ring-color': '#FFFF00' }}
                        />
                        <p className="text-xs text-gray-500 mt-2">By entering your email above, you consent to receive marketing emails from Compare-Bazaar.</p>
                    </div>
                );

            case 5:
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
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black"
                                style={{ '--tw-ring-color': '#FFFF00' }}
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black"
                                style={{ '--tw-ring-color': '#FFFF00' }}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Company Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black"
                                style={{ '--tw-ring-color': '#FFFF00' }}
                            />
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="+XX 1234567890"
                                    className={`w-full p-2 border ${formData.phoneNumber && !/^\+[0-9]{2} [0-9]{10}$/.test(formData.phoneNumber)
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                        } rounded-md focus:outline-none focus:ring-2 text-black`}
                                    style={formData.phoneNumber && !/^\+[0-9]{2} [0-9]{10}$/.test(formData.phoneNumber) ? {} : { '--tw-ring-color': '#FFFF00' }}
                                />
                                {formData.phoneNumber && !/^\+[0-9]{2} [0-9]{10}$/.test(formData.phoneNumber) && (
                                    <p className="text-red-500 text-xs mt-1">
                                        Please enter a valid phone number in the format: +XX 1234567890
                                    </p>
                                )}
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
              By clicking "Finish" above, I consent to receive from business.com and any party on its behalf at any time e-mails, 
              telemarketing calls using an autodialer, artificial/prerecorded voice or pre-recordings and SMS text messages, which could result 
              in wireless charges at the number provided above. I understand that consent is not a condition of purchase. I also 
              agree to the Terms and Conditions and Privacy Policy which are also linked at the bottom of this page.
            </p>
                    </div>
                );

            case 6:
                return (
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-black">Please verify that you're not a robot</h2>
                        <div ref={recaptchaRef}></div>
                    </div>
                );

            default:
                return null;
        }
    };

    const renderProgressDots = () => {
        const dots = [];
        for (let i = 1; i <= 6; i++) {
            dots.push(
                <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${currentStep === i ? '' : 'bg-gray-300'}`}
                    style={currentStep === i ? { backgroundColor: '#FFFF00' } : {}}
                ></div>
            );
        }
        return <div className="flex justify-center space-x-2 my-3">{dots}</div>;
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.payrollSolution !== '';
            case 2:
                return formData.payrollEmployee !== '';
            case 3:
                return formData.zipCode !== '' && formData.zipCode.length === 5;
            case 4:
                return formData.email !== '' && formData.email.includes('@');
            case 5:
                const phoneRegex = /^\+[0-9]{2} [0-9]{10}$/;
                return formData.firstName !== '' &&
                    formData.lastName !== '' &&
                    formData.phoneNumber !== '' &&
                    phoneRegex.test(formData.phoneNumber);
            case 6:
                return captchaToken !== null;
            default:
                return true;
        }
    };

    return (
        <div className="w-full bg-white relative p-6">
            {showSuccess && (
                <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border-l-4 z-50 slide-in-right" style={{ borderLeftColor: '#FFFF00' }}>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5" style={{ color: '#FFFF00' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            <div>
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
                        onClick={currentStep === 6 ? handleSubmit : nextStep}
                        className={`ml-auto px-6 py-2 rounded-md font-medium text-sm ${isStepValid()
                            ? 'text-black'
                            : 'bg-gray-300 cursor-not-allowed text-gray-500'
                            }`}
                        style={isStepValid() ? { backgroundColor: '#FFFF00' } : {}}
                        disabled={!isStepValid() || isSubmitting}
                    >
                        {isSubmitting
                            ? 'Processing...'
                            : currentStep === 6
                                ? 'FINISH'
                                : 'NEXT'
                        }
                    </button>
                </div>

                {renderProgressDots()}
            </div>

            <style>{`
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

export default PayrollForm;