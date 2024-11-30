// const CardComponent = ({ header, imageUrl, description, buttonText, onButtonClick }) => {
//     return (
//         <div className="h-full w-full flex flex-col rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
//             {/* Header Section */}
//             <div className="p-4 bg-gradient-to-r from-teal-400 to-blue-500">
//                 <h2 className="text-2xl font-bold text-white">{header}</h2>
//             </div>

//             {/* Image Section */}
//             <div className="flex-1">
//                 <img 
//                     src={imageUrl} 
//                     alt="Card Image" 
//                     className="w-full h-[200px] object-cover rounded-t-lg"  // Adding rounded corners to image
//                 />
//             </div>

//             {/* Description and Button Section */}
//             <div className="p-4 bg-gray-50">
//                 <p className="text-gray-700 mb-4">{description}</p>
                
//                 {/* Button */}
//                 <button 
//                     className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-4 rounded-full hover:from-pink-400 hover:to-orange-500 transition-all duration-300"
//                     onClick={onButtonClick}
//                 >
//                     {buttonText}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CardComponent;


// const CardComponent = ({ header, imageUrl, description, buttonText, onButtonClick }) => {
//     return (
//         <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
//             {/* Header Section */}
//             <div className="p-4 bg-gradient-to-r from-teal-400 to-blue-500">
//                 <h2 className="text-lg md:text-2xl font-bold text-white">{header}</h2>
//             </div>

//             {/* Image Section */}
//             <div className="flex-1">
//                 <img 
//                     src={imageUrl} 
//                     alt="Card Image" 
//                     className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover"
//                 />
//             </div>

//             {/* Description and Button Section */}
//             <div className="p-4 bg-gray-50">
//                 <p className="text-sm md:text-base text-gray-700 mb-4">{description}</p>
                
//                 {/* Button */}
//                 <button 
//                     className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-4 rounded-full hover:from-pink-400 hover:to-orange-500 transition-all duration-300"
//                     onClick={onButtonClick}
//                 >
//                     {buttonText}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CardComponent;

// const CardComponent = ({ header, imageUrl, description, buttonText, onButtonClick, style, headerStyle }) => {
//     return (
//         <div
//             className="flex flex-col rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
//             style={style} // Apply the style dynamically
//         >
//             {/* Header Section */}
//             <div className="p-4 bg-gradient-to-r from-teal-400 to-blue-500">
//                 <h2 className="text-lg md:text-2xl font-bold text-white">{header}</h2>
//             </div>

//             {/* Image Section */}
//             <div className="flex-1">
//                 <img
//                     src={imageUrl}
//                     alt="Card Image"
//                     className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover"
//                 />
//             </div>

//             {/* Description and Button Section */}
//             <div className="p-4 bg-gray-50">
//                 <p className="text-sm md:text-base text-gray-700 mb-4">{description}</p>
//                 <button
//                     className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-4 rounded-full hover:from-pink-400 hover:to-orange-500 transition-all duration-300"
//                     onClick={onButtonClick}
//                 >
//                     {buttonText}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CardComponent;

const CardComponent = ({ header, imageUrl, description, buttonText, onButtonClick, style, headerStyle }) => {
    return (
        <div
            className="flex flex-col rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={style} // Apply card-level styles
        >
            {/* Header Section */}
            <div
                className="p-4"
                style={headerStyle} // Apply header-specific styles dynamically
            >
                <h2 className="text-lg md:text-2xl font-bold text-white">{header}</h2>
            </div>

            {/* Image Section */}
            <div className="flex-1">
                <img
                    src={imageUrl}
                    style={{height:"300px"}}
                    alt="Card Image"
                    className="w-full object-cover"
                />
            </div>

            {/* Description and Button Section */}
            <div className="p-4 bg-gray-50">
                <p className="text-sm md:text-base text-gray-700 mb-4">{description}</p>
                <button
                    className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-4 rounded-full hover:from-pink-400 hover:to-orange-500 transition-all duration-300"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CardComponent;
