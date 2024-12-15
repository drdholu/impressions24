import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import teamData from './teams.json'; // Assume this is the path to the JSON file
import Navbar from './Navbar'

const TeamCard = ({ image, name, role, instagram, linkedin }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // 3D Tilt Effect
      gsap.to(card, {
        rotationX: -mouseY / 20,
        rotationY: mouseX / 20,
        transformPerspective: 500,
        ease: 'power1.out',
        duration: 0.6
      });
    };

    const handleMouseLeave = () => {
      // Reset to original position
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 500,
        ease: 'power1.out',
        duration: 0.6
      });
    };

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-64 perspective-800 h-96 group border-blackx"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-300 ease-out transform-style-3d backface-hidden"
      >
        {/* Card Background */}
        <div
          className="absolute inset-0 transition-all duration-300 bg-center bg-cover shadow-lg shadow-black rounded-xl filter brightness-75 group-hover:brightness-50"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Card Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-20 bg-gradient-to-b from-transparent to-black/70 rounded-xl group-hover:opacity-100" />

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="mb-1 text-xl font-bold">{name}</h3>
          <p className="text-sm text-white/80">{role}</p>

          {/* Social Media Links */}
          <div className="flex mt-2 space-x-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-pink-400"
              >
                <i className="text-xl fab fa-instagram"></i>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-blue-500"
              >
                <i className="text-xl fab fa-linkedin"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = () => {
  return (
    <div className=" bg-fixed bg-no-repeat bg-cover bg-teamsBackground ">
      <Navbar/>
      <div className='mb-12 mt-8  text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md font-paperHeader'><p className='text-[2em]' style={{
                WebkitTextStroke: "0.01px black",
                textShadow:"2px 2px 2px black"
              }}>9th EDITION</p>
        <p style={{
                WebkitTextStroke: "0.01px black",
                textShadow:"2px 2px 2px black"
              }}>CORE TEAM</p>
      </div>
      <div className="px-4 mx-auto">
        {teamData.teamSections.map((section, sectionIndex ) => (
          <div key={sectionIndex} className={sectionIndex < teamData.teamSections.length - 1 ? 'mb-40' : ''}>
            <h2
              className="mb-12 text-3xl md:text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md"
              style={{
                WebkitTextStroke: "1px grey",
              }}
            >
              {section.title}
            </h2>


            <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-8 ">
              {section.members.map((member, memberIndex) => (
                <TeamCard
                  key={`${sectionIndex}-${memberIndex}`}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;