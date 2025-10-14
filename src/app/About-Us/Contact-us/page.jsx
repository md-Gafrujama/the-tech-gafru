// "use client";
// import { useState } from 'react';

// const contactOptions = [
//   {
//     title: "General inquiries",
//     description: "Send us an email",
//     href: "#",
//     type: "general",
//   },
//   {
//     title: "Find a career",
//     description: "Apply now",
//     href: "/About-Us/Careers",
//     type: "career",
//   },
//   {
//     title: "Contact sales",
//     description: "Find B2B solutions",
//     href: "#",
//     type: "sales",
//   },
// ];

// const locations = [
//   {
//     name: "United States",
//     address: "3343 Perimeter Hill Dr Suite 100",
//     city: "Nashville, TN 37211",
//     phone: "877-702-2082",
//     email: "contact@Martechbiz.com",
//     image: "https://images.unsplash.com/photo-1549930555-6edb2c4e37e2?w=600&h=400&fit=crop",
//   },
//   {
//     name: "India",
//     address: "Cyber City, DLF Phase 2",
//     city: "Gurugram, Haryana 122002",
//     phone: "+91 124-4567890",
//     email: "india.sales@Martechbiz.com",
//     image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
//   },
// ];

// const features = [
//   {
//     title: "Fast Response Time",
//     description: "Get answers to your queries within 24 hours on business days"
//   },
//   {
//     title: "Global Support",
//     description: "Our team operates across multiple time zones to serve you better"
//   },
//   {
//     title: "Secure Communication",
//     description: "Your data is protected with enterprise-grade security"
//   },
//   {
//     title: "Expert Team",
//     description: "Connect with industry professionals who understand your needs"
//   }
// ];

// const stats = [
//   { number: "50K+", label: "Happy Clients" },
//   { number: "24/7", label: "Support Available" },
//   { number: "98%", label: "Satisfaction Rate" },
//   { number: "150+", label: "Team Members" }
// ];

// const faqs = [
//   {
//     question: "What are your business hours?",
//     answer: "Our customer support team is available 24/7 to assist you with any queries or concerns."
//   },
//   {
//     question: "How quickly will I receive a response?",
//     answer: "We typically respond to all inquiries within 24 hours on business days. Urgent matters are prioritized."
//   },
//   {
//     question: "Do you offer support in multiple languages?",
//     answer: "Yes, we provide support in English, Hindi, and several other regional languages."
//   },
//   {
//     question: "How can I schedule a demo or consultation?",
//     answer: "You can schedule a demo by contacting our sales team through the 'Contact sales' option above or by calling our office directly. We'll arrange a convenient time for your consultation."
//   },
//   {
//     question: "What information should I include in my inquiry?",
//     answer: "Please provide your name, company details, contact information, and a brief description of your needs. The more details you share, the better we can assist you."
//   },
//   {
//     question: "Do you provide technical support for your products?",
//     answer: "Yes, we offer comprehensive technical support for all our products and services. Our expert team is ready to help you resolve any technical issues quickly."
//   }
// ];

// // Newsletter Signup Form Component
// const NewsletterForm = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [nameError, setNameError] = useState('');

//   // Email validation function
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Handle email change with validation
//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);
    
//     if (value && !validateEmail(value)) {
//       setEmailError('Please enter a valid email address');
//     } else {
//       setEmailError('');
//     }
//   };

//   // Handle name change with validation
//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     setName(value);
    
//     if (value.length > 0 && value.length < 2) {
//       setNameError('Name must be at least 2 characters long');
//     } else {
//       setNameError('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate fields
//     let hasErrors = false;
    
//     if (!name.trim()) {
//       setNameError('Name is required');
//       hasErrors = true;
//     } else if (name.trim().length < 2) {
//       setNameError('Name must be at least 2 characters long');
//       hasErrors = true;
//     }
    
//     if (!email.trim()) {
//       setEmailError('Email is required');
//       hasErrors = true;
//     } else if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       hasErrors = true;
//     }
    
//     if (hasErrors) return;
    
