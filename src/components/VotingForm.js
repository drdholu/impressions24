import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Check, AlertCircle, Vote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VotingForm = () => {

    const candidates = [
        { id: 1, name: 'Candidate 1' },
        { id: 2, name: 'Candidate 2' },
        { id: 3, name: 'Candidate 3' },
    ]

    const navigate = useNavigate();
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!selectedCandidate) {
            toast.error('Please select a candidate');
            return;
        }

        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ candidateId: selectedCandidate }),
            });

            if (response.ok) {
                toast.success(`Vote registered successfully for your candidate!`);
                setTimeout(() => setIsSubmitting(false), 1000);
                // Redirect after 5 seconds
                setTimeout(() => {
                    navigate('/');
                }, 4000);
            } else {
                toast.error('Failed to cast vote. Please try again.');
            }
        } catch (error) {
            toast.error('Error submitting vote. Please try again.');
        }
    };

    const labelClass = "block mb-2 text-sm font-semibold text-gray-700";
    const selectClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200";

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
            <div className="w-full max-w-lg p-8 mx-4 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <ToastContainer />

                <div className="flex flex-col items-center mb-8">
                    <Vote className="w-12 h-12 mb-4 text-blue-600" />
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Cast Your Vote
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Select your preferred candidate from the list below
                    </p>
                </div>

                {responseMessage && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${responseMessage.includes('successfully')
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                        {responseMessage.includes('successfully')
                            ? <Check className="w-5 h-5" />
                            : <AlertCircle className="w-5 h-5" />}
                        <p className="text-sm font-medium">{responseMessage}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className={labelClass}>
                            Select Candidate
                        </label>
                        <div className="relative">
                            <select
                                value={selectedCandidate}
                                onChange={(e) => setSelectedCandidate(e.target.value)}
                                className={selectClass}
                                required
                            >
                                <option value="">-- Select a candidate --</option>
                                {candidates.map(candidate => (
                                    <option key={candidate.id} value={candidate.id}>
                                        {candidate.name}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-200 
              transform hover:scale-[1.02] active:scale-[0.98] 
              ${isSubmitting
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg'
                            }`}
                        disabled={isSubmitting}
                    >
                        <span className="flex items-center justify-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <Vote className="w-5 h-5" />
                                    <span>Cast Vote</span>
                                </>
                            )}
                        </span>
                    </button>
                </form>

                <p className="mt-4 text-xs text-center text-gray-500">
                    Your vote is confidential and secure
                </p>
            </div>
        </div>
    );
};

export default VotingForm;