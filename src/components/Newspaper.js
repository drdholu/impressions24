// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
// import { Clock, Instagram, Linkedin } from 'lucide-react';
import image1 from '../images/memories/6.webp'
import overlay from '../images/overlay2.png'
import overlay2 from '../images/overlay3.jpg'
import shalu from '../images/3.webp'
import dance from '../images/dance.webp'


// const EndlessScrollNews = () => {
//     const newsItems = [
//         "Is Impressions really back?",
//         "Behind the scenes of Impressions 2024.",
//         "Exclusive interviews with the organizers.",
//         "New events to look out for.",
//         "How to participate this year.",
//         "Artist spotlight: Meet the performers.",
//         "Volunteer opportunities at Impressions.",
//         "Sneak peek into the grand performances.",
//         "Throwback to Impressions 2023 highlights.",
//     ];

//     const duplicatedNewsItems = [...newsItems, ...newsItems];

//     return (
//         <div className="w-full overflow-hidden">
//             <div className="flex gap-8 animate-scroll-horizontal">
//                 {duplicatedNewsItems.map((item, index) => (
//                     <div key={index} className="whitespace-nowrap">
//                         {item}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// Event descriptions object

const eventDescriptions = {
    "Swa(g)Desi": "A high-energy Bollywood group dance competition showcasing choreography and cultural expression.",
    "High Current": "A battle of bands competition featuring live performances with diverse musical instruments and original compositions.",
    "Poona-०५": "A dynamic rap competition featuring freestyle performances and knockout battles between emerging artists.",
    "ComiKing": "A stand-up comedy competition celebrating original humor in Hindi, English, or Marathi.",
    "Saavani": "A solo singing competition focused on English songs across multiple rounds of performance."
};

// Custom Tooltip Component
const Tooltip = ({ text, position }) => {
    return (
        <div
            className="fixed z-50 px-4 py-2 text-sm text-white bg-black rounded shadow-lg pointer-events-none"
            style={{
                left: `${position.x + 10}px`,
                top: `${position.y + 10}px`,
                maxWidth: '250px'
            }}
        >
            {text}
        </div>
    );
};

const EventListItem = ({ event, onMouseMove, onMouseLeave, onMouseEnter }) => {
    return (
        <li
            className="transition-colors duration-300 cursor-pointer hover:text-gray-700"
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {event}
        </li>
    );
};

const FeatureBox = ({ title, content, isHighlight = false }) => {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleMouseMove = (e, event) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (event) => {
        setActiveTooltip(event);
    };

    const handleMouseLeave = () => {
        setActiveTooltip(null);
    };

    if (title === "Event Highlights") {
        return (
            <div className={`border-t border-black pt-4 group ${isHighlight ? 'hover:bg-gray-100' : ''} transition-colors duration-300 relative`}>
                <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 font-paperSubHead group-hover:bg-black group-hover:text-white">
                    {title}
                </h4>
                <ul className="pl-4 list-disc">
                    {Object.keys(eventDescriptions).map((event) => (
                        <EventListItem
                            key={event}
                            event={event}
                            onMouseMove={(e) => handleMouseMove(e, event)}
                            onMouseEnter={() => handleMouseEnter(event)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </ul>
                {activeTooltip && (
                    <Tooltip
                        text={eventDescriptions[activeTooltip]}
                        position={tooltipPosition}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={`border-t border-black pt-4 group ${isHighlight ? 'hover:bg-gray-100' : ''} transition-colors duration-300`}>
            <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 font-paperSubHead group-hover:bg-black group-hover:text-white">
                {title}
            </h4>
            {content}
        </div>
    );
};

const CountdownTimer = () => {
    // const [timeLeft, setTimeLeft] = useState({
    //     days: 0,
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 0
    // });

    // useEffect(() => {
    //     const targetDate = new Date('2024-12-25');

    //     const timer = setInterval(() => {
    //         const now = new Date();
    //         const difference = targetDate - now;

    //         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //         setTimeLeft({ days, hours, minutes, seconds });
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div className="flex items-center justify-center gap-4 p-4 text-gray-100 transition-colors duration-300 bg-black hover:bg-gray-800 group">
            {/* <Clock className="w-6 h-6" />
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
            </div> */}
            <text className='text-2xl sm:text-5xl font-paperAttention hover:animate-vibrate'>IMPRESSIONS IS BACK</text>
        </div>
    );
};

const EventCard = ({ title, content, image }) => (
    <div className="cursor-pointer group">
        {image && (
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-64 mb-2 transition-all duration-300 transform border border-black filter grayscale hover:grayscale-0 group-hover:scale-105"
                />
            </div>
        )}
        <h4 className="p-2 mb-2 text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-white animate-float">
            {title}
        </h4>
        <p className="text-gray-800">{content}</p>
    </div>
);

const ImpressionsNewspaper = () => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className='flex items-center justify-center'>
            <div className="max-w-6xl p-8 m-5 font-serif">
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
                        <div className="flex-1 text-center">{today}</div>
                        <div className="flex-1 text-center">Cultural Edition</div>
                    </div>
                </div>

                <CountdownTimer />
                {/* <EndlessScrollNews /> */}

                <h2 className="mt-8 mb-4 text-4xl transition-colors duration-300 font-paperSubHead">
                    Impressions Returns: COEP's Cultural Extravaganza Set to Dazzle Once Again
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <p className="mb-4">
                            The cultural heartbeat of Pune is set to quicken as <span className='font-bold'>COEP Technological University</span> announces the return of <span className='font-extrabold'>Impressions</span>,
                            the prestigious cultural festival that has been a cornerstone of artistic expression for decades. Under the motto
                            <span className='font-extrabold'> 'By The Artist, For The Artist'</span> , this year's festival promises to be an unprecedented celebration of talent,
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
                                <li>Swa(g)Desi</li>
                                <li>High Current</li>
                                <li>Poona-०५</li>
                                <li>ComiKing</li>
                                <li>Saavani</li>
                            </ul>
                        }
                        isHighlight={true}
                    />

                    <FeatureBox
                        title="About Impressions"
                        content={
                            <p>
                                COEP Impressions is a dynamic cultural fest celebrating talent through dance, rapping, singing, drama, art, and DJ events. Experience a vibrant mix of performances, creativity, and entertainment that brings culture to life.
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