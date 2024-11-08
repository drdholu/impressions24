import React from 'react';
import { Palette } from 'lucide-react';
import photo1 from '../images/impressions_campus_shot.webp'
import Cleo from '../images/Cleo.png'
const AboutUs = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="text-red-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">About Impressions</h2>
          </div>
          <p className="text-xl font-medium text-red-500">By the Artist, For the Artist</p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
          <div className="relative w-full md:w-1/2">
            <img 
              src={photo1}
              alt="Artists at work" 
              className="object-cover w-full rounded-lg shadow-lg h-80"
            />
            <div className="absolute bottom-0 left-0 w-full rounded-b-lg h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              <img 
                src={Cleo} 
                alt="" 
                className="absolute h-[8em] -bottom-5 right-0
                         sm:h-[12em] sm:-bottom-10 sm:right-0
                         md:h-[18em] md:-bottom-28 md:left-[-8%]
                         lg:left-[-15%]
                         xl:left-[-20%]" 
              />
          </div>
          {/* <div>
            <img src={Cleo} alt="" className='absolute md:h-[20em] bottom-4 md:left-10 right-0 h-[10em]' />
          </div> */}
          
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Created by artists who understand the journey, Impressions is your platform to showcase talent, connect with peers, and thrive in a community that speaks your creative language. We believe in empowering artists by providing them with the tools, space, and community they need to flourish. Our platform is more than just a gallery – it's a vibrant ecosystem where creativity meets opportunity, where emerging talents find their voice, and where established artists continue to evolve. Through our curated exhibitions, collaborative spaces, and supportive network, we're fostering an environment where artistic vision can truly come to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;