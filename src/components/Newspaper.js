import React, { useState, useEffect } from 'react';
import { Clock, Instagram, Linkedin } from 'lucide-react';
import image1 from '../images/memories/6.webp'
import overlay from '../images/overlay2.png'
import overlay2 from '../images/overlay3.jpg'
import shalu from '../images/3.webp'
import dance from '../images/dance.webp'
const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2024-12-25');

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center gap-4 p-4 text-gray-100 transition-colors duration-300 bg-black hover:bg-gray-800 group">
            <Clock className="w-6 h-6" />
            <div className="flex gap-4 group-hover:animate-vibrate">
                <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs">DAYS</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">HOURS</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">MINS</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">SECS</div>
                </div>
            </div>
        </div>
    );
};

const EventCard = ({ title, content, image }) => (
    <div className="cursor-pointer group">
        {image && (
            <div className="relative overflow-hidden">
                {/* Main Image */}
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-64 mb-2 transition-all duration-300 transform border border-black filter grayscale hover:grayscale-0 group-hover:scale-105"
                />
                {/* Overlay Image */}
            </div>
        )}
        <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-white animate-float">
            {title}
        </h4>
        <p className="text-gray-800">{content}</p>
    </div>
);

const FeatureBox = ({ title, content, isHighlight = false }) => (
    <div className={`border-t border-black pt-4 group ${isHighlight ? 'hover:bg-gray-100' : ''} transition-colors duration-300`}>
        <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 font-paperSubHead group-hover:bg-black group-hover:text-white">
            {title}
        </h4>
        {content}
    </div>
);

const ImpressionsNewspaper = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="max-w-6xl p-8 m-5 font-serif">
                {/* <CrumpledPaperBackground /> */}
                <img
                    src={overlay}
                    alt=""
                    className="absolute top-0 left-0 object-cover w-full h-full"
                    style={{ mixBlendMode: 'darken', pointerEvents: 'none' }}
                />
                <img
                    src={overlay2}
                    alt=""
                    className="absolute top-0 left-0 object-cover w-full h-full"
                    style={{ mixBlendMode: 'color-dodge', pointerEvents: 'none' }}
                />
                <h1 className="mb-8 text-5xl text-center transition-colors duration-300 font-paperHeader hover:text-gray-700 animate-float hover-glow">
                    The Impressions Times
                </h1>

                <div className="py-2 mb-8 transition-colors duration-300 border-black border-y-2 hover:bg-gray-100">
                    <div className="flex items-center justify-between py-2 border-black border-y">
                        <div className="flex-1 text-center">Issue #23</div>
                        <div className="flex-1 text-center">Wednesday, October 30, 2024</div>
                        <div className="flex-1 text-center">Cultural Edition</div>
                    </div>
                </div>

                <CountdownTimer />

                <h2 className="mt-8 mb-4 text-4xl transition-colors duration-300 font-paperSubHead hover:text-gray-700">
                    Impressions Returns: COEP's Cultural Extravaganza Set to Dazzle Once Again
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <p className="mb-4">
                            The cultural heartbeat of Pune is set to quicken as <span className='animate-float'>COEP Technological University</span> announces the return of <span className='animate-glow'>Impressions</span>,
                            the prestigious cultural festival that has been a cornerstone of artistic expression for decades. Under the motto
                            <span className='animate-glow'>'By The Artist, For The Artist,'</span> this year's festival promises to be an unprecedented celebration of talent,
                            creativity, and cultural diversity.
                        </p>
                        <p>
                            "We're not just organizing a festival; we're creating a stage where every artist can shine," says the Cultural
                            Secretary. "From classical performances to contemporary art, from street plays to digital installations,
                            Impressions 2024 will be a testament to the evolving landscape of cultural expression."
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <EventCard
                            title="Grand Stage Performances"
                            content="Last year's grand finale performance drew crowds from across the country"
                            image={shalu}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
                    <FeatureBox
                        title="Event Highlights"
                        content={
                            <ul className="pl-4 list-disc">
                                <li>Classical Dance Showcase</li>
                                <li>Battle of the Bands</li>
                                <li>Street Play Competition</li>
                                <li>Art Installation Gallery</li>
                                <li>Poetry Slam</li>
                            </ul>
                        }
                        isHighlight={true}
                    />

                    <FeatureBox
                        title="Special Feature"
                        content={
                            <p>
                                This year introduces the 'Innovation in Art' category, blending technology with traditional art forms.
                                Participants can showcase projects combining AR/VR with classical dance, digital art with street performances,
                                and more.
                            </p>
                        }
                        isHighlight={true}
                    />

                    <div className="p-4 transition-colors duration-300 border-2 border-black cursor-pointer hover:bg-black hover:text-white">
                        <h4 className="mb-2 text-xl font-bold font-paperSubHead">Connect With Us</h4>
                        <p>Stay updated by following us on social media.</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://www.instagram.com/impressions_coep/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 transition-colors duration-300 hover:text-gray-500" />
                            </a>
                            <a href="https://www.linkedin.com/company/impressions-coep/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6 transition-colors duration-300 hover:text-gray-500" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Featured Events Section */}
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
                    <EventCard
                        title="Classical Dance Evening"
                        content="Experience the magic of classical dance forms from across India"
                        image={dance}
                    />
                    <EventCard
                        title="Rock Concert"
                        content="The biggest college bands battle it out for glory"
                        image={image1}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImpressionsNewspaper;