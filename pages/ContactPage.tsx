
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
    <div className="bg-white pb-20">
      <div className="bg-slate-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 flex items-center space-x-6">
          <div className="h-16 w-auto flex items-center justify-center">
            <img src="assets/logo.png" alt="LCS Logo" className="h-full w-auto block" />
          </div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">Consultation Request</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-3xl mx-auto p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">Full Name *</label>
              <input required type="text" name="fullName" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-transparent focus:border-blue-500 px-4 py-3 outline-none font-bold" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">Company Name *</label>
              <input required type="text" name="companyName" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-transparent focus:border-blue-500 px-4 py-3 outline-none font-bold" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">Work Email *</label>
              <input required type="email" name="workEmail" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-transparent focus:border-blue-500 px-4 py-3 outline-none font-bold" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-widest">Project Overview *</label>
              <textarea required rows={4} name="overview" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-transparent focus:border-blue-500 px-4 py-3 outline-none font-bold"></textarea>
            </div>
            <div className="text-center pt-8">
              <button type="submit" className="bg-blue-600 text-white px-12 py-5 rounded-xl font-black text-xl btn-refined shimmer-effect">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
