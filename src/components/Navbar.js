import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
import smallLogo from '../images/z.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { urls } from '../url';
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef();
  // const navbarRef = useRef();
  const location = useLocation();
  
  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    useLayoutEffect(() => {
    const title = titleRef.current;
    
    gsap.set(title, {
      yPercent: -100,
      opacity: 0
    });
  
    gsap.to(title, {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "100px top",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  return (
    <>
      <nav className="sticky top-0 z-30 backdrop-blur-sm h-[10vh]">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between px-5">
            <Link 
              to="/" 
              className="flex items-center gap-3 transition-transform hover:cursor-pointer"
            >
              <img src={smallLogo} alt="Logo" className="w-auto h-20" />
              <span 
                ref={titleRef} 
                className="text-xl font-semibold bg-clip-text"
              >
                Impressions 24
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {urls.map((e, idx) => (
                <NavLink to={e.url} mobile={true} onClick={toggleMenu} key={idx}>
                  {e.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative p-2 transition-colors rounded-lg md:hidden hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} color='white' />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} color='white' />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu with Backdrop */}
          <AnimatePresence>
            {isOpen && (
              <>
                
                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-30 w-full md:hidden bg-black/95 backdrop-blur-sm"
                >
                  <div className="px-5 py-4 space-y-4">
                  {urls.map((e, idx) => (
                    <NavLink to={e.url} mobile={true} onClick={toggleMenu} key={idx}>
                      {e.name}
                    </NavLink>
                  ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ to, children, mobile = false, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        relative 
        no-underline 
        transition-colors
        ${mobile ? 'block text-lg' : 'inline-block'}
        ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
        group
      `}
    >
      {children}
      <span className={`
        absolute 
        -bottom-1 
        left-0
        w-full
        h-0.5 
        bg-white 
        transform 
        scale-x-0 
        transition-transform 
        duration-300
        ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}
      `} />
    </Link>
  );
};

export default Navbar;