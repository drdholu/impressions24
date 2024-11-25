import React, { useState, useEffect } from 'react';
import '../eventspage.css';

function Events() {
    const [itemActive, setItemActive] = useState(0); // Track the active item
    const [intervalId, setIntervalId] = useState(null); // Store the interval for auto-slide

    const items = [
        { img: '/image/img1.png', title: 'Slider 01', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img2.jpg', title: 'Slider 02', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img3.jpg', title: 'Slider 03', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img4.jpg', title: 'Slider 04', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img5.jpg', title: 'Slider 05', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img5.jpg', title: 'Slider 05', content: 'Lorem ipsum dolor sit amet...' },
    ];

    const thumbnails = items.map((item, index) => ({
        ...item,
        active: index === itemActive,
    }));

    // Effect to start auto-sliding
    useEffect(() => {
        const id = setInterval(() => {
            setItemActive((prevActive) => (prevActive + 1) % items.length);
        }, 5000);

        setIntervalId(id);

        return () => clearInterval(id); // Cleanup interval on component unmount
    }, [itemActive]);

    // Click handler for next button
    const handleNextClick = () => {
        setItemActive((prevActive) => (prevActive + 1) % items.length);
    };

    // Click handler for prev button
    const handlePrevClick = () => {
        setItemActive((prevActive) => (prevActive - 1 + items.length) % items.length);
    };

    // Click handler for thumbnails
    const handleThumbnailClick = (index) => {
        setItemActive(index);
    };

    useEffect(() => {
        if (window.innerWidth <= 800) { // Adjust for mobile view
            const activeThumbnail = document.querySelector('.thumbnail .item.active');
            if (activeThumbnail) {
                const container = document.querySelector('.thumbnail');
                const containerWidth = container.offsetWidth;
                const thumbnailWidth = activeThumbnail.offsetWidth;
    
                // Calculate the scroll position to center the active thumbnail
                const scrollPosition =
                    activeThumbnail.offsetLeft - (containerWidth / 2) + (thumbnailWidth / 2);
            

                // Smooth scroll logic
                let start = container.scrollLeft;
                let change = scrollPosition - start;
                let duration = 600; // Smoothness duration in milliseconds
                let currentTime = 0;
                const increment = 20;
    
                function animateScroll() {
                    currentTime += increment;
                    const val = easeInOutQuad(currentTime, start, change, duration);
                    container.scrollLeft = val;
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
    
                // Easing function for smooth effect
                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
    
                animateScroll();
            }
        }
    }, [itemActive]);

    return (
        <div  className="font-poppins m-0 bg-black text-gray-200">
            <header className="w-[1200px max-w-[90%] mx-auto grid grid-cols-[50px_1fr_50px] grid-rows-[50px] justify-center items-center relative z-[100]">
                <div className="w-[110px] font-bold">Impressions</div>
                <ul className="p-0 m-0 list-none flex justify-center gap-5 font-medium">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Info</li>
                </ul>
                <div className="search">
                    <svg className='w-[25px]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </header>

            <div className="slider h-screen -mt-[50px] relative">
                <div className="list relative h-full">
                    {items.map((item, index) => (
                        // <div className={`item ${index === itemActive ? 'active' : ''}`} key={index}>
                        <div className={`item absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 ${index === itemActive ? 'active opacity-100 z-10' : ''}`} key={index}>
                            <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                            <div className="absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10">
                                <p className='uppercase tracking-[10px]'>design</p>
                                {/* <p className={`uppercase tracking-[10px] ${index === itemActive ? 'animate-showContent delay-[700ms]' : 'translate-y-[30px] blur-[20px] opacity-0'}`}>design</p> */}
                                <h2 className='lg:text-[100px] text-[60px] m-0'>{item.title}</h2>
                                {/* <h2 className={`text-[100px] m-0 ${index === itemActive ? 'animate-showContent delay-[1s]' : 'translate-y-[30px] blur-[20px] opacity-0'}`}>{item.title}</h2> */}
                                <p>{item.content}</p>
                                {/* <p className={`${index === itemActive? 'animate-showContent delay-[1.3s]': 'translate-y-[30px] blur-[20px] opacity-0'}`}>{item.content}</p> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows absolute top-[30%] z-100 w-full flex justify-between px-5 box-border">
                    <button className="prev bg-[#eee5] border-0 font-mono w-[40px] h-[40px] rounded-[5px] text-xl text-[#eee] transition-all duration-500 cursor-pointer hover:bg-[#eee] hover:text-black sm:block hidden" onClick={handlePrevClick}>&lt;</button>
                    <button className="next bg-[#eee5] border-0 font-mono w-[40px] h-[40px] rounded-[5px] text-xl text-[#eee] transition-all duration-500 cursor-pointer hover:bg-[#eee] hover:text-black sm:block hidden" onClick={handleNextClick}>&gt;</button>
                </div>

                <div className="thumbnail absolute bottom-[50px] z-20 w-full h-[250px] flex gap-2 px-12 box-border overflow-auto justify-center">
                    {thumbnails.map((thumbnail, index) => (
                        <div
                            className={`item ${thumbnail.active ? 'active' : ''} w-[150px] h-[190px] flex-shrink-0 transition-all duration-500 filter brightness-[0.5]`}
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img src={thumbnail.img} alt={thumbnail.title} className="w-full h-full object-cover rounded-[10px]" />
                            <div className="content absolute inset-x-2 bottom-2">Name Slider</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;




