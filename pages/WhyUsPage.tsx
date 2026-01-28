
import React from 'react';
import { Link } from 'react-router-dom';

const WhyUsPage: React.FC = () => {
  const points = [
    {
      title: 'Expert-Led PLM & Engineering Focus',
      desc: 'Lifecycle Core Solutions is led by professionals with strong hands-on experience in PLM and engineering IT environments.',
      features: [
        'Deep understanding of engineering workflows',
        'Practical, implementation-focused decisions',
        'Solutions designed for real operational use, not theory'
      ],
      note: 'We speak the language of both engineering and IT, ensuring better alignment across teams.'
    },
    {
      title: 'Practical & Outcome-Driven Approach',
      desc: 'We follow a business-first mindset, similar to leading PLM consulting firms.',
      features: [
        'Solving real business problems',
        'Improving system usability and adoption',
        'Delivering measurable outcomes'
      ],
      note: 'We avoid unnecessary complexity and ensure solutions are aligned with your operational goals.'
    },
    {
      title: 'Strong PLM & Digital Transformation Expertise',
      desc: 'We bring experience across leading PLM platforms and enterprise systems, supporting organizations at different stages of their digital journey.',
      features: [
        'Reduce PLM implementation risks',
        'Improve data consistency and process efficiency',
        'Enable digital continuity across systems'
      ],
      note: 'We ensure technology investments deliver long-term value.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Why Choose LCS</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-20 reveal active">
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Engineering Digital Continuity, <br/><span className="text-blue-600">Delivered with Purpose</span></h2>
          <p className="text-2xl text-slate-600 max-w-4xl leading-relaxed font-medium">
            At <strong>Lifecycle Core Solutions</strong>, we focus on delivering practical, scalable, and outcome-driven solutions that align engineering systems with business objectives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3 space-y-24">
            {points.map((p, idx) => (
              <div key={idx} className="relative reveal active">
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight border-l-4 border-blue-600 pl-6">{p.title}</h3>
                <p className="text-xl text-slate-500 mb-10 italic leading-relaxed">{p.desc}</p>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-6 uppercase tracking-widest text-xs">Value Proposition:</h4>
                  <ul className="space-y-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <i className="fas fa-check-circle text-blue-500"></i>
                        <span className="text-slate-800 font-bold text-lg">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-900 font-black text-lg mt-8 border-l-4 border-blue-600 pl-6">{p.note}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-40 bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl reveal active">
               <h4 className="text-3xl font-black mb-10 tracking-tight">Strategic Advantage</h4>
               <ul className="space-y-8">
                 {[
                   'Expert-led PLM consulting',
                   'Practical and scalable solutions',
                   'Clear communication and transparency',
                   'Strong engineering and IT alignment',
                   'Focus on long-term digital continuity'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start space-x-4">
                     <i className="fas fa-arrow-right text-blue-500 mt-1"></i>
                     <span className="text-lg font-bold text-slate-300">{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-16 pt-12 border-t border-slate-800">
                 <Link to="/contact" className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl text-center btn-refined shimmer-effect block shadow-2xl">
                   Get a Consultation
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