//     setIsSubmitting(true);
//     setSubmitStatus('');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
//           form_type: 'Newsletter Subscription',
//           name: name.trim(),
//           email: email.trim(),
//           source: 'Website Newsletter Signup'
//         })
//       });

//       const result = await response.json();
//       if (result.success) {
//         setSubmitStatus('success');
//         setEmail('');
//         setName('');
//         setEmailError('');
//         setNameError('');
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Newsletter signup error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Name Input */}
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Enter your name"
//           className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/95 backdrop-blur-sm placeholder-gray-500 text-gray-900 font-medium ${
//             nameError 
//               ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
//               : 'border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 hover:border-white/50'
//           }`}
//         />
//         {nameError && (
//           <p className="mt-2 text-sm text-red-200 flex items-center">
//             <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//             {nameError}
//           </p>
//         )}
//       </div>

//       {/* Email Input */}
//       <div>
//         <input
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           placeholder="Enter your email address"
//           className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/95 backdrop-blur-sm placeholder-gray-500 text-gray-900 font-medium ${
//             emailError 
//               ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
//               : 'border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 hover:border-white/50'
//           }`}
//         />
//         {emailError && (
//           <p className="mt-2 text-sm text-red-200 flex items-center">
//             <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//             {emailError}
//           </p>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={isSubmitting || emailError || nameError}
//         className="w-full px-8 py-4 bg-white text-[#0E1F1C] rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-white flex items-center justify-center space-x-2"
//       >
//         {isSubmitting ? (
//           <>
//             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0E1F1C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             <span>Subscribing...</span>
//           </>
//         ) : (
//           <>
//             <span>Subscribe Now</span>
//             <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </>
//         )}
//       </button>

//       {/* Status Messages */}
//       {submitStatus === 'success' && (
//         <div className="bg-green-100/20 border border-green-300/30 text-green-100 px-4 py-3 rounded-xl backdrop-blur-sm flex items-center">
//           <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//           </svg>
//           <span className="font-medium">Success! Welcome to our newsletter family.</span>
//         </div>
//       )}

//       {submitStatus === 'error' && (
//         <div className="bg-red-100/20 border border-red-300/30 text-red-100 px-4 py-3 rounded-xl backdrop-blur-sm flex items-center">
//           <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//           </svg>
//           <span className="font-medium">Oops! Something went wrong. Please try again.</span>
//         </div>
//       )}
//     </form>
//   );
// };

// // General Inquiries Form
// const GeneralInquiriesForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     priority: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
//           form_type: 'General Inquiry',
//           ...formData
//         })
//       });

//       const result = await response.json();
//       if (result.success) {
//         setSubmitStatus('success');
//         setFormData({
//           name: '', email: '', phone: '', company: '', subject: '', priority: '', message: ''
//         });
//         setTimeout(() => {
//           onClose();
//           setSubmitStatus('');
//         }, 2000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your email"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Company
//           </label>
//           <input
//             type="text"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your company name"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Subject *
//           </label>
//           <input
//             type="text"
//             name="subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter subject"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Priority Level
//           </label>
//           <select
//             name="priority"
//             value={formData.priority}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
//           >
//             <option value="">Select priority</option>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//             <option value="Urgent">Urgent</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Message *
//         </label>
//         <textarea
//           name="message"
//           required
//           value={formData.message}
//           onChange={handleChange}
//           rows={5}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all resize-none"
//           placeholder="Enter your message..."
//         ></textarea>
//       </div>

//       {submitStatus === 'success' && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
//           Thank you! Your message has been sent successfully.
//         </div>
//       )}

//       {submitStatus === 'error' && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
//           Sorry, there was an error sending your message. Please try again.
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
//       >
//         {isSubmitting ? 'Sending...' : 'Send Message'}
//       </button>
//     </form>
//   );
// };

// // Contact Sales Form
// const ContactSalesForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     jobTitle: '',
//     companySize: '',
//     industry: '',
//     budget: '',
//     timeline: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
//           form_type: 'Sales Inquiry',
//           ...formData
//         })
//       });

//       const result = await response.json();
//       if (result.success) {
//         setSubmitStatus('success');
//         setFormData({
//           name: '', email: '', phone: '', company: '', jobTitle: '', companySize: '', 
//           industry: '', budget: '', timeline: '', message: ''
//         });
//         setTimeout(() => {
//           onClose();
//           setSubmitStatus('');
//         }, 2000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Business Email *
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your business email"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Company Name *
//           </label>
//           <input
//             type="text"
//             name="company"
//             required
//             value={formData.company}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your company name"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Job Title
//           </label>
//           <input
//             type="text"
//             name="jobTitle"
//             value={formData.jobTitle}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
//             placeholder="Enter your job title"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Company Size
//           </label>
//           <select
//             name="companySize"
//             value={formData.companySize}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
//           >
//             <option value="">Select company size</option>
//             <option value="1-10">1-10 employees</option>
//             <option value="11-50">11-50 employees</option>
//             <option value="51-200">51-200 employees</option>
//             <option value="201-1000">201-1000 employees</option>
//             <option value="1000+">1000+ employees</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Industry
//           </label>
//           <select
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
//           >
//             <option value="">Select your industry</option>
//             <option value="Technology">Technology</option>
//             <option value="Healthcare">Healthcare</option>
//             <option value="Finance">Finance</option>
//             <option value="Education">Education</option>
//             <option value="Retail">Retail</option>
//             <option value="Manufacturing">Manufacturing</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Budget Range
//           </label>
//           <select
//             name="budget"
//             value={formData.budget}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
//           >
//             <option value="">Select budget range</option>
//             <option value="Under $10K">Under $10K</option>
//             <option value="$10K - $50K">$10K - $50K</option>
//             <option value="$50K - $100K">$50K - $100K</option>
//             <option value="$100K - $500K">$100K - $500K</option>
//             <option value="Over $500K">Over $500K</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Project Timeline
//         </label>
//         <select
//           name="timeline"
//           value={formData.timeline}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
//         >
//           <option value="">Select timeline</option>
//           <option value="Immediate">Immediate (within 1 month)</option>
//           <option value="Short-term">Short-term (1-3 months)</option>
//           <option value="Medium-term">Medium-term (3-6 months)</option>
//           <option value="Long-term">Long-term (6+ months)</option>
//           <option value="Just exploring">Just exploring</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Tell us about your project *
//         </label>
//         <textarea
//           name="message"
//           required
//           value={formData.message}
//           onChange={handleChange}
//           rows={5}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all resize-none"
//           placeholder="Describe your project requirements, goals, and any specific needs..."
//         ></textarea>
//       </div>

//       {submitStatus === 'success' && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
//           Thank you! Our sales team will contact you within 24 hours.
//         </div>
//       )}

//       {submitStatus === 'error' && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
//           Sorry, there was an error submitting your inquiry. Please try again.
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
//       >
//         {isSubmitting ? 'Submitting...' : 'Request Demo & Pricing'}
//       </button>
//     </form>
//   );
// };

// export default function ContactPage() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [showGeneralForm, setShowGeneralForm] = useState(false);
//   const [showSalesForm, setShowSalesForm] = useState(false);

//   const handleOptionClick = (item) => {
//     if (item.type === 'career') {
//       // Navigate to careers page
//       window.location.href = item.href;
//     } else if (item.type === 'general') {
//       setShowGeneralForm(true);
//       setShowSalesForm(false);
//     } else if (item.type === 'sales') {
//       setShowSalesForm(true);
//       setShowGeneralForm(false);
//     }
//   };

//   const closeAllForms = () => {
//     setShowGeneralForm(false);
//     setShowSalesForm(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-[#0E1F1C] to-[#1a3d36] text-white py-16 px-8 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
//         </div>
//         <div className="max-w-6xl mx-auto relative z-10">
//           <p className="text-sm mb-3 flex items-center gap-2 text-green-200">
//             <a href="/" className="hover:text-green-300 transition-colors">
//               <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
//               </svg>
//               Home
//             </a>
//             <span className="text-green-300">&gt;</span>
//             <span className="font-semibold text-white">Contact Us</span>
//           </p>
//           <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
//             Contact us
//           </h1>
//           <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
//             We're here to help! Our experts are eager to help answer any
//             questions you may have. Please contact us below and our team will
//             reach out to you soon.
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 relative z-10">
//         <div className="bg-white rounded-2xl shadow-2xl p-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-[#386861] mb-1">{stat.number}</div>
//                 <div className="text-gray-600 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Help Options */}
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             How can we help?
//           </h2>
//           <p className="text-gray-600">
//             Choose the option that best fits your needs
//           </p>
//         </div>
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
//           {contactOptions.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleOptionClick(item)}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="rounded-2xl p-6 transition-all duration-300 border-2 border-gray-100 bg-white hover:shadow-xl w-full text-left"
//               style={{
//                 borderColor: hoveredCard === index ? '#386861' : '',
//                 background: hoveredCard === index ? 'linear-gradient(to bottom right, #f0fdf4, white)' : '',
//                 transform: hoveredCard === index ? 'translateY(-4px)' : ''
//               }}
//             >
//               <div className="flex items-center gap-4">
//                 <div 
//                   className="p-4 rounded-xl shadow-md transition-transform duration-300 flex-shrink-0"
//                   style={{
//                     background: 'linear-gradient(to bottom right, #386861, #2d5248)',
//                     transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
//                   }}
//                 >
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     {index === 0 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     )}
//                     {index === 1 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     )}
//                     {index === 2 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//                     )}
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <h3 className="font-bold text-lg text-gray-900 mb-1">
//                     {item.title}
//                   </h3>
//                   <p 
//                     className="text-sm transition-colors duration-300"
//                     style={{
//                       color: hoveredCard === index ? '#386861' : '#6b7280'
//                     }}
//                   >
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* General Inquiries Form - Main Page Display */}
//       {showGeneralForm && (
//         <div className="max-w-4xl mx-auto px-4 py-12">
//           <div className="bg-white rounded-3xl shadow-2xl border border-gray-200">
//             <div className="bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white p-6 rounded-t-3xl">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold">General Inquiries</h2>
//                 <button
//                   onClick={closeAllForms}
//                   className="text-white hover:text-gray-200 transition-colors p-2"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="p-6">
//               <GeneralInquiriesForm onClose={closeAllForms} />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Contact Sales Form - Main Page Display */}
//       {showSalesForm && (
//         <div className="max-w-4xl mx-auto px-4 py-12">
//           <div className="bg-white rounded-3xl shadow-2xl border border-gray-200">
//             <div className="bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white p-6 rounded-t-3xl">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold">Contact Sales</h2>
//                 <button
//                   onClick={closeAllForms}
//                   className="text-white hover:text-gray-200 transition-colors p-2"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="p-6">
//               <ContactSalesForm onClose={closeAllForms} />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Features Section */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Why Choose Us?
//             </h2>
//             <p className="text-gray-600">
//               We're committed to providing exceptional service
//             </p>
//           </div>
//           <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#386861]"
//               >
//                 <div className="mb-4">
//                   <svg className="w-10 h-10 text-[#386861]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     {index === 0 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     )}
//                     {index === 1 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     )}
//                     {index === 2 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                     )}
//                     {index === 3 && (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                     )}
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Global Locations */}
//       <div className="bg-white py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Our  locations
//             </h2>
//             <p className="text-gray-600">
//               Connect with us from anywhere in the world
//             </p>
//           </div>
//           <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
//             {locations.map((loc, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredLocation(index)}
//                 onMouseLeave={() => setHoveredLocation(null)}
//                 className="rounded-2xl overflow-hidden relative shadow-lg transition-all duration-300"
//                 style={{
//                   transform: hoveredLocation === index ? 'translateY(-8px)' : 'translateY(0)',
//                   boxShadow: hoveredLocation === index ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : ''
//                 }}
//               >
//                 <div 
//                   className="w-full h-80 bg-cover bg-center transition-transform duration-500"
//                   style={{
//                     backgroundImage: `url(${loc.image})`,
//                     transform: hoveredLocation === index ? 'scale(1.1)' : 'scale(1)'
//                   }}
//                 ></div>
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-8 text-white flex flex-col justify-end">
//                   <div 
//                     className="p-3 rounded-xl w-fit mb-4 transition-colors duration-300"
//                     style={{
//                       backgroundColor: hoveredLocation === index ? '#386861' : 'rgba(255, 255, 255, 0.2)',
//                       backdropFilter: 'blur(8px)'
//                     }}
//                   >
//                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                     </svg>
//                   </div>
//                   <div className="transform transition-all duration-300">
//                     <h3 className="text-2xl font-bold mb-3">{loc.name}</h3>
//                     <div className="space-y-2 text-gray-100">
//                       <p className="flex items-start gap-2">
//                         <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                         </svg>
//                         <span>
//                           {loc.address}<br />{loc.city}
//                         </span>
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//                         </svg>
//                         <span>{loc.phone}</span>
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                         </svg>
//                         <span 
//                           className="text-sm transition-colors"
//                           style={{
//                             color: hoveredLocation === index ? '#86efac' : ''
//                           }}
//                         >
//                           {loc.email}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-12">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-gray-600">
//               Find quick answers to common questions
//             </p>
//           </div>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
//               >
//                 <button
//                   onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                   className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="font-semibold text-gray-900">{faq.question}</span>
//                   <svg 
//                     className="w-5 h-5 text-[#386861] transition-transform duration-300 flex-shrink-0 ml-4"
//                     style={{
//                       transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
//                     }}
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {expandedFaq === index && (
//                   <div className="px-5 pb-5 text-gray-600">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Newsletter Section with Better Form */}
//       <div className="bg-white py-12">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-gradient-to-br from-[#0E1F1C] via-[#1a3d36] to-[#386861] rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
//             {/* Background decorative elements */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
//               <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400 rounded-full blur-2xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               {/* Header */}
//               <div className="mb-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
//                   Stay Updated
//                 </h2>
//                 <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
//                   Subscribe to our newsletter and get the latest updates, industry insights, and exclusive offers delivered straight to your inbox.
//                 </p>
//               </div>

//               {/* Benefits */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
//                 <div className="flex items-center justify-center space-x-2 text-green-200">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Weekly insights</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2 text-green-200">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Exclusive offers</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2 text-green-200">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>No spam ever</span>
//                 </div>
//               </div>

//               {/* Newsletter Form */}
//               <div className="max-w-lg mx-auto">
//                 <NewsletterForm />
//               </div>

//               {/* Trust indicators */}
//               <div className="mt-6 text-xs text-gray-300">
//                 <p>Join 50,000+ professionals who trust us with their inbox</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";
import { useState } from 'react';

const contactOptions = [
  {
    title: "General inquiries",
    description: "Send us an email",
    href: "#",
    type: "general",
  },
  {
    title: "Find a career",
    description: "Apply now",
    href: "/About-Us/Careers",
    type: "career",
  },
  {
    title: "Contact sales",
    description: "Find B2B solutions",
    href: "#",
    type: "sales",
  },
];

// Updated locations array with only US location
const locations = [
  {
    name: "United States",
    address: "539 W Commerce St #2577 Dallas, TX 75208",
    city: "Dallas, TX 75208",

    email: " contactus@martechbiz.com",
    image: "data:image/jpeg;base64,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",
  },
];

const features = [
  {
    title: "Fast Response Time",
    description: "Get answers to your queries within 24 hours on business days"
  },
  {
    title: "Global Support",
    description: "Our team operates across multiple time zones to serve you better"
  },
  {
    title: "Secure Communication",
    description: "Your data is protected with enterprise-grade security"
  },
  {
    title: "Expert Team",
    description: "Connect with industry professionals who understand your needs"
  }
];

const stats = [
  { number: "50K+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "150+", label: "Team Members" }
];

const faqs = [
  {
    question: "What are your business hours?",
    answer: "Our customer support team is available 24/7 to assist you with any queries or concerns."
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We typically respond to all inquiries within 24 hours on business days. Urgent matters are prioritized."
  },
  {
    question: "Do you offer support in multiple languages?",
    answer: "Yes, we provide support in English, Hindi, and several other regional languages."
  },
  {
    question: "How can I schedule a demo or consultation?",
    answer: "You can schedule a demo by contacting our sales team through the 'Contact sales' option above or by calling our office directly. We'll arrange a convenient time for your consultation."
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "Please provide your name, company details, contact information, and a brief description of your needs. The more details you share, the better we can assist you."
  },
  {
    question: "Do you provide technical support for your products?",
    answer: "Yes, we offer comprehensive technical support for all our products and services. Our expert team is ready to help you resolve any technical issues quickly."
  }
];

// Newsletter Signup Form Component
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change with validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Handle name change with validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    
    if (value.length > 0 && value.length < 2) {
      setNameError('Name must be at least 2 characters long');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate fields
    let hasErrors = false;
    
    if (!name.trim()) {
      setNameError('Name is required');
      hasErrors = true;
    } else if (name.trim().length < 2) {
      setNameError('Name must be at least 2 characters long');
      hasErrors = true;
    }
    
    if (!email.trim()) {
      setEmailError('Email is required');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
          form_type: 'Newsletter Subscription',
          name: name.trim(),
          email: email.trim(),
          source: 'Website Newsletter Signup'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
        setName('');
        setEmailError('');
        setNameError('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Input */}
      <div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/95 backdrop-blur-sm placeholder-gray-500 text-gray-900 font-medium ${
            nameError 
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
              : 'border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 hover:border-white/50'
          }`}
        />
        {nameError && (
          <p className="mt-2 text-sm text-red-200 flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {nameError}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/95 backdrop-blur-sm placeholder-gray-500 text-gray-900 font-medium ${
            emailError 
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
              : 'border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 hover:border-white/50'
          }`}
        />
        {emailError && (
          <p className="mt-2 text-sm text-red-200 flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {emailError}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || emailError || nameError}
        className="w-full px-8 py-4 bg-white text-[#0E1F1C] rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-white flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0E1F1C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Subscribing...</span>
          </>
        ) : (
          <>
            <span>Subscribe Now</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-100/20 border border-green-300/30 text-green-100 px-4 py-3 rounded-xl backdrop-blur-sm flex items-center">
          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Success! Welcome to our newsletter family.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100/20 border border-red-300/30 text-red-100 px-4 py-3 rounded-xl backdrop-blur-sm flex items-center">
          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Oops! Something went wrong. Please try again.</span>
        </div>
      )}
    </form>
  );
};

// General Inquiries Form
const GeneralInquiriesForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    priority: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
          form_type: 'General Inquiry',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', subject: '', priority: '', message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter subject"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Priority Level
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all resize-none"
          placeholder="Enter your message..."
        ></textarea>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// Contact Sales Form
const ContactSalesForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '2c1b7668-e873-404a-9759-f85af53e550b',
          form_type: 'Sales Inquiry',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', jobTitle: '', companySize: '', 
          industry: '', budget: '', timeline: '', message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your business email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all"
            placeholder="Enter your job title"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Size
          </label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select company size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Industry
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select your industry</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select budget range</option>
            <option value="Under $10K">Under $10K</option>
            <option value="$10K - $50K">$10K - $50K</option>
            <option value="$50K - $100K">$50K - $100K</option>
            <option value="$100K - $500K">$100K - $500K</option>
            <option value="Over $500K">Over $500K</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Project Timeline
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all bg-white"
        >
          <option value="">Select timeline</option>
          <option value="Immediate">Immediate (within 1 month)</option>
          <option value="Short-term">Short-term (1-3 months)</option>
          <option value="Medium-term">Medium-term (3-6 months)</option>
          <option value="Long-term">Long-term (6+ months)</option>
          <option value="Just exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tell us about your project *
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#386861] focus:border-transparent transition-all resize-none"
          placeholder="Describe your project requirements, goals, and any specific needs..."
        ></textarea>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
          Thank you! Our sales team will contact you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
          Sorry, there was an error submitting your inquiry. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Request Demo & Pricing'}
      </button>
    </form>
  );
};

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showGeneralForm, setShowGeneralForm] = useState(false);
  const [showSalesForm, setShowSalesForm] = useState(false);

  const handleOptionClick = (item) => {
    if (item.type === 'career') {
      // Navigate to careers page
      window.location.href = item.href;
    } else if (item.type === 'general') {
      setShowGeneralForm(true);
      setShowSalesForm(false);
    } else if (item.type === 'sales') {
      setShowSalesForm(true);
      setShowGeneralForm(false);
    }
  };

  const closeAllForms = () => {
    setShowGeneralForm(false);
    setShowSalesForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0E1F1C] to-[#1a3d36] text-white py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-sm mb-3 flex items-center gap-2 text-green-200">
            <a href="/" className="hover:text-green-300 transition-colors">
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Home
            </a>
            <span className="text-green-300">&gt;</span>
            <span className="font-semibold text-white">Contact Us</span>
          </p>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Contact us
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
            We're here to help! Our experts are eager to help answer any
            questions you may have. Please contact us below and our team will
            reach out to you soon.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#386861] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Options */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How can we help?
          </h2>
          <p className="text-gray-600">
            Choose the option that best fits your needs
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          {contactOptions.map((item, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(item)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-2xl p-6 transition-all duration-300 border-2 border-gray-100 bg-white hover:shadow-xl w-full text-left"
              style={{
                borderColor: hoveredCard === index ? '#386861' : '',
                background: hoveredCard === index ? 'linear-gradient(to bottom right, #f0fdf4, white)' : '',
                transform: hoveredCard === index ? 'translateY(-4px)' : ''
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="p-4 rounded-xl shadow-md transition-transform duration-300 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(to bottom right, #386861, #2d5248)',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    )}
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === index ? '#386861' : '#6b7280'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* General Inquiries Form - Main Page Display */}
      {showGeneralForm && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">General Inquiries</h2>
                <button
                  onClick={closeAllForms}
                  className="text-white hover:text-gray-200 transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <GeneralInquiriesForm onClose={closeAllForms} />
            </div>
          </div>
        </div>
      )}

      {/* Contact Sales Form - Main Page Display */}
      {showSalesForm && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-r from-[#0E1F1C] to-[#386861] text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Contact Sales</h2>
                <button
                  onClick={closeAllForms}
                  className="text-white hover:text-gray-200 transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <ContactSalesForm onClose={closeAllForms} />
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              We're committed to providing exceptional service
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#386861]"
              >
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[#386861]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Global Locations */}
<div className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Our Location
      </h2>
      <p className="text-gray-600">
        Connect with us from our headquarters
      </p>
    </div>
    {/* Centered US location card */}
    <div className="flex justify-center">
      <div className="max-w-lg w-full">
        <div
          onMouseEnter={() => setHoveredLocation(0)}
          onMouseLeave={() => setHoveredLocation(null)}
          className="rounded-2xl overflow-hidden relative shadow-lg transition-all duration-300"
          style={{
            transform: hoveredLocation === 0 ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hoveredLocation === 0 ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : ''
          }}
        >
          <div 
            className="w-full h-80 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${locations[0].image})`,
              transform: hoveredLocation === 0 ? 'scale(1.1)' : 'scale(1)'
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-8 text-white flex flex-col justify-end">
            <div 
              className="p-3 rounded-xl w-fit mb-4 transition-colors duration-300"
              style={{
                backgroundColor: hoveredLocation === 0 ? '#386861' : 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="transform transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">{locations[0].name}</h3>
              <div className="space-y-2 text-gray-100">
                <p className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>
                    {locations[0].address}<br />{locations[0].city}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span 
                    className="text-sm transition-colors"
                    style={{
                      color: hoveredLocation === 0 ? '#86efac' : ''
                    }}
                  >
                    {locations[0].email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg 
                    className="w-5 h-5 text-[#386861] transition-transform duration-300 flex-shrink-0 ml-4"
                    style={{
                      transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Newsletter Section with Better Form */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0E1F1C] via-[#1a3d36] to-[#386861] rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Stay Updated
                </h2>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter and get the latest updates, industry insights, and exclusive offers delivered straight to your inbox.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive offers</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No spam ever</span>
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="max-w-lg mx-auto">
                <NewsletterForm />
              </div>

              {/* Trust indicators */}
              <div className="mt-6 text-xs text-gray-300">
                <p>Join 50,000+ professionals who trust us with their inbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
