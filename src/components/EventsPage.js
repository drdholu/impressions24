import React, { useState, useEffect } from 'react';
import '../styles/eventspage.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

function isIphone() {
    return /iPhone/i.test(navigator.userAgent);
}

function Events() {
    // const navigate = useNavigate();
    const { moduleName } = useParams();
    const [items, setItems] = useState([]);
    // const [moduleData, setModuleData] = useState(null);
    const [itemActive, setItemActive] = useState(0); // Track the active item
    const [intervalId, setIntervalId] = useState(null); // Store the interval for auto-slide

    console.log(intervalId);
    useEffect(() => {
        // Fetch the JSON data
        const fetchData = async () => {
          try {
            // Assuming the JSON file is named 'data.json' and is located in the public folder
            const response = await fetch('/data/MainData.json');
            const data = await response.json();
    
            // Check if moduleName exists in the data, and then extract the items
            if (data[moduleName]) {
              setItems(data[moduleName].items); // Set the items for the specific module
            } else {
              console.error(`Module ${moduleName} not found.`);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, [moduleName]); // Re-fetch data when moduleName changes    
    
    // const items = [
    //     { img: '/image/main-bg.jpg', title: 'Impressions', content: 'Lorem ipsum dolor sit amet...' },
    //     { img: '/image/shoutout-stage.jpg', title: 'Shoutout', content: 'Lorem ipsum dolor sit amet...' },
    //     { img: '/image/dance-stage.jpg', title: 'Dance', content: 'Lorem ipsum dolor sit amet...' },
    //     { img: '/image/music-stage2.jpg', title: 'Music', content: 'Lorem ipsum dolor sit amet...' },
    //     { img: '/image/abhinay-stage.jpg', title: 'Abhinay', content: 'Lorem ipsum dolor sit amet...' },
    // ];

    const thumbnails = items.map((item, index) => ({
        ...item,
        active: index === itemActive,
    }));

    // Effect to start auto-sliding
    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setItemActive((prevActive) => (prevActive + 1) % items.length);
    //     }, 5000);

    //     setIntervalId(id);

    //     return () => clearInterval(id); // Cleanup interval on component unmount
    // }, [itemActive]);

    useEffect(() => {
        if (items.length > 0) { // Ensure items exist before setting up the interval
            const id = setInterval(() => {
                setItemActive((prevActive) => (prevActive + 1) % items.length);
            }, 5000);
    
            setIntervalId(id);
    
            return () => clearInterval(id); // Cleanup interval on component unmount
        }
    }, [items, itemActive]);

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
        <div  className="m-0 font-sans text-gray-200">
            <Navbar color={"none"} fixed={true}/>

            <div className="slider h-[100vh] relative">
                <div className="relative h-full list">
                    {items.map((item, index) => (
                        // <div className={`item ${index === itemActive ? 'active' : ''}`} key={index}>
                        <div className={`item absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 ${index === itemActive ? 'active opacity-100 z-10' : ''}`} key={index}>
                            <img className='object-cover w-full h-full' src={item.img} alt={item.title} />
                            <div className="absolute left-[10%] top-[20%] w-[1300px] max-w-[80%] z-10">
                                {/* <p className='uppercase tracking-[10px]'>design</p> */}
                                {/* <p className={`uppercase tracking-[10px] ${index === itemActive ? 'animate-showContent delay-[700ms]' : 'translate-y-[30px] blur-[20px] opacity-0'}`}>design</p> */}
                                <h2 className='lg:text-[100px] text-[50px] m-0' style={{fontSize:window.innerWidth <= 1024 ? (item.title.length > 18 ? '40px' : '50px'): (item.title.length > 20 ? '85px' : '100px')}}>{item.title}</h2>
                                {/* <h2 className={`text-[100px] m-0 ${index === itemActive ? 'animate-showContent delay-[1s]' : 'translate-y-[30px] blur-[20px] opacity-0'}`}>{item.title}</h2> */}
                                <p>{item.content}</p>
                                {/* <p className={`${index === itemActive? 'animate-showContent delay-[1.3s]': 'translate-y-[30px] blur-[20px] opacity-0'}`}>{item.content}</p> */}
                                {/* <button className={`mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition`}>Learn More */}
                                
                                <button className={`mt-4 py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl`}>
                                    <Link
                                        // to={`/explore/${encodeURIComponent(item.title)}`}
                                        to={`/events/${(moduleName)}/${encodeURIComponent(item.title.trim().replace(/\s+/g, '').replace(/[&%]/g, ''))}`}
                                        className="text-white"
                                    >
                                        Explore
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows absolute top-[30%] z-100 w-full flex justify-between px-5 box-border">
                    <button className="prev bg-[#eee5] border-0 font-mono w-[40px] h-[40px] rounded-[5px] text-xl text-[#eee] transition-all duration-500 cursor-pointer hover:bg-[#eee] hover:text-black sm:block hidden" onClick={handlePrevClick}>&lt;</button>
                    <button className="next bg-[#eee5] border-0 font-mono w-[40px] h-[40px] rounded-[5px] text-xl text-[#eee] transition-all duration-500 cursor-pointer hover:bg-[#eee] hover:text-black sm:block hidden" onClick={handleNextClick}>&gt;</button>
                </div>

                <div className="thumbnail absolute bottom-[20px] z-20 w-full h-[250px] flex gap-2 px-12 box-border overflow-auto justify-center">
                    {thumbnails.map((thumbnail, index) => (
                        <div
                            className={`item ${thumbnail.active ? 'active' : ''} w-[150px] h-[190px] flex-shrink-0 transition-all duration-500 filter brightness-[0.5]`}
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img src={thumbnail.img} alt={thumbnail.title} className="w-full h-full object-cover rounded-t-[10px]" />
                            <div
                                style={isIphone()?{position:"relative"}:{position:"absolute"}}                        
                                className="content p-0 m-0 inset-x-2 bottom-0 left-0 w-full bg-blue-500 text-white text-center py-1 rounded-b-[10px]"
                            >
                                {thumbnail.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;




