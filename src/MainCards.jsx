// import React from "react";
// import CardComponent from "./CardComponent";
// const MainCards = () => {
//     return (
//         <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
//             {/* Fixed Header */}
//             <h1 className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-10 text-3xl font-bold text-center">
//                 Events
//             </h1>

//             {/* Cards Section */}
//             <div className="w-full flex-grow mt-[10rem]"> {/* Margin to ensure cards start below header */}
//                 <ul id="cards" className="list-none grid grid-cols-1 gap-[10vh]">
//                     {Array.from({ length: 6 }, (_, index) => (
//                         <li
//                             key={index}
//                             className="card relative"
//                         >
//                             <div
//                                 className="card-body sticky top-[10rem] max-h-[70vh] flex justify-center items-center rounded-lg shadow-lg h-[40vh] w-[300px] p-4 mx-auto transition-none transform-none"
//                                 style={{ backgroundColor: getCardColor(index) }}
//                             >
//                                 <CardComponent
//                                     header={`Event ${index + 1}`}
//                                     imageUrl={`https://via.placeholder.com/300?text=Event+${index + 1}`}
//                                     description={`This is the description for Event ${index + 1}.`}
//                                     buttonText="Learn More"
//                                     onButtonClick={() => alert(`Event ${index + 1} clicked!`)}
//                                 />
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// // Helper function to get card colors based on index
// const getCardColor = (index) => {
//     const colors = ['#52B2CF', '#E5A36F', '#9CADCE', '#D4AFB9', '#D4AFB9', '#D4AFB9'];
//     return colors[index] || '#D4AFB9';
// };

// export default MainCards;

// import React, { useState } from "react";
// import CardComponent from "./CardComponent";
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image

// const MainCards = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     // Create an array of event headers and descriptions
//     const events = Array.from({ length: 6 }, (_, index) => ({
//         header: `Event ${index + 1}`,
//         description: `This is the description for Event ${index + 1}.`,
//         imageUrl: abhinay, // Use the imported image
//     }));

//     return (
//         <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
//             {/* Fixed Header */}
//             <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4">
//                 <div className="max-w-[1200px] mx-auto grid grid-cols-3 items-center">
//                     {/* Left-aligned Logo or Title */}
//                     <div className="font-bold sm:text-xl text-lg md:text-left">
//                         Impressions
//                     </div>

//                     {/* Navigation Links */}
//                     <ul className="hidden md:flex gap-6 justify-center text-sm md:text-lg font-medium">
//                         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Blog</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Info</li>
//                     </ul>

//                     {/* Search Icon */}
//                     <div className="flex justify-end">
//                         <svg
//                             className="w-6 h-6 cursor-pointer"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 20 20"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                             />
//                         </svg>
//                     </div>
//                     <div
//         className="sm:hidden cursor-pointer"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
        
//     </div>
//                 </div>
//             </header>

//             {/* Cards Section */}
//             <div className="w-full flex-grow mt-[10rem]"> {/* Margin to ensure cards start below header */}
//                 <ul
//                     id="cards"
//                     className="list-none grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
//                 >
//                     {events.map((event, index) => (
//                         <li
//                             key={index}
//                             className="card relative flex justify-center items-center"
//                         >
//                             <div
//                                 className="card-body sticky top-[10rem] max-h-[70vh] sm:max-w-[20rem] lg:max-w-[24rem] max-w-[18rem] w-full flex justify-center items-center rounded-lg shadow-lg"
//                                 style={{
//                                     backgroundColor: getCardColor(index),
//                                 }}
//                             >
//                                 <CardComponent
//                                     header={event.header}
//                                     imageUrl={event.imageUrl} // Pass the imported image here
//                                     description={event.description}
//                                     buttonText="Learn More"
//                                     onButtonClick={() =>
//                                         alert(`${event.header} clicked!`)
//                                     }
//                                 />
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// // Helper function to get card colors based on index
// const getCardColor = (index) => {
//     const colors = ['#52B2CF', '#E5A36F', '#9CADCE', '#D4AFB9', '#D4AFC9', '#B4AFB9'];
//     return colors[index] || '#D4AFB9';
// };

// export default MainCards;

// import React, { useState } from "react"; 
// import CardComponent from "./CardComponent"; 
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

// const MainCards = () => {     
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Create an array of event headers and descriptions 
//     const events =[
//         {
//             header: "Event 1",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#33FF57'}

//         },
//         {
//             header: "Event 2",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: {borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FF5733'}

//         },
//         {
//             header: "Event 3",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFC300'}
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFDD00'}
//         }
//     ]

//     return (
//         <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
//             {/* Fixed Header */}
//             <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4">
//                 <div className="max-w-[1200px] mx-auto grid grid-cols-3 items-center">
//                     {/* Left-aligned Logo or Title */}
//                     <div className="font-bold sm:text-xl text-lg md:text-left">
//                         Impressions
//                     </div>

//                     {/* Navigation Links */}
//                     <ul className="hidden md:flex gap-6 justify-center text-sm md:text-lg font-medium">
//                         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Blog</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Info</li>
//                     </ul>

//                     {/* Search Icon
//                     <div className="flex justify-end col-span-1">
//                         <svg
//                             className="w-6 h-6 cursor-pointer"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 20 20"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                             />
//                         </svg>
//                     </div> */}
//                     {/* Menu toggle for small screens */}
//                     <div
//                         className="sm:hidden cursor-pointer"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                     </div>
//                 </div>
//             </header>

//             {/* Cards Section */}
//             <div className="w-full flex-grow pt-[100px] mt-[10rem]"> 
//                 <ul id="cards" className="list-none grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
//                     {events.map((event, index) => (
//                         <li key={index} className="card relative flex justify-center items-center">
                            
