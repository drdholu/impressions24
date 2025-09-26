import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../images/MMI/landing.jpg';
import { toast } from 'sonner';
import { HashLoader } from 'react-spinners';

const MMIForm = () => {
    const [formData, setFormData] = useState({
        mis: '',
        name: '',
        email: '',
        branch: '',
        phone: '',
        talent: '',
        description: '',
        coepKnowledge: '',
        followsInstagram: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "MMI Registration | COEP Impressions";
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        try {
            if (loading) return;
            setLoading(true);

            const { mis, name, email, branch, phone, talent, description, coepKnowledge, followsInstagram } = formData;

            // Validation
            if (!mis || !name || !email || !branch || !phone || !talent || !description || !coepKnowledge || !followsInstagram) {
                toast.error('Please fill all the fields.');
                setLoading(false);
                return;
            }

            if (!/^\d{9}$/.test(mis)) {
                toast.error('MIS must be exactly 9 digits.');
                setLoading(false);
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                toast.error('Phone number must be exactly 10 digits.');
                setLoading(false);
                return;
            }

            const emailPattern = /^[a-zA-Z0-9]+\.[a-zA-Z]+@coeptech\.ac\.in$/;
            if (!emailPattern.test(email)) {
                toast.error('Invalid email! Please use your college email');
                setLoading(false);
                return;
            }

            console.log('Form submitted:', formData);
            const formDataToSend = new FormData();
            const mapping = {
                mis: 'MIS',
                name: 'Name',
                email: 'College Email',
                branch: 'Branch',
                phone: 'Phone Number',
                talent: 'Your Talent',
                description: 'Describe yourself in three words',
                coepKnowledge: 'How well do you know COEP on scale of 1 to 10',
                followsInstagram: 'Do you follow Impressions on Instagram?'
            };

            for (const key in formData) {
                formDataToSend.append(mapping[key], formData[key]);
            }

            fetch('https://script.google.com/macros/s/AKfycbzZzsHWX1mMFC6rrTMVyHTS6RTPlgYOiDTw9r3avkf76qo-2AgR8LTDvwbt7PT9I1wLdQ/exec', {
                method: 'POST',
                body: formDataToSend
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.result !== 'success') {
                        toast.error(data.error);
                    }
                    else {
                        toast.success('Registration Successful! We will contact you soon.');
                        setFormData({
                            mis: '',
                            name: '',
                            email: '',
                            branch: '',
                            phone: '',
                            talent: '',
                            description: '',
                            coepKnowledge: '',
                            followsInstagram: ''
                        });
                    }
                })
                .catch(() => {
                    toast.error('There was an error submitting the form. Please try again later.');
                })
                .finally(() => setLoading(false));
        } catch (e) {
            toast.error('There was an error submitting the form. Please try again later.');
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const roundVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {loading && (
                <div className="fixed w-full h-full inset-0 z-50 flex flex-col items-center justify-center bg-black/60 bg-opacity-60">
                    <HashLoader color="#ffffff" size={60} />
                    <p className="text-white mt-4 text-lg font-semibold">Please wait...</p>
                </div>
            )}

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2 h-64 md:h-screen md:fixed left-0 top-0"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div
                style={{ fontFamily: "'Metropolis Regular', serif" }}
                className="w-full md:w-1/2 ml-auto min-h-screen overflow-y-auto bg-gradient-to-br from-gray-50 to-white"

            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-6 sm:p-8 md:p-12 max-w-2xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center"
                            style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                        >
                            COMPETITION ROUNDS
                        </h2>

                        <motion.div
                            variants={roundVariants}
                            className="mb-8 md:mb-10 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2"
                                style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                            >
                                ROUND 1
                            </h3>
                            <p className="text-gray-600 font-bold text-lg sm:text-xl mb-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Fast and Curious - COEPians Brain Drift
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                "Coep mein aa toh gaye, par kya COEP ko acchese jante ho!" This is an online quiz testing your knowledge about COEP. The top 30 scorers will be selected for the next round.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={roundVariants}
                            className="mb-8 md:mb-10 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2"
                                style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                            >
                                ROUND 2
                            </h3>
                            <p className="text-gray-600 font-bold text-lg sm:text-xl mb-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Discuss Deewane - Voice your Vision
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Baatein karte hai, gappe ladate hai, tumhare vichaar sunte hai. Selected 30 participants will be divided into groups for open-ended group discussions on various fun, interesting topics. Top 10 participants will be selected for round 3.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={roundVariants}
                            className="mb-8 md:mb-12 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2"
                                style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                            >
                                ROUND 3
                            </h3>
                            <p className="text-gray-600 font-bold text-lg sm:text-xl mb-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Slay the Stage - Performance that WOWS!
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Talent dikhao apna, pura karo best fresher banne ka sapna. This is a talent showcase round where the top 10 selected participants from round 2 will perform. Only 1 boy and 1 girl will get the crown of Mr. and Ms. Impressions.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-10"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-yellow-700"
                            style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                        >
                            REGISTRATION FORM
                        </motion.h2>

                        <div className="space-y-6 sm:space-y-8">
                            {[
                                { label: "MIS", type: "text", name: "mis" },
                                { label: "Name", type: "text", name: "name" },
                                { label: "College Email", type: "email", name: "email" },
                                { label: "Phone Number", type: "tel", name: "phone" },
                                { label: "Describe yourself in three words", type: "text", name: "description" }
                            ].map((field, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                    />
                                </motion.div>
                            ))}

                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Branch</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                >
                                    <option value="">Select your branch</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Computer">Computer</option>
                                    <option value="AI ML">AI ML</option>
                                    <option value="EnTC">EnTC</option>
                                    <option value="Electrical">Electrical</option>
                                    <option value="Instrumentation">Instrumentation</option>
                                    <option value="Metallurgy">Metallurgy</option>
                                    <option value="Mechanical">Mechanical</option>
                                    <option value="B Planning">B Planning</option>
                                </select>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Talent</label>
                                <textarea
                                    name="talent"
                                    value={formData.talent}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">How well do you know COEP on scale of 1 to 10</label>
                                <select
                                    name="coepKnowledge"
                                    value={formData.coepKnowledge}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                >
                                    <option value="">Select Rating</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-3">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Do you follow Impressions on Instagram?
                                </label>
                                <div className="flex space-x-6">
                                    {["Yes", "No"].map((val) => (
                                        <label key={val} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="followsInstagram"
                                                value={val}
                                                checked={formData.followsInstagram === val}
                                                onChange={handleInputChange}
                                                className="mr-2 text-blue-600"
                                            />
                                            <span className="text-gray-700">{val}</span>
                                        </label>
                                    ))}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                                    Follow us on{" "}
                                    <a
                                        href="https://www.instagram.com/impressions_coep/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600 underline hover:text-blue-800"
                                    >
                                        @impressions_coep
                                    </a>
                                    , if you don't yet!
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="pt-4"
                            >
                                <button
                                    onClick={handleSubmit}
                                    className="w-full cursor-pointer bg-gradient-to-r from-red-900 to-red-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Submit Registration
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};


export default MMIForm;
