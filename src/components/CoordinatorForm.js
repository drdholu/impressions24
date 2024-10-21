import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Details from "./ui/Details"

const scriptURL = 'https://script.google.com/macros/s/AKfycbw3nT70e18UZh0pjp6gHaxStm2jnu2qMqdasqRRX4qW4lUCYOohjuzxJesJsq1bT0nf1g/exec';

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
      toast.error('Email must end with @coeptech.ac.in');
      setResponseMessage(`Email must end with @coeptech.ac.in`);
      return;
    }

    for (const key in formData) {
      if (formData[key].trim() === '' && key !== 'portfolio' && key !== 'image') {
        toast.error("Please fill all manditory fields");
        setResponseMessage('All fields are mandatory.');
        return;
      }
    }

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
        if(data.message==="MIS already exists!"){
          toast.error("MIS already exists!");
        }
        if (data.result === 'success') {
          clearForm();
          toast.success('Form submitted successfully!');
          setTimeout(() => navigate('/'), 3000);
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        toast.error('An error occurred. Please try again.');
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
      {/* <div className="text-cente ">
        <h1 className="text-4xl font-bold text-indigo-600">Impressions Coordinator Induction</h1>
        <p className="text-xl text-gray-600">COEP Technological University Cultural Festival</p>
      </div> */}
      
      <Details />

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
        
        <div className="">
          
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
                    : 'bg-blue-600 hover:bg-red-700 active:bg-red-800'
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
