import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';

const CardComponent = ({ 
    header, 
    imageUrl, 
    description, 
    buttonText = 'Explore', 
    onButtonClick,
    className = '',
    headerClassName = '',
    imageClassName = ''
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
                type: 'spring', 
                stiffness: 300, 
                initial: { duration: 0.5 },
                hover: { duration: 0.3 }
            }}
            className={`relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 
                shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10 ${className} w-[50vw]`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Innovative Header */}
            <div 
                className={`relative p-5 bg-gradient-to-br from-teal-500 to-emerald-600 
                    text-white flex items-center justify-center ${headerClassName}`}
            >
                <h2 className="text-xl font-bold tracking-tight truncate">{header}</h2>
                {/* <Layers 
                    className={`w-6 h-6 transition-transform ${isHovered ? 'rotate-12 scale-110' : ''}`} 
                /> */}
            </div>

            {/* Image with Modern Overlay */}
            <div className="relative h-[250px] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={header}
                    className={`w-full h-full object-cover transition-all duration-500 
                        ${isHovered ? 'scale-105 brightness-90' : 'scale-100 brightness-100'} 
                        ${imageClassName}`}
                />
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: isHovered ? 0.3 : 0,
                        backgroundColor: isHovered ? '#000' : 'transparent'
                    }}
                    className="absolute inset-0"
                />
            </div>

            {/* Content Section */}
            <div className="relative p-6 space-y-4 bg-white dark:bg-neutral-800">
                <p className="text-neutral-600 dark:text-neutral-300 line-clamp-3">
                    {description}
                </p>
                
                <Link 
                    to={`/events/${encodeURIComponent(header)}`}
                    onClick={onButtonClick}
                    className="group inline-flex items-center gap-2 
                        px-5 py-2.5 text-sm font-semibold 
                        bg-teal-600 text-white rounded-full 
                        hover:bg-teal-700 transition-all duration-300 
                        hover:shadow-lg hover:translate-y-[-2px]"
                >
                    {buttonText}
                    <ArrowUpRight 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    />
                </Link>

                {/* Subtle Gradient Border */}
                <div 
                    className={`absolute inset-x-0 bottom-0 h-1 
                        bg-gradient-to-r from-teal-500 to-emerald-600 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300`}
                />
            </div>
        </motion.div>
    );
};

export default CardComponent;