import React, { useState } from 'react';
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZXp9KBQFOhYxWahFfjqzSvMBjpwSlNTEN8qsCGxfpvu95y5KNH2GsSLjo-njTqPZXug/exec';
const Form = () => {
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

  return (
    <div className="max-w-md p-8 m-10 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">MIS</label>
          <input
            type="text"
            name="mis"
            value={formData.mis}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your MIS"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">College Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your college email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preference 1</label>
          <select
            name="pref1"
            value={formData.pref1}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Preference 1</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preference 2</label>
          <select
            name="pref2"
            value={formData.pref2}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Preference 2</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preference 3</label>
          <select
            name="pref3"
            value={formData.pref3}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Preference 3</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Why do you want to join impressions?</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your reason"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Part of any other fest?</label>
          <input
            type="text"
            name="otherFest"
            value={formData.otherFest}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter if you are part of any other fest"
          />
        </div>
        <button
          type="submit"
          className={`w-full p-2 bg-green-500 text-white rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {responseMessage && (
        <p className={`mt-4 ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default Form;