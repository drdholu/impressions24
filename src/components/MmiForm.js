import React, { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
// import Details from "./ui/Details";
import Details2 from "./ui/Details2"; // Import the Details2 component
import Navbar from './Navbar'

const scriptURL = 'https://script.google.com/macros/s/AKfycbyYnQ5CEsu2pTh8odizO2nueqCPzR17sLVlP961Zb4MXXJ6IyXCvwpYwwg0vK7drrkU/exec'
const MMIForm = () => {
    const [formData, setFormData] = useState({
        mis: '',
        name: '',
        email: '',
        branch: '',        // Added branch field
        phone: '',         // Added phone number field
        talent: '',        // Added talent field
        description: '',   // Added description field
        followInstagram: '', // Changed to store 'Yes' or 'No'
    });

    const formRef = useRef();

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
            branch: '',        // Added branch field
            phone: '',         // Added phone number field
            talent: '',        // Added talent field
            description: '',   // Added description field
            followInstagram: '', // Changed to store 'Yes' or 'No'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email.endsWith('@coeptech.ac.in')) {
            toast.error('Email must end with @coeptech.ac.in');
            setResponseMessage(`Email must end with @coeptech.ac.in`);
            return;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            toast.error('Phone number must be 10 digits');
            setResponseMessage('Phone number must be 10 digits');
            return;
        }

        for (const key in formData) {
            if (formData[key].trim() === '' && key !== 'portfolio' && key !== 'contact') {
                toast.error("Please fill all manditory fields");
                console.log(key);
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
                console.log(data);
                setResponseMessage(data.message || 'An error occurred. Please try again.');
                if (data.message === "MIS already exists!") {
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
        'Manufacturing', 'Civil', 'Computer', 'Robotics & AI', 'EnTC', 'Electrical',
        'Instrumentation', 'Metallurgy', 'Mechanical'
    ];

    const inputClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";
    const selectClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white";

    // const getFilteredOptions = (currentPref) => {
    //     const selectedPrefs = [formData.pref1, formData.pref2, formData.pref3].filter(pref => pref !== currentPref);
    //     return options.filter(option => !selectedPrefs.includes(option));
    // };

    // const scrollToContainer = () => {
    //     if (formRef.current) {
    //         formRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <div className="min-h-[90vh] bg-gray-50">
            <Navbar />
            <ToastContainer />
            <div className="text-center">
                <h1 className="m-3 text-4xl font-bold text-red-600">Mr. & Mrs. Impressions 2024</h1>
                {/* <p className="text-xl text-gray-600">COEP Technological University Cultural Festival</p> */}
            </div>

            {/* <p className="flex items-center justify-center pt-2"><button onClick={scrollToContainer} className='text-red-400 animate-pulse'>Scroll To Forms</button></p> */}
            {/* <Details /> */}
            <Details2 />  {/* Include the Details2 component */}

            <div className="max-w-5xl p-8 mx-auto bg-white shadow-lg rounded-xl">
                {responseMessage && (
                    <div className={`mb-3 p-4 rounded-lg flex items-center gap-2 ${responseMessage.includes('successfully')
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

                    <div ref={formRef}>
                        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Registration Form</h2>

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

                            <div>
                                <label className={labelClass}>Branch</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleInputChange}
                                    className={selectClass}
                                    required
                                >
                                    <option value="">Select your branch</option>
                                    {options.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className={labelClass}>Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    placeholder="Enter your phone number"
                                    pattern="[0-9]{10}"
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Your Talent</label>
                                <input
                                    required
                                    type="text"
                                    name="talent"
                                    value={formData.talent}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    placeholder="Enter your talent"
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Describe yourself in three words</label>
                                <input
                                    required
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    placeholder="Describe yourself in three words"
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Do you follow Impressions on Instagram?</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="followInstagram"
                                            value="Yes"
                                            checked={formData.followInstagram === 'Yes'}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="followInstagram"
                                            value="No"
                                            checked={formData.followInstagram === 'No'}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                                <p className="mt-2 text-blue-500 underline">
                                    <a href="https://www.instagram.com/impressions_coep/" target="_blank" rel="noopener noreferrer">
                                        @impressions_coep
                                    </a>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-200 ${isSubmitting
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

export default MMIForm;