//                                 <CardComponent
//                                     header={event.header}
//                                     imageUrl={event.imageUrl}
//                                     description={event.description}
//                                     buttonText="Learn More"
//                                     onButtonClick={() => alert(`${event.header} clicked!`)}
//                                     headerStyle={event.headerStyle}
//                                     style={{ 
//                                         height:"450px",
//                                         borderRadius: '30px', // Optional: Rounded corners for the cards
//                                     }}                                
//                                 />
                            
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const getCardColor = (index) => {
//     const colors = ['#52B2CF', '#E5A36F', '#9CADCE', '#D4AFB9', '#D4AFC9', '#B4AFB9'];
//     return colors[index] || '#D4AFB9';
// };

// export default MainCards;

// import React, { useState } from "react"; 
// import CardComponent from "./CardComponent"; 
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

// const MainCards = () => {     
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Create an array of event headers and descriptions 
//     const events =[
//         {
//             header: "Event 1",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#33FF57'}
//         },
//         {
//             header: "Event 2",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: {borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FF5733'}
//         },
//         {
//             header: "Event 3",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFC300'}
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFDD00'}
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFDD00'}
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle:{backgroundColor: '#FFDD00'}
//         }
//     ]

//     return (
//         <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
//             {/* Fixed Header */}
//             <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4">
//                 <div className="max-w-[900px] mx-auto grid grid-cols-3 items-center">
//                     {/* Left-aligned Logo or Title */}
//                     <div className="font-bold sm:text-xl text-lg md:text-left">
//                         Impressions
//                     </div>

//                     {/* Navigation Links */}
//                     <ul className="hidden md:flex gap-6 justify-center text-sm md:text-lg font-medium">
//                         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Blog</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Info</li>
//                     </ul>

//                     {/* Menu toggle for small screens */}
//                     <div
//                         className="sm:hidden cursor-pointer"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                     </div>
//                 </div>
//             </header>
//             <div style={{ height: "100px" }}></div> {/* Adjust height to match the header */}

//             {/* Cards Section */}
//             <div className="w-full flex-grow mt-[11rem]" style={{paddingTop:"40px",marginTop:"150px"}}> 
//                 <ul id="cards" className="list-none grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
//                     {events.map((event, index) => (
//                         <li key={index} className="card relative flex justify-center items-center w-full">
//                             <CardComponent
//                                 header={event.header}
//                                 imageUrl={event.imageUrl}
//                                 description={event.description}
//                                 buttonText="Learn More"
//                                 onButtonClick={() => alert(`${event.header} clicked!`)}
//                                 headerStyle={event.headerStyle}
//                                 style={{ 
//                                     width:"100%",
//                                     height: "470px",  
//                                     border:'2px solid black',
//                                     borderRadius: '30px',
//                                 }}                                
//                             /> 
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default MainCards;

// import React, { useState } from "react"; 
// import CardComponent from "./CardComponent"; 
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

// const MainCards = () => {     
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const events = [
//         {
//             header: "Event 1",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#33FF57' }
//         },
//         {
//             header: "Event 2",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#FF5733' }
//         },
//         {
//             header: "Event 3",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#FFC300' }
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#FFDD00' }
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#FFDD00' }
//         },
//         {
//             header: "Event 4",
//             description: "Explore the first event of the series.",
//             imageUrl: abhinay,
//             buttonText: "Discover More",
//             style: { borderRadius: '15px' },
//             headerStyle: { backgroundColor: '#FFDD00' }
//         }
//     ];

//     return (
//         <div className="container mx-auto p-4 min-h-screen flex flex-col items-center max-w-screen-lg">
//             {/* Fixed Header */}
//             <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4">
//                 <div className="max-w-[900px] mx-auto grid grid-cols-3 items-center">
//                     <div className="font-bold sm:text-xl text-lg md:text-left">
//                         Impressions
//                     </div>
//                     <ul className="hidden md:flex gap-6 justify-center text-sm md:text-lg font-medium">
//                         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Blog</li>
//                         <li className="hover:text-blue-600 cursor-pointer">Info</li>
//                     </ul>
//                     <div
//                         className="sm:hidden cursor-pointer"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                     </div>
//                 </div>
//             </header>

//             {/* Spacer Element for Fixed Header */}
//             <div style={{ height: "80px" }}></div>

//             {/* Cards Section */}
//             <div className="w-2/3 flex-grow">
//                 <ul
//                     id="cards"
//                     className="w-full grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
//                 >
//                     {events.map((event, index) => (
//                         <li
//                             key={index}
//                             className="card flex justify-center items-center w-full"
//                         >
//                             <CardComponent
//                                 header={event.header}
//                                 imageUrl={event.imageUrl}
//                                 description={event.description}
//                                 buttonText="Learn More"
//                                 onButtonClick={() => alert(`${event.header} clicked!`)}
//                                 headerStyle={event.headerStyle}
//                                 style={{
//                                     width: "100%", // Card takes full width of its container
//                                     height: "470px",
//                                     border: "2px solid black",
//                                     borderRadius: "30px",
//                                 }}
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default MainCards;
import React, { useState } from "react"; 
import CardComponent from "./CardComponent"; 
import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg'; // Import your local image  

const MainCards = () => {     
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const events = [
        {
            header: "Event 1",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#33FF57' }
        },
        {
            header: "Event 2",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FF5733' }
        },
        {
            header: "Event 3",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFC300' }
        },
        {
            header: "Event 4",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Event 5",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
            buttonText: "Discover More",
            style: { borderRadius: '15px' },
            headerStyle: { backgroundColor: '#FFDD00' }
        },
        {
            header: "Event 6",
            description: "Explore the first event of the series.",
            imageUrl: abhinay,
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
