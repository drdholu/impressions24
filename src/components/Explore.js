// import React, { useEffect, useState} from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Explore = () => {
//     const {moduleName, eventTitle } = useParams();
//     const navigate = useNavigate();
//     const [eventData, setEventData] = useState(null);

//     useEffect(() => {
//         if (!eventTitle) {
//             console.error('No event title provided, redirecting...');
//             navigate('/');
//             return;
//         }

//         // Fetch data and find the specific event by title
//         // fetch('/data/data1.json')
//         fetch(`/data/${moduleName}.json`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch event data');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 const event = data.events.find(
//                     (item) => item.title === decodeURIComponent(eventTitle)
//                 );
//                 if (event) {
//                     setEventData(event);
//                 } else {
//                     console.error('Event not found, redirecting...');
//                     navigate('/');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 navigate('/');
//             });
//     }, [eventTitle, navigate]);

//     if (!eventData) {
//         return <div className="text-white text-center mt-20">Loading...</div>;
//     }

//     // Separate sections into variables
//     const detailsSection = eventData.sections.find((section) => section.id === 'details');
//     const structureSection = eventData.sections.find((section) => section.id === 'structure');
//     const guidelinesSection = eventData.sections.find((section) => section.id === 'guidelines');
//     const contactSection = eventData.sections.find((section) => section.id === 'contact');

//     return (
//         <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
//             {/* Header */}
//             <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
//                 <div className="text-3xl font-bold text-white">{eventData.title}</div>
//                 <nav className="flex space-x-6 text-lg text-gray-200">
//                     <a href="#details" className="hover:text-blue-400">Details</a>
//                     <a href="#structure" className="hover:text-blue-400">Structure</a>
//                     <a href="#guidelines" className="hover:text-blue-400">Guidelines</a>
//                     <a href="#contact" className="hover:text-blue-400">Contact Us</a>
//                 </nav>
//             </header>

//             {/* Details Section */}
//             <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{detailsSection.title}</h2>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                     {detailsSection.content.join(' ')}
//                 </p>
//             </section>

//             {/* Structure Section */}
//             <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{structureSection.title}</h2>
//                 {/* <p className="text-lg text-gray-200 mb-4">
//                     {structureSection.content}
//                 </p> */}
//                 <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
//                     {structureSection.content.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
//                     {structureSection.list.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 {/* <p className="text-lg text-gray-200 mt-4">
//                     <strong>{structureSection.content[1]}</strong>
//                 </p> */}
//             </section>

//             {/* Guidelines Section */}
//             <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{guidelinesSection.title}</h2>
//                 <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
//                     {guidelinesSection.content.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{contactSection.title}</h2>
//                 <div className="text-lg space-y-4 text-gray-200">
//                     <p><strong>Event Coordinator:</strong> {contactSection.coordinator}</p>
//                     <p>
//                         <strong>Phone:</strong> 
//                         <a href={`tel:${contactSection.phone}`} className="text-blue-400 hover:underline"> {contactSection.phone}</a>
//                     </p>
//                     <p>
//                         <strong>Email:</strong>{' '}
//                         <a href={`mailto:${contactSection.email}`} className="text-blue-400 hover:underline">
//                             {contactSection.email}
//                         </a>
//                     </p>
//                 </div>
//             </section>

//             {eventData.buttonLink && (
//                 <section className="w-[1200px] max-w-[90%] mx-auto py-12 mt-1 text-center">
//                     <a
//                         href={eventData.buttonLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:tracking-wider hover:shadow-xl"
//                     >
//                         Learn More
//                     </a>
//                 </section>
//             )}

//             {/* Footer */}
//             <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
//                 {eventData.footer.text}
//             </footer>
//         </div>
//     );
// };

// export default Explore;


import React, { useEffect, useState, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Explore = () => {
    const {moduleName, eventTitle } = useParams();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState(null);
    const [hamBurgerOpen, setHamBurgerOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown

    useEffect(() => {
        if (!eventTitle) {
            console.error('No event title provided, redirecting...');
            navigate('/');
            return;
        }

        // Fetch data and find the specific event by title
        // fetch('/data/data1.json')
        fetch(`/data/${moduleName}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch event data');
                }
                return response.json();
            })
            .then((data) => {
                const event = data.events.find(
                    (item) => item.title === decodeURIComponent(eventTitle)
                );
                if (event) {
                    setEventData(event);
                } else {
                    console.error('Event not found, redirecting...');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                navigate('/');
            });
    }, [eventTitle, navigate]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setHamBurgerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    if (!eventData) {
        return <div className="text-white text-center mt-20">Loading...</div>;
    }

    // Separate sections into variables
    const detailsSection = eventData.sections.find((section) => section.id === 'details');
    const structureSection = eventData.sections.find((section) => section.id === 'structure');
    const guidelinesSection = eventData.sections.find((section) => section.id === 'guidelines');
    const contactSection = eventData.sections.find((section) => section.id === 'contact');

    const toggleHamburger = () => {
        setHamBurgerOpen(prevState => !prevState);
    };

    const handleLinkClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setHamBurgerOpen(false); // Close the dropdown on link click
        document.getElementById(e.currentTarget.getAttribute("href").substring(1)).scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    };

    return (
        <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
            {/* Header */}
            <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
                <div className="text-3xl font-bold text-white">{eventData.title}</div>
                <nav className="hidden lg:flex space-x-6 text-white">
                    <a href="#details" className="hover:text-blue-400" onClick={handleLinkClick}>Details</a>
                    <a href="#structure" className="hover:text-blue-400" onClick={handleLinkClick}>Structure</a>
                    <a href="#guidelines" className="hover:text-blue-400" onClick={handleLinkClick}>Guidelines</a>
                    <a href="#contact" className="hover:text-blue-400" onClick={handleLinkClick}>Contact Us</a>
                </nav>
                <button
                    onClick={toggleHamburger}
                    className="lg:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </header>

            {hamBurgerOpen && (
                <nav
                    ref={dropdownRef}
                    className="fixed top-16 right-5 bg-gray-800 rounded-lg shadow-lg p-4 lg:hidden z-50 "
                >
                    <a href="#details" className="block hover:text-blue-400" onClick={handleLinkClick}>Details</a>
                    <a href="#structure" className="block hover:text-blue-400" onClick={handleLinkClick}>Structure</a>
                    <a href="#guidelines" className="block hover:text-blue-400" onClick={handleLinkClick}>Guidelines</a>
                    <a href="#contact" className="block hover:text-blue-400" onClick={handleLinkClick}>Contact Us</a>
                </nav>
            )}

            {/* Details Section */}
            <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{detailsSection.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                    {detailsSection.content.join(' ')}
                </p>
            </section>

            {/* Structure Section */}
            <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{structureSection.title}</h2>
                {/* <p className="text-lg text-gray-200 mb-4">
                    {structureSection.content}
                </p> */}
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
                    {structureSection.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
                    {structureSection.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {/* <p className="text-lg text-gray-200 mt-4">
                    <strong>{structureSection.content[1]}</strong>
                </p> */}
            </section>

            {/* Guidelines Section */}
            <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{guidelinesSection.title}</h2>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
                    {guidelinesSection.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{contactSection.title}</h2>
                <div className="text-lg space-y-4 text-gray-200">
                    <p><strong>Event Coordinator:</strong> {contactSection.coordinator}</p>
                    <p>
                        <strong>Phone:</strong> 
                        <a href={`tel:${contactSection.phone}`} className="text-blue-400 hover:underline"> {contactSection.phone}</a>
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${contactSection.email}`} className="text-blue-400 hover:underline">
                            {contactSection.email}
                        </a>
                    </p>
                </div>
            </section>

            {eventData.buttonLink && (
                <section className="w-[1200px] max-w-[90%] mx-auto py-12 mt-1 text-center">
                    <a
                        href={eventData.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:tracking-wider hover:shadow-xl"
                    >
                        Register
                    </a>
                </section>
            )}

            {/* Footer */}
            <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
                {eventData.footer.text}
            </footer>
        </div>
    );
};

export default Explore;