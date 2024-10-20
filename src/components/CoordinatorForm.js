import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const scriptURL = 'https://script.google.com/macros/s/AKfycbzWUgTV3ID3iOEFhxCgB7-uSftZPLihQ0dNlXsRdSHOqwrVWL2Kxx49nIVsNJG9wB9uBQ/exec';

const CoordinatorForm = () => {
  const [formData, setFormData] = useState({
    mis: '',
    name: '', 
    email: '',
    pref1: '',
    pref2: '',
    pref3: '',
    reason: '',
    otherFest: '',
    portfolio: '',
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
      portfolio: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.endsWith('@coeptech.ac.in')) {
      setResponseMessage(`Email must end with @coeptech.ac.in`);
      return;
    }

    // for (const key in formData) {
    //   if (formData[key].trim() === '' && key !== 'portfolio' && key !== 'image') {
    //     setResponseMessage('All fields are mandatory.');
    //     return;
    //   }
    // }

    setIsSubmitting(true);
    setResponseMessage('');

    console.log(formData);

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      // mode: "no-cors"
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false);
        setResponseMessage(data.message || 'An error occurred. Please try again.');
        if (data.result === 'success') {
          clearForm();
          toast.success('Form submitted successfully!');
          setTimeout(() => navigate('/'), 3000);
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        setResponseMessage('An error occurred. Please try again.');
      });
  };
  
  const options = [
    'Accounts', 'COG', 'Decor', 'Design', 'Documentation', 'Events & Proshows',
    'Finance', 'Marketing', 'Media', 'PR', 'Prints and Purchase', 'Production', 'VFX', 'Web'
  ];

  const options2 = [
    'None', 'Accounts', 'COG', 'Decor', 'Design', 'Documentation', 'Events & Proshows',
    'Finance', 'Marketing', 'Media', 'PR', 'Prints and Purchase', 'Production', 'VFX', 'Web'
  ];

  const portfolioInfo = {
    Accounts: "Responsible for managing the finances and keeping records of transactions.",
    COG: "COG stands for Core Operations Group, managing event logistics and flow.",
    Decor: "In charge of the aesthetics and decorations for the fest.",
    Design: "Handles the visual elements, including digital and print designs.",
    Documentation: "Keeps official records and manages documents related to the fest.",
    "Events & Proshows": "Coordinates and manages events and professional shows.",
    "Finance & Sponsorships": "Oversees budget planning, expenditure tracking, and fund allocation.",
    Marketing: "Responsible for promoting the fest and attracting sponsorships.",
    Media: "Manages photography, videography, and media relations.",
    PR: "Public relations team, responsible for external communications.",
    "Prints and Purchase": "In charge of procuring materials and handling print media.",
    Production: "Takes care of audio-visual setups, stages, and lighting.",
    VFX: "Works on visual effects for digital and stage-based performances.",
    Web: "Develops and maintains the fest website and handles online systems."
  };

  const inputClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const selectClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white";

  const getFilteredOptions = (currentPref) => {
    const selectedPrefs = [formData.pref1, formData.pref2, formData.pref3].filter(pref => pref !== currentPref);
    return options.filter(option => !selectedPrefs.includes(option));
  };

  return (
    <div className="min-h-[90vh] py-10 bg-gray-50 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-5xl p-8 mx-auto bg-white shadow-lg rounded-xl">
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
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Portfolio Information Section */}
          <div className="mt-12 lg:mt-0">
            <h3 className="mb-6 text-2xl font-semibold text-gray-700">Portfolio Information</h3>
            <div className="space-y-4">
              {Object.entries(portfolioInfo).map(([portfolio, info]) => (
                <div key={portfolio}>
                  <h4 className="text-xl font-semibold text-blue-600">{portfolio}:</h4>
                  <p className="text-gray-700">{info}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form Section */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Coordinator Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>MIS</label>
                <input
                  required
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
                    required
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
                    required
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
                  <option value="" key="">-</option>
                  {getFilteredOptions(formData[`pref${num}`]).map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          

              <div>
                <label className={labelClass}>(Not mandatory) Your portfolio as a volunteer in impressions'23</label>
                <select
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className={selectClass}
                >
                  {options2.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Why do you want to join impressions?</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className={`${inputClass} min-h-[100px] resize-y`}
                  placeholder="Enter your reason"
                  required
                />
              </div>

          <div>
            <label className={labelClass}>Part of any other fest?</label>
            <input
              required
              type="text"
              name="otherFest"
              value={formData.otherFest}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Enter if you are part of any other fest"
            />
          </div>

          <div>
            <label className={labelClass}>(Not mandatory) Upload Screenshot (Under25 RSVP Email Screenshot)</label>
            <input
              type="file"
              name="file"
              accept='image/*'
              onChange={(e) => {
                let file = e.target.files[0];
                let fr = new FileReader();
                fr.addEventListener('loadend', () => {
                  let res = fr.result;
                  setFormData((prevData) => ({
                    ...prevData,
                    image: res
                  }));
                });
                fr.readAsDataURL(file);
              }}
              className={inputClass}
            />
            {formData.image && <img src={formData.image} alt="Uploaded" />}
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
      </div>
    </div>
  );
};

export default CoordinatorForm;
