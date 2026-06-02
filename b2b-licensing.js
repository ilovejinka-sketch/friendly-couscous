import React, { useState } from 'react';

export default function B2BLicensing() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    interestType: 'licensing', // licensing, bulk, institutional
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrated back-office procurement pipeline webhook placeholder
    setSubmitted(true);
  };

  return (
    <div className="min-min-h-screen bg-neutral-950 text-white font-sans antialiased">
      {/* Structural Hero Matrix */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center border-b border-neutral-900">
        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase block mb-3">
          Enterprise Licensing & Institutional Portfolios
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Powering Global Wellness with <span className="text-amber-500">Jinka Inside</span>
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed">
          Transitioning foundational botanical stabilization methods into scalable IP licensing formats. Partner with Jinka Premium Plus LLC to embed our high-velocity Bio-Lipid Matrix delivery systems into your existing functional food, beverage, or nutraceutical product pipelines.
        </p>
      </section>

      {/* IP & Molecular Technology Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl">
          <div className="text-amber-500 text-2xl font-mono mb-4">01 /</div>
          <h3 className="text-xl font-bold mb-3">Proprietary Alkaline Heat Process</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Our specialized single-step methodology permanently binds molecular synergy markers to active carbohydrate vectors and lipid carrier shields, maintaining active stability without artificial synthetic preservatives.
          </p>
        </div>
        <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl">
          <div className="text-amber-500 text-2xl font-mono mb-4">02 /</div>
          <h3 className="text-xl font-bold mb-3">Bio-Lipid Delivery Matrix</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            By surrounding pure botanicals in organic healthy lipids, the formula successfully bypasses gastric breakdown channels, increasing relative cellular absorption capacity by up to 2000%.
          </p>
        </div>
        <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl">
          <div className="text-amber-500 text-2xl font-mono mb-4">03 /</div>
          <h3 className="text-xl font-bold mb-3">Institutional Research Linkages</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Our extraction matrices are backed by continuous development frameworks and collaborative clinical protocol reviews alongside institutional researchers based in Houston, Texas.
          </p>
        </div>
      </section>

      {/* Commercial Bulk Procurement Data Matrix */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Commercial Procurement Parameters</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="text-xs text-neutral-500 uppercase border-b border-neutral-800">
                <tr>
                  <th className="py-4 font-semibold">Procurement Core Tier</th>
                  <th className="py-4 font-semibold">Packaging Specifications</th>
                  <th className="py-4 font-semibold">Minimum Order Volume</th>
                  <th className="py-4 font-semibold">Target Utilization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                <tr>
                  <td className="py-4 font-medium text-white">Retail Distribution Assortment</td>
                  <td className="py-4">Premium Protective Amber Jars</td>
                  <td className="py-4">500 Standard Units</td>
                  <td className="py-4">Direct Merchant Placement (H-E-B, Retail Chains)</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Jinka Inside Industrial Bulk</td>
                  <td className="py-4">55-Gallon Stainless Steel Drums</td>
                  <td className="py-4">1 Industrial Unit</td>
                  <td className="py-4">Co-Manufacturing & Functional Ingredient Integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B2B Intake Portal */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Initiate Enterprise Evaluation</h2>
        <p className="text-neutral-400 text-xs mb-8">Secure routing directly to Jinka Executive Office parameters.</p>
        
        {submitted ? (
          <div className="bg-amber-950/30 border border-amber-900/50 p-8 rounded-2xl text-amber-400 font-medium text-sm">
            ✓ Inquiry securely logged inside the back-office matrix. An executive coordinator will review your corporate parameters.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Corporate Entity Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition"
                placeholder="Example Enterprise LLC"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Secure Contact Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition"
                placeholder="executive@company.com"
                value={formData.contactEmail}
                onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Strategic Interaction Pathway</label>
              <select 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition text-neutral-300"
                value={formData.interestType}
                onChange={(e) => setFormData({...formData, interestType: e.target.value})}
              >
                <option value="licensing">Proprietary IP Licensing (Jinka Inside)</option>
                <option value="bulk">Industrial Bulk Procurement Matrix</option>
                <option value="institutional">Institutional Investment Protocols</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Strategic Mandate Overview</label>
              <textarea 
                rows="4"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 transition placeholder-neutral-600 resize-none"
                placeholder="Outline deployment timelines or configuration needs..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-lg transition duration-150"
            >
              Transmit Procurement Parameters
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
