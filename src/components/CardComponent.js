// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CardComponent = ({ header, imageUrl, description, buttonText, onButtonClick, style, headerStyle }) => {
    return (
        <div
            className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            style={style} // Apply card-level styles
        >
            {/* Header Section */}
            <div
                className="p-4"
                style={headerStyle} // Apply header-specific styles dynamically
            >
                <h2 className="text-lg font-bold text-white md:text-2xl">{header}</h2>
            </div>

            {/* Image Section */}
            <div className="flex-1">
                <img
                    src={imageUrl}
                    style={{height:"300px"}}
                    alt={header}
                    className="object-cover w-full"
                />
            </div>

            {/* Description and Button Section */}
            <div className="p-4 bg-gray-50">
                <p className="mb-4 text-sm text-gray-700 md:text-base">{description}</p>
                <button
                    className="px-4 py-2 text-white transition-all duration-300 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-400 hover:to-orange-500"
                >
                    <Link
                        to={`/events/${encodeURIComponent(header)}`}
                        className="text-white"
                    >
                        {buttonText}
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CardComponent;