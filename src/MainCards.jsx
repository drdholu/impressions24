import React, { useState } from "react"; 
import CardComponent from "./CardComponent"; 
import './Cards.css';
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

const MainCards = () => {     
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const events = [
        {
            header: "Event 1",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#33FF57' }
        },
        {
            header: "Event 2",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FF5733' }
        },
        {
            header: "Event 3",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFC300' }
        },
        {
            header: "Event 4",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Event 5",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Event 6",
            description: "Explore the first event of the series.",
            imageUrl: "/image/abhinay-stage.jpg",
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        }
    ];

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center max-w-screen-lg">
            {/* Fixed Header */}
            <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4">
                <div className="max-w-[900px] mx-auto grid grid-cols-3 items-center">
                    <div className="font-bold sm:text-xl text-lg md:text-left">
                        Impressions
                    </div>
                    <ul className="hidden md:flex gap-6 justify-center text-sm md:text-lg font-medium">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                        <li className="hover:text-blue-600 cursor-pointer">Info</li>
                    </ul>
                    <div
                        className="sm:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    </div>
                </div>
            </header>

            {/* Spacer Element for Fixed Header */}
            <div style={{ height: "80px" }}></div>

            {/* Cards Section */}
            <div className="w-full flex-grow">
                <ul
                    id="cards"
                    className="w-full grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
                >
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="card flex justify-center items-center w-full"
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
