
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const scriptURL = 'https://script.google.com/macros/s/AKfycbzaQoSHq-xyF7jiUnI7cPWT2pD-Uibiel0E9dsBM5_4PtEsjNBljLqOgD6ElZXlTawx/exec';
const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    mis: '',
    name: '',
    email: '',
    pref1: '',
    pref2: '',
    pref3: '',
    reason: '',
    otherFest: '',
  });

  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      mis: '',
      name: '',
      email: '',
      pref1: '',
      pref2: '',
      pref3: '',
      reason: '',
      otherFest: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setResponseMessage('All fields are mandatory.');
        return;
      }
    }

    setIsSubmitting(true);
    setResponseMessage('');

    const params = new URLSearchParams(formData).toString();
    const urlWithParams = `${scriptURL}?${params}`;

    fetch(urlWithParams, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        setResponseMessage(data.message || 'An error occurred. Please try again.');
        if (data.result === 'success') {
          clearForm();
          // toast.success('Form submitted successfully!', {
          //   position: toast.POSITION.BOTTOM_RIGHT,
          // });
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setResponseMessage('An error occurred. Please try again.');
      });
  };

  const options = [
    'Accounts', 'COG', 'Decor', 'Design', 'Documentation', 'Events & Proshows',
    'Finance', 'Marketing', 'Media', 'PR', 'Prints and Purchase', 'Production', 'VFX', 'Web'
  ];

  const inputClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const selectClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white";


  return (
    <div className="min-h-[90vh] py-10 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-xl p-8 mx-auto bg-white shadow-lg rounded-xl">
        {responseMessage && (
          <div className={`mb-3 p-4 rounded-lg flex items-center gap-2 ${
            responseMessage.includes('successfully') 
              ? 'bg-green-50 text-green-700' 
              : 'bg-red-50 text-red-700'
          }`}>
            {responseMessage.includes('successfully') 
              ? <CheckCircle2 className="w-5 h-5" />
              : <AlertCircle className="w-5 h-5" />}
            <p>{responseMessage}</p>
          </div>
        )}
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Vols Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={labelClass}>MIS</label>
            <input
              type="number"
              name="mis"
              value={formData.mis}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Enter your MIS"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className={labelClass}>College Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Enter your college email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((num) => (
              <div key={num}>
                <label className={labelClass}>Preference {num}</label>
                <select
                  name={`pref${num}`}
                  value={formData[`pref${num}`]}
                  onChange={handleInputChange}
                  className={selectClass}
                >
                  <option value="">Select</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div>
            <label className={labelClass}>Why do you want to join impressions?</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder="Enter your reason"
            />
          </div>

          <div>
            <label className={labelClass}>Part of any other fest?</label>
            <input
              type="text"
              name="otherFest"
              value={formData.otherFest}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Enter if you are part of any other fest"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-200 ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;