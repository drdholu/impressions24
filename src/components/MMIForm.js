import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import bannerImage from '../images/MMI/bg-v2.png';
import titleImage from '../images/MMI/title-mmi-v3.png';
import sponsor from '../images/MMI/twisted-tiffins-cropped.png'
import sponsor2 from '../images/MMI/nescafe-logo.png'
import sponsor3 from '../images/MMI/kk-logo.png'
import impressionsLogo from '../images/MMI/impressions-white-logo.png'
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
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef(null);
    const [showDock, setShowDock] = useState(true);
    const registrationsClosed = true;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setShowDock(!entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );
        const currentRef = formRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
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

            if (followsInstagram === "No") {
                toast.info('Please follow Impressions on Instagram!');
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
                        setShowModal(true);
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
                <div className="fixed w-full h-full inset-0 z-[1000] flex flex-col items-center justify-center bg-black/60 bg-opacity-60">
                    <HashLoader color="#ffffff" size={60} />
                    <p className="text-white mt-4 text-lg font-semibold">Please wait...</p>
                </div>
            )}

            {showDock && (
                <div className="fixed  inset-x-0 bottom-6 flex justify-center md:inset-auto md:bottom-3 md:left-3/4 md:-translate-y-1/2 md:-translate-x-1/2 z-50">
                    <button
                        onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                        className="group w-[150px] justify-center flex items-center gap-2 px-3 cursor-pointer py-2 md:px-4 md:py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-md hover:shadow-md hover:bg-white/95 transition-all duration-300 text-sm text-gray-700 hover:text-gray-900"
                    >
                        <ChevronDown className="w-4 text-4xl md:w-5  text-red-500 group-hover:text-red-600 transition-colors" />
                        <span className="font-medium text-md">Register</span>
                    </button>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative animate-fadeIn">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg">
                                <FaWhatsapp className="w-8 h-8" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 text-center">
                                Registration Successful
                            </h3>
                            <p className="text-gray-600 text-center text-sm">
                                Thanks for registering! Join our WhatsApp group to stay updated.
                            </p>

                            <a
                                href="https://chat.whatsapp.com/By1JtbbhZMjJbhtT9zF3FF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 cursor-pointer rounded-xl font-semibold transition-all"
                            >
                                Join WhatsApp Group
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2 h-[17.5rem] md:h-screen md:fixed left-0 top-0 flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col items-center justify-center md:gap-1 md:mb-4">
                    <img
                        src={impressionsLogo}
                        alt="Impressions Logo"
                        className="w-20 md:w-40 object-contain"
                    />

                    <span className="text-white mt-2 md:mt-0 text-[0.4rem] sm:text-[0.7rem] md:mb-2 font-bold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                        AND
                    </span>

                    <div className="flex items-center">
                        <img src={sponsor} alt="Sponsor 1" className="h-[1.25rem] md:w-20 object-contain" />
                        <div className="h-[1.25rem] md:h-10 border-l-2 border-white mx-2"></div>
                        <img src={sponsor2} alt="Sponsor 2" className="w-[3.75rem] md:w-20 object-contain" />
                        <div className="h-[1.25rem] md:h-10 border-l-2 border-white mx-2"></div>
                        <img src={sponsor3} alt="Sponsor 3" className="w-[3.75rem] md:w-20 object-contain" />
                    </div>

                </div>


                <p
                    className="text-white text-[0.4rem] md:text-base mb-1 md:mb-2 font-medium tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                    style={{ fontFamily: "'Metropolis SemiBold', sans-serif" }}
                >
                    PRESENTS
                </p>

                <img
                    src={titleImage}
                    alt="Title"
                    className="w-[140px] md:w-[350px] h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
                />

            </motion.div>

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
                                Cope with COEP
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The first round will be an online quiz based on the campus and Impressions. It will test participants' knowledge in a fun and engaging way. A maximum of 300 registrations will be allowed for this round, and the top scorers will be shortlisted for the next stage.
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
                                Round Table
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The second round will also be conducted online. The shortlisted participants from Round 1 will take part in a tricky group discussion along with a personality test. This round is designed to check confidence, communication, and critical thinking. Based on their performance, the best candidates will move to the final round.
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
                                Spotlight
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The final round will take place offline. Selected participants from the earlier rounds will get the chance to showcase their talents in front of a panel of judges. At the end of this round, the titles of Mr. Impressions 2025, Ms. Impressions 2025, and the People's Choice Award will be presented.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={formRef}
                        variants={itemVariants}
                        className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-10 relative"
                    >
                        <div className={registrationsClosed ? 'filter blur-sm pointer-events-none select-none' : ''}>
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
                        </div>

                        {registrationsClosed && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-md mx-4 pointer-events-auto"
                                >
                                    <div className="text-center space-y-4">
                                        <div className="inline-block p-4 bg-yellow-400 rounded-full mb-2">
                                            <svg className="w-12 h-12 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <h3 
                                            className="text-3xl sm:text-4xl font-bold text-yellow-400"
                                            style={{ fontFamily: "'Rockia Regular', sans-serif" }}
                                        >
                                            REGISTRATIONS CLOSED
                                        </h3>
                                        <p className="text-white text-base sm:text-lg leading-relaxed">
                                            Thank you for your interest in Mr. & Ms. Impressions 2025
                                        </p>
                                        <p className="text-yellow-200 text-sm sm:text-base">
                                            Stay tuned for more exciting events
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};


export default MMIForm;