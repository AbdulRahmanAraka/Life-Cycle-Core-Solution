
import React from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    overview: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request has been submitted successfully.");
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl">
            Let's discuss how we can transform your engineering operations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Info */}
          <div className="reveal active">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
              Request a <span className="text-blue-600">Consultation</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our experts are ready to analyze your current systems and recommend the right solutions. Fill out the form and we'll get back to you within 24 hours.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                { icon: 'fa-clock', title: 'Quick Response', desc: 'Get a response within 24 hours' },
                { icon: 'fa-user-shield', title: 'Confidential', desc: 'Your information is secure and private' },
                { icon: 'fa-handshake', title: 'No Commitment', desc: 'Free consultation with no obligations' },
                { icon: 'fa-award', title: 'Expert Guidance', desc: 'Industry-leading PLM specialists' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <i className={`fas ${item.icon} text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="reveal active" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white border-2 border-slate-200 rounded-[2rem] shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-900 mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Full Name *
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleChange} 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-xl px-5 py-4 outline-none font-semibold text-slate-900 transition-colors duration-300" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Company Name *
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="companyName" 
                    value={formData.companyName}
                    onChange={handleChange} 
                    placeholder="Acme Corporation"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-xl px-5 py-4 outline-none font-semibold text-slate-900 transition-colors duration-300" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Work Email *
                  </label>
                  <input 
                    required 
                    type="email" 
                    name="workEmail" 
                    value={formData.workEmail}
                    onChange={handleChange} 
                    placeholder="john.doe@company.com"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-xl px-5 py-4 outline-none font-semibold text-slate-900 transition-colors duration-300" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Project Overview *
                  </label>
                  <textarea 
                    required 
                    rows={5} 
                    name="overview" 
                    value={formData.overview}
                    onChange={handleChange} 
                    placeholder="Tell us about your project, challenges, and goals..."
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-500 rounded-xl px-5 py-4 outline-none font-semibold text-slate-900 resize-none transition-colors duration-300"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-5 rounded-xl font-black text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Request
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
