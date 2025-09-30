"use client";
import React, { useState } from "react";
import { Home, ChevronRight, UserX, Shield, CheckCircle, AlertTriangle, Mail, Phone, Building2 } from "lucide-react";

const CCPAOptOutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    areaCode: '',
    phoneNumber: '',
    companyName: '',
    doNotSell: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: `${formData.areaCode}${formData.phoneNumber}`,
          company: formData.companyName,
          message: `CCPA Opt-Out Request - Do not sell personal information: ${formData.doNotSell ? 'Yes' : 'No'}`,
          subject: 'CCPA Opt-Out Request Submission',
          from_name: 'Quore IT LLC - CCPA Form',
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          areaCode: '',
          phoneNumber: '',
          companyName: '',
          doNotSell: false
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2a] to-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#386861] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d5249] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center text-sm text-gray-300 mb-6 space-x-2">
              <Home size={16} />
              <span className="hover:underline cursor-pointer hover:text-white transition-colors">Home</span>
              <ChevronRight size={14} />
              <span className="hover:underline cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <ChevronRight size={14} />
              <span className="font-semibold text-white">CCPA Opt Out Form</span>
            </div>

            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#386861]/20 rounded-full text-sm font-medium text-[#7dd3c0] mb-6 backdrop-blur-sm border border-[#386861]/30">
                Request Submitted Successfully
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Thank You
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed">
                Your CCPA opt-out request has been successfully submitted and will be processed within 45 days.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You Message */}
        <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-32 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="bg-white/15 backdrop-blur-sm rounded-full p-6 w-fit mx-auto mb-8 shadow-xl">
                  <CheckCircle className="text-white" size={48} />
                </div>
                <h2 className="text-4xl font-bold mb-6">Request Successfully Submitted!</h2>
                <p className="text-gray-100 text-lg leading-relaxed mb-8">
                  Thank you for submitting your CCPA opt-out request. We have received your information and will process your request within the legally required timeframe of 45 days.
                </p>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="text-left space-y-3 text-gray-200">
                    <p>• We will verify your identity and process your request</p>
                    <p>• You will receive a confirmation email within 24 hours</p>
                    <p>• Your opt-out preferences will be implemented across our systems</p>
                    <p>• You may contact us if you have any questions about your request</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-white text-[#386861] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2a] to-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#386861] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d5249] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-300 mb-6 space-x-2">
            <Home size={16} />
            <span className="hover:underline cursor-pointer hover:text-white transition-colors">Home</span>
            <ChevronRight size={14} />
            <span className="hover:underline cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <ChevronRight size={14} />
            <span className="font-semibold text-white">CCPA Opt Out Form</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#386861]/20 rounded-full text-sm font-medium text-[#7dd3c0] mb-6 backdrop-blur-sm border border-[#386861]/30">
              California Consumer Privacy Act
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CCPA Opt Out Form
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Exercise your California privacy rights by submitting an opt-out request for the sale of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-32 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Information Box */}
          <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] text-white rounded-3xl p-10 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mt-1 shadow-xl">
                <UserX className="text-white" size={36} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
                <p className="text-gray-100 leading-relaxed text-base">
                  We take your privacy seriously. If you are a resident of California, you may use this form to make a request to exercise certain rights which you may have under the California Consumer Privacy Act. We will process your request within 45 days as required by law.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#386861] to-[#2d5249] text-white p-8">
              <h3 className="text-2xl font-bold mb-2">Submit Your Request</h3>
              <p className="text-gray-200">Please fill out all required fields to process your opt-out request.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3">
                  <AlertTriangle className="text-red-600" size={20} />
                  <p className="text-red-800 font-medium">{error}</p>
                </div>
              )}

              {/* Name Fields */}
              <div>
                <label className="block text-gray-900 font-bold mb-4 text-lg">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                      placeholder=""
                    />
                    <label className="block text-sm text-gray-600 mt-2">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                      placeholder=""
                    />
                    <label className="block text-sm text-gray-600 mt-2">Last Name</label>
                  </div>
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-900 font-bold mb-3 text-lg">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                    placeholder="ex: myname@example.com"
                  />
                  <label className="block text-sm text-gray-600 mt-2">example@example.com</label>
                </div>
                <div>
                  <label className="block text-gray-900 font-bold mb-3 text-lg">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="areaCode"
                        value={formData.areaCode}
                        onChange={handleInputChange}
                        required
                        maxLength="3"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                        placeholder="Area"
                      />
                      <label className="block text-sm text-gray-600 mt-2">Area Code</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        maxLength="7"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                        placeholder="Number"
                      />
                      <label className="block text-sm text-gray-600 mt-2">Phone Number</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-gray-900 font-bold mb-3 text-lg">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#386861] focus:outline-none transition-colors duration-300 text-gray-900"
                  placeholder=""
                />
              </div>

              {/* Checkbox */}
              <div className="bg-gradient-to-r from-[#386861]/5 to-[#2d5249]/5 rounded-2xl p-6 border-2 border-[#386861]/20">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    name="doNotSell"
                    checked={formData.doNotSell}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-[#386861] border-2 border-gray-300 rounded focus:ring-[#386861] focus:ring-2"
                  />
                  <div>
                    <label className="text-gray-900 font-medium text-base cursor-pointer">
                      Please do not sell my personal information
                    </label>
                    <p className="text-sm text-gray-600 mt-1">
                      Required to process your CCPA opt-out request
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-[#386861] to-[#2d5249] text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#2d5249] hover:to-[#386861]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting Request...
                    </div>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Processing",
                desc: "Your information is processed securely and in compliance with CCPA regulations."
              },
              {
                icon: CheckCircle,
                title: "45-Day Response",
                desc: "We will respond to your request within the legally required 45-day timeframe."
              },
              {
                icon: Mail,
                title: "Email Confirmation",
                desc: "You will receive an email confirmation once your request has been submitted."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#386861] hover:shadow-xl hover:shadow-[#386861]/10 transition-all duration-300 transform hover:-translate-y-1 group text-center"
              >
                <div className="bg-gradient-to-br from-[#386861]/10 to-[#2d5249]/10 rounded-2xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#386861]" size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CCPAOptOutForm;
