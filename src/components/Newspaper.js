import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import image1 from '../images/memories/6.webp'

const CrumpledPaperBackground = () => (
    <svg className="fixed top-0 left-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="crumpled-paper" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <rect width="200" height="200" fill="#f9f5eb" />
                <path d="M0 0l25 15q15-5 25-15l15 10q10-5 20-10l15 15q10-10 25-15l25 15q15-5 25-15l25 15v-15H0"
                    fill="none" stroke="#e8e1d5" stroke-width="0.5" opacity="0.5" />
                <path d="M0 40l25 15q15-5 25-15l15 10q10-5 20-10l15 15q10-10 25-15l25 15q15-5 25-15l25 15v-15H0"
                    fill="none" stroke="#e8e1d5" stroke-width="0.5" opacity="0.3" />
                <path d="M0 80l25 15q15-5 25-15l15 10q10-5 20-10l15 15q10-10 25-15l25 15q15-5 25-15l25 15v-15H0"
                    fill="none" stroke="#e8e1d5" stroke-width="0.5" opacity="0.4" />
                <path d="M0 120l25 15q15-5 25-15l15 10q10-5 20-10l15 15q10-10 25-15l25 15q15-5 25-15l25 15v-15H0"
                    fill="none" stroke="#e8e1d5" stroke-width="0.5" opacity="0.3" />
                <path d="M0 160l25 15q15-5 25-15l15 10q10-5 20-10l15 15q10-10 25-15l25 15q15-5 25-15l25 15v-15H0"
                    fill="none" stroke="#e8e1d5" stroke-width="0.5" opacity="0.5" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crumpled-paper)" />
    </svg>
);

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
        <div className="flex items-center justify-center gap-4 p-4 text-gray-100 transition-colors duration-300 bg-black hover:bg-gray-800">
            <Clock className="w-6 h-6" />
            <div className="flex gap-4">
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
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-64 mb-2 transition-all duration-300 transform border border-black filter grayscale hover:grayscale-0 group-hover:scale-105"
                />
            </div>
        )}
        <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            {title}
        </h4>
        <p className="text-gray-800">{content}</p>
    </div>
);

const FeatureBox = ({ title, content, isHighlight = false }) => (
    <div className={`border-t border-black pt-4 group ${isHighlight ? 'hover:bg-gray-100' : ''} transition-colors duration-300`}>
        <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            {title}
        </h4>
        {content}
    </div>
);

const ImpressionsNewspaper = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="max-w-6xl p-8 m-5 font-serif shadow-2xl bg-gray-50">
                <CrumpledPaperBackground />
                <h1 className="mb-8 text-5xl text-center transition-colors duration-300 font-customFont hover:text-gray-700">
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

                <h2 className="mt-8 mb-4 text-4xl italic transition-colors duration-300 font-playfair hover:text-gray-700">
                    Impressions Returns: COEP's Cultural Extravaganza Set to Dazzle Once Again
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <p className="mb-4">
                            The cultural heartbeat of Pune is set to quicken as COEP Technological University announces the return of Impressions,
                            the prestigious cultural festival that has been a cornerstone of artistic expression for decades. Under the motto
                            'By The Artist, For The Artist,' this year's festival promises to be an unprecedented celebration of talent,
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
                            image={image1}
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
                        <h4 className="mb-2 text-xl font-bold">Registration Open</h4>
                        <p>
                            Early bird registrations are now open! Secure your spot in this grand celebration of art and culture.
                            Special discounts for student groups and early registrations.
                        </p>
                        <button className="px-4 py-2 mt-4 transition-colors duration-300 border border-current hover:bg-white hover:text-black">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* Featured Events Section */}
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
                    <EventCard
                        title="Classical Dance Evening"
                        content="Experience the magic of classical dance forms from across India"
                        image={image1}
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