import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicPage from '../../components/BasicPage';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subjects: [],
    name: '',
    email: '',
    phone: '',
    address: '',
    inquiry: '',
    agreeToPrivacy: false,
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      subjects: checked 
        ? [...prev.subjects, value] 
        : prev.subjects.filter(s => s !== value)
    }));
  };

  return (
    <div className="!text-black bg-[#F9EED2] md:pb-25">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="w-fit text-4xl pl-6 mt-45 mb-15 border-b border-black md:pl-[12.5%]">Contact</span>

        <BasicPage className='flex-1 flex flex-col'>
          <div className="space-y-6 mb-15">
            <p>Thank you for considering us.<br />First meeting is also available online.</p>
            <p>Feel free to contact us.</p>
          </div>

          <div className="space-y-4 mb-20 flex-1">
            <h2 className="text-2xl font-playfairDisplay">Telephone</h2>
            <p>For inquiries feel free to fill the form, or you can contact us by:</p>
            <p className="text-3xl md:text-4xl font-light">(555) 123-4567</p>
            <p>Reception hours: Weekdays 9:00 - 17:30</p>
          </div>


          {/* Tabs / Buttons */}
          <div className="pb-5 flex gap-4 items-center justify-center">
            <button className="flex-1 py-3 bg-[#EAEFF5] rounded-full text-sm">Consultation</button>
            <button className="flex-1 py-3 bg-[#EAEFF5] rounded-full text-sm">Application</button>
          </div>
        </BasicPage>
      </div>
      

      {/* Form Section */}
      <main className="bg-[#F0F0F0] px-6 py-10 md:mx-[12.5%]">
        <form className="max-w-xl mx-auto space-y-8">
          
          {/* Checkboxes */}
          <div className="space-y-4">
            <p className="font-medium">Subject (multiple selection possible)</p>
            {['Space design and renovation', 'About estimation method and production', 'Others'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={item}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 border-gray-300 rounded"
                />
                <span className="text-[15px]">{item}</span>
              </label>
            ))}
          </div>

          {/* Text Inputs */}
          {[
            { label: 'Name / Company Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone (optional)', name: 'phone', type: 'tel' },
            { label: 'Address', name: 'address', type: 'text' },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="font-medium">{field.label}</label>
              <input 
                type={field.type}
                className="w-full p-3 border border-gray-300 rounded bg-white outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          ))}

          {/* Textarea */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Your Inquiry</label>
            <textarea 
              rows="6"
              className="w-full p-3 border border-gray-300 rounded bg-white outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Privacy Policy */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              required
              className="w-5 h-5 border-gray-300 rounded"
            />
            <span className="text-[15px]">
              I agree to the <Link href="/" className="underline">Privacy Policy</Link>.
            </span>
          </label>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#444444] text-white py-4 rounded-full font-medium hover:bg-black transition-colors"
          >
            Submit Inquiry
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactForm;