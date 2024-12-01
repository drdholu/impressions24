import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Explore = () => {
    const {moduleName, eventTitle } = useParams();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState(null);

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
                        Learn More
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
