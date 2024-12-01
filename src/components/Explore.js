

// import React from 'react';

// const Explore = () => {
//     return (
//         <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
//             {/* Header */}
//             <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-5 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
//                 <div className="text-3xl font-bold text-white">Impressions</div>
//                 <nav className="flex space-x-6 text-lg text-gray-200">
//                     <a href="#details" className="hover:text-blue-400 transition duration-300">Details</a>
//                     <a href="#structure" className="hover:text-blue-400 transition duration-300">Structure</a>
//                     <a href="#guidelines" className="hover:text-blue-400 transition duration-300">Guidelines</a>
//                     <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact Us</a>
//                 </nav>
//             </header>

//             {/* Hero Section with a Soft Background */}
//             {/* <section className="relative bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 h-[450px] flex justify-center items-center text-center text-white rounded-lg shadow-xl mt-8 mx-4">
//                 <h1 className="text-4xl lg:text-6xl font-bold bg-black/60 px-8 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                     Battle of DJ's and EDM's
//                 </h1>
//             </section> */}

//             {/* Details Section */}
//             <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-40">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Details</h2>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                     Battle of DJ's and EDM's is an exciting competition where participants showcase their skills in
//                     mixing, looping, and miking. Push your limits and let the music speak for itself!
//                 </p>
//             </section>

//             {/* Structure Section */}
//             <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Structure</h2>
//                 <p className="text-lg text-gray-200 mb-4">
//                     There will be only one round in which the participant will showcase their talent in:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
//                     <li>Mixing</li>
//                     <li>Looping</li>
//                     <li>Miking</li>
//                 </ul>
//                 <p className="text-lg text-gray-200 mt-4">
//                     <strong>Time Limit:</strong> 8-10 minutes (including setup time).
//                 </p>
//             </section>

//             {/* Guidelines Section */}
//             <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Guidelines</h2>
//                 <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
//                     <li>Competition is open for college students aged 16-25.</li>
//                     <li>All mixing needs to be done on the spot. Pre-mixed songs or mash-ups will lead to disqualification.</li>
//                     <li>Only understandable language songs are allowed.</li>
//                     <li>Computer-operated software/hardware or any other equipment (other than headphones, pen drives, and CDs) is not allowed.</li>
//                     <li>No limit on the number of tracks used, but the time limit should be strictly followed.</li>
//                     <li>Participants are allowed to go live on Instagram but must tag Impressions. A mixer (with booth outs) will be provided. Inform the organizers in advance if additional gear is needed.</li>
//                     <li>Participants must carry a backup CD and Pen-drives.</li>
//                 </ul>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-40">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Contact Us</h2>
//                 <div className="text-lg space-y-4 text-gray-200">
//                     <p><strong>Event Coordinator of Bomb-a-drop:</strong> Arnav Bankar</p>
//                     <p>
//                         <strong>Phone:</strong> 
//                         <a href="tel:+917506175550" className="text-blue-400 hover:underline">+91 7506175550</a>
//                     </p>
//                     <p>
//                         <strong>Email:</strong>{' '}
//                         <a href="mailto:events23.impressions@gmail.com" className="text-blue-400 hover:underline">
//                             events23.impressions@gmail.com
//                         </a>
//                     </p>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
//                 © 2023 Impressions. All Rights Reserved.
//             </footer>
//         </div>
//     );
// };

// export default Explore;








// import React, { useEffect, useState } from 'react';

// const Explore = () => {
//     const [activeSection, setActiveSection] = useState('');

//     // Handle scroll spy with Intersection Observer API
//     useEffect(() => {
//         const sections = document.querySelectorAll('section[id]');

//         // Check initial scroll position and set default active section
//         const handleInitialScroll = () => {
//             // Convert NodeList to an array before using find
//             const sectionsArray = Array.from(sections);  // OR: const sectionsArray = [...sections];
            
//             const initialSection = sectionsArray.find(section => section.getBoundingClientRect().top <= 0);
//             if (initialSection) setActiveSection(initialSection.id);
//         };

//         handleInitialScroll()

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // setActiveSection(entry.target.id);
//                         setTimeout(() => setActiveSection(entry.target.id), 150);
//                     }
//                 });
//             },
//             { threshold: 0.4 } // 60% of the section is visible to trigger
//         );

//         sections.forEach((section) => observer.observe(section));

//         return () => {
//             sections.forEach((section) => observer.unobserve(section));
//         };
//     }, []);

//     return (
//         <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
//             {/* Header */}
//             <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
//                 <div className="text-3xl font-bold text-white">Impressions</div>
//                 <nav className="flex space-x-6 text-lg text-gray-200">
//                     <a
//                         href="#details"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'details' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Details
//                     </a>
//                     <a
//                         href="#structure"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'structure' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Structure
//                     </a>
//                     <a
//                         href="#guidelines"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'guidelines' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Guidelines
//                     </a>
//                     <a
//                         href="#contact"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'contact' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Contact Us
//                     </a>
//                 </nav>
//             </header>

//             {/* Sections */}
//             <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Details</h2>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                     Battle of DJ's and EDM's is an exciting competition where participants showcase their skills in
//                     mixing, looping, and miking. Push your limits and let the music speak for itself!
//                 </p>
//             </section>

//             <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Structure</h2>
//                 <p className="text-lg text-gray-200 mb-4">
//                     There will be only one round in which the participant will showcase their talent in:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
//                     <li>Mixing</li>
//                     <li>Looping</li>
//                     <li>Miking</li>
//                 </ul>
//                 <p className="text-lg text-gray-200 mt-4">
//                     <strong>Time Limit:</strong> 8-10 minutes (including setup time).
//                 </p>
//             </section>

//             <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Guidelines</h2>
//                 <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
//                     <li>Competition is open for college students aged 16-25.</li>
//                     <li>All mixing needs to be done on the spot. Pre-mixed songs or mash-ups will lead to disqualification.</li>
//                     <li>Only understandable language songs are allowed.</li>
//                     <li>Computer-operated software/hardware or any other equipment (other than headphones, pen drives, and CDs) is not allowed.</li>
//                     <li>No limit on the number of tracks used, but the time limit should be strictly followed.</li>
//                     <li>Participants are allowed to go live on Instagram but must tag Impressions. A mixer (with booth outs) will be provided. Inform the organizers in advance if additional gear is needed.</li>
//                     <li>Participants must carry a backup CD and Pen-drives.</li>
//                 </ul>
//             </section>

//             <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Contact Us</h2>
//                 <div className="text-lg space-y-4 text-gray-200">
//                     <p><strong>Event Coordinator of Bomb-a-drop:</strong> Arnav Bankar</p>
//                     <p>
//                         <strong>Phone:</strong> 
//                         <a href="tel:+917506175550" className="text-blue-400 hover:underline">+91 7506175550</a>
//                     </p>
//                     <p>
//                         <strong>Email:</strong>{' '}
//                         <a href="mailto:events23.impressions@gmail.com" className="text-blue-400 hover:underline">
//                             events23.impressions@gmail.com
//                         </a>
//                     </p>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
//                 © 2023 Impressions. All Rights Reserved.
//             </footer>
//         </div>
//     );
// };

// export default Explore;







// import React, { useEffect, useState } from 'react';

// const Explore = () => {
//     const [activeSection, setActiveSection] = useState('');
//     const [contentData, setContentData] = useState(null);

//     // Handle scroll spy with Intersection Observer API
//     useEffect(() => {
//         fetch('/data.json')  // Fetch from the public folder
//             .then((response) => response.json())
//             .then((data) => {
//                 setContentData(data);  // Set the fetched data to state
//             })
//             .catch((error) => console.error('Error fetching data:', error));
        
//         const sections = document.querySelectorAll('section[id]');

//         const handleInitialScroll = () => {
//             const sectionsArray = Array.from(sections);
//             const initialSection = sectionsArray.find(section => section.getBoundingClientRect().top <= 0);
//             if (initialSection) setActiveSection(initialSection.id);
//         };

//         handleInitialScroll();

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setTimeout(() => setActiveSection(entry.target.id), 150);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         sections.forEach((section) => observer.observe(section));

//         return () => {
//             sections.forEach((section) => observer.unobserve(section));
//         };
//     }, []);

//     if (!contentData) return <div>Loading...</div>; 

//     const detailsSection = contentData.sections.find(section => section.id === 'details');
//     const structureSection = contentData.sections.find(section => section.id === 'structure');
//     const guidelinesSection = contentData.sections.find(section => section.id === 'guidelines');
//     const contactSection = contentData.sections.find(section => section.id === 'contact');

//     return (
//         <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
//             {/* Header */}
//             <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
//                 <div className="text-3xl font-bold text-white">{contentData.title}</div>
//                 <nav className="flex space-x-6 text-lg text-gray-200">
//                     <a
//                         href="#details"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'details' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Details
//                     </a>
//                     <a
//                         href="#structure"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'structure' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Structure
//                     </a>
//                     <a
//                         href="#guidelines"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'guidelines' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Guidelines
//                     </a>
//                     <a
//                         href="#contact"
//                         className={`hover:text-blue-400 transition duration-300 ${
//                             activeSection === 'contact' ? 'text-blue-400' : ''
//                         }`}
//                     >
//                         Contact Us
//                     </a>
//                 </nav>
//             </header>

//             {/* Sections */}
//             <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{detailsSection.title}</h2>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                     {detailsSection.content}
//                 </p>
//             </section>

//             <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{structureSection.title}</h2>
//                 <p className="text-lg text-gray-200 mb-4">
//                     {structureSection.content[structureSection.content.length-2]}
//                 </p>
//                 <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
//                     {structureSection.list.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 <p className="text-lg text-gray-200 mt-4">
//                     <strong>{structureSection.content[structureSection.content.length - 1]}</strong>
//                 </p>
//             </section>

//             <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{guidelinesSection.title}</h2>
//                 <ul className="list-disc pl-6 space-y-4 text-lg text-gray-200">
//                     {guidelinesSection.content.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </section>

//             <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">{contactSection.title}</h2>
//                 <div className="text-lg space-y-4 text-gray-200">
//                     <p><strong>Event Coordinator of {contentData.title}:</strong> {contactSection.coordinator}</p>
//                     <p>
//                         <strong>Phone:</strong> 
//                         <a href="tel:+917506175550" className="text-blue-400 hover:underline"> {contactSection.phone}</a>
//                     </p>
//                     <p>
//                         <strong>Email:</strong>{' '}
//                         <a href="mailto:events23.impressions@gmail.com" className="text-blue-400 hover:underline">
//                             {contactSection.email}    
//                         </a>
//                     </p>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
//                 © 2023 Impressions. All Rights Reserved.
//             </footer>
//         </div>
//     );
// };

// export default Explore;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Explore = () => {
//     const { eventTitle } = useParams();
//     const navigate = useNavigate();
//     const [eventData, setEventData] = useState(null);

//     // const eventTitle = "Shoutout";
    
//     useEffect(() => {
//         if (!eventTitle) {
//             console.error('No event title provided, redirecting...');
//             navigate('/events');
//             return;
//         }

//         // Fetch data and find the specific event by title
//         fetch('/data1.json')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch event data');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 const event = data.events.find(
//                     (item) => item.title === decodeURIComponent(eventTitle) // Decode the title to match JSON
//                 );
//                 if (event) {
//                     setEventData(event);
//                 } else {
//                     console.error('Event not found, redirecting...');
//                     navigate('/events');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 navigate('/events');
//             });
//     }, [eventTitle, navigate]);

//     if (!eventData) {
//         return <div className="text-white text-center mt-20">Loading...</div>;
//     }

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

//             {/* Sections */}
//             <section id="details" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
//                     {eventData.sections.find((section) => section.id === 'details').title}
//                 </h2>
//                 <p className="text-lg text-gray-200 leading-relaxed">
//                     {eventData.sections.find((section) => section.id === 'details').content.join(' ')}
//                 </p>
//             </section>

//             <section id="structure" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
//                     {eventData.sections.find((section) => section.id === 'structure').title}
//                 </h2>
//                 <p className="text-lg text-gray-200 mb-4">
//                     {eventData.sections.find((section) => section.id === 'structure').content[0]}
//                 </p>
//                 <ul className="list-disc pl-6">
//                     {eventData.sections.find((section) => section.id === 'structure').list.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 <p className="text-lg text-gray-200 mt-4">
//                     {eventData.sections.find((section) => section.id === 'structure').content[1]}
//                 </p>
//             </section>

//             <section id="guidelines" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
//                     {eventData.sections.find((section) => section.id === 'guidelines').title}
//                 </h2>
//                 <ul className="list-disc pl-6">
//                     {eventData.sections.find((section) => section.id === 'guidelines').content.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </section>

//             <section id="contact" className="w-[1200px] max-w-[90%] mx-auto py-12 mt-12 bg-gray-800 rounded-lg shadow-lg px-8 scroll-mt-30">
//                 <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
//                     {eventData.sections.find((section) => section.id === 'contact').title}
//                 </h2>
//                 <p><strong>Event Coordinator:</strong> {eventData.sections.find((section) => section.id === 'contact').coordinator}</p>
//                 <p><strong>Phone:</strong> {eventData.sections.find((section) => section.id === 'contact').phone}</p>
//                 <p><strong>Email:</strong> {eventData.sections.find((section) => section.id === 'contact').email}</p>
//             </section>

//             {/* Footer */}
//             <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
//                 {eventData.footer.text}
//             </footer>
//         </div>
//     );
// };

// export default Explore;





import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Explore = () => {
    const { eventTitle } = useParams();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        if (!eventTitle) {
            console.error('No event title provided, redirecting...');
            navigate('/events');
            return;
        }

        // Fetch data and find the specific event by title
        fetch('/data1.json')
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
                    navigate('/events');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                navigate('/events');
            });
    }, [eventTitle, navigate]);

    if (!eventData) {
        return <div className="text-white text-center mt-20">Loading...</div>;
    }

    // Separate sections into variables
    const detailsSection = eventData.sections.find((section) => section.id === 'details');
    const structureSection = eventData.sections.find((section) => section.id === 'structure');
    const guidelinesSection = eventData.sections.find((section) => section.id === 'guidelines');
    const contactSection = eventData.sections.find((section) => section.id === 'contact');

    return (
        <div className="bg-gray-900 text-gray-100 font-poppins min-h-screen flex flex-col">
            {/* Header */}
            <header className="w-[1200px] max-w-[90%] mx-auto px-10 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg sticky top-0 z-50">
                <div className="text-3xl font-bold text-white">{eventData.title}</div>
                <nav className="flex space-x-6 text-lg text-gray-200">
                    <a href="#details" className="hover:text-blue-400">Details</a>
                    <a href="#structure" className="hover:text-blue-400">Structure</a>
                    <a href="#guidelines" className="hover:text-blue-400">Guidelines</a>
                    <a href="#contact" className="hover:text-blue-400">Contact Us</a>
                </nav>
            </header>

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
                <p className="text-lg text-gray-200 mb-4">
                    {structureSection.content[0]}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
                    {structureSection.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg text-gray-200 mt-4">
                    <strong>{structureSection.content[1]}</strong>
                </p>
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

            {/* Footer */}
            <footer className="bg-black/80 py-6 text-center text-gray-400 mt-auto">
                {eventData.footer.text}
            </footer>
        </div>
    );
};

export default Explore;
