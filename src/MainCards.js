import React, { useState } from "react"; 
import CardComponent from "./CardComponent"; 
import './Cards.css';
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

const MainCards = () => {     
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const events = [
        {
            header: "Music",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#33FF57' }
        },
        {
            header: "Arts & Craft",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FF5733' }
        },
        {
            header: "Abhinay",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFC300' }
        },
        {
            header: "Dance",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Shoutout",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Camera",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        }
    ];

    return (
        <div className="container flex flex-col items-center max-w-screen-lg min-h-screen p-4 mx-auto">
            {/* Fixed Header */}
            {/* <header className="fixed top-0 left-0 z-50 w-full p-4 bg-white shadow-md">
                <div className="max-w-[900px] mx-auto grid grid-cols-3 items-center">
                    <div className="text-lg font-bold sm:text-xl md:text-left">
                        Impressions
                    </div>
                    <ul className="justify-center hidden gap-6 text-sm font-medium md:flex md:text-lg">
                        <li className="cursor-pointer hover:text-blue-600">Home</li>
                        <li className="cursor-pointer hover:text-blue-600">Blog</li>
                        <li className="cursor-pointer hover:text-blue-600">Info</li>
                    </ul>
                    <div
                        className="cursor-pointer sm:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    </div>
                </div>
            </header> */}

            {/* Spacer Element for Fixed Header */}
            <div style={{ height: "80px" }}></div>

            {/* Cards Section */}
            <div className="flex-grow w-full">
                <ul
                    id="cards"
                    className="grid w-full gap-12 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-center w-full card"
                        >
                            <CardComponent
                                header={event.header}
                                imageUrl={event.imageUrl}
                                description={event.description}
                                buttonText="Learn More"
                                onButtonClick={() => alert(`${event.header} clicked!`)}
                                headerStyle={event.headerStyle}
                                style={{
                                    width: "100%", // Card takes full width of its container
                                    height: "auto",  // Let the height adjust automatically
                                    maxWidth: "400px",  // Limit max width of cards for large screens
                                    border: "2px solid black",
                                    borderRadius: "30px",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MainCards;
