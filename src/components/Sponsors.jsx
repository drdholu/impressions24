import React from 'react';
import Navbar from './Navbar';
import Desir from './images/sponsors/Desir as Dessert Partner.jpg'
import cubanos from './images/sponsors/Cubanos Food and Beverages Partner.jpg'
import atrangi from './images/sponsors/Ice cream partner.jpg'
import momo from './images/sponsors/Momo Nation Cafe as Momo Partner.jpg'
import noodle from './images/sponsors/download (1).jpeg'
import potato from './images/sponsors/Potato Twisters as Potato Twister partner.jpg'
import abhiniks from './images/sponsors/Abhiniks Kitchen Snacks partner.png'
import perfume from './images/sponsors/Officials_Perfume_partner1.png'
import plant from './images/sponsors/Vrukshavalli Plant nursery partner.jpg'
import emerald from './images/sponsors/Emerald as jewellery sponsor_.jpg'
import campustimes from './images/sponsors/campustimes_pune.png'
import edtimes from './images/sponsors/edtimes.jpg'
import golden_papaya from './images/sponsors/GOLDEN-PAPAYA.webp'
import punekar_news from './images/sponsors/punekar online news.png'
import sach_kahu from './images/sponsors/Sachkahu.jpg'
import punya_nagri from './images/sponsors/punyanagri.png'
import youth from './images/sponsors/youth.png'
import akashwani from './images/sponsors/akashwani.jpeg'
import maharashtra from './images/sponsors/Maharashtra-Times-logo.jpg'

import SponsorsCard from './SponsorsCard';
const sponsorsData = {
  "Associate Sponsors": [
    { name: "Emerald", photo: emerald, description: "Jewellery Partner" },
    { name: "Officials", photo: perfume, description: "Pefume Partner" },
    { name: "Vrukshavalli", photo: plant, description: "Plant Nursery Partner" },
  ],
  "Media Partners": [
    { name: "Golden Papaya", photo: golden_papaya, description: "Online Media Partner",link:`https://goldenpapaya.in/` },
    { name: "Akashwani", photo: akashwani, description: "Radio Partner",link:`https://akashvani.gov.in/radio/live.php` },
    { name: "Sach Kahoon", photo: sach_kahu, description: "Hindi Newspaper & Magazine Partner",link:`https://epaper.sachkahoon.com/` },
    { name: "Youth Incorporated", photo: youth, description: "Youth Media Partner",link:`https://youthincmag.com/` },
    { name: "Punekar News", photo: punekar_news, description: "Online News Partner",link:`https://www.punekarnews.in/` },
   { name: "Campus Times", photo: campustimes, description: "Online Media Partner",link:`https://www.campustimespune.com/` },
    { name: "ED Times", photo: edtimes, description: "Media Coverage Partner",link:`https://edtimes.in/` },
    { name: "Punya Nagari", photo: punya_nagri, description: "Marathi Newspaper Partner",link:`https://epaper.punyanagari.in/` },
    { name: "Maharashtra Times", photo: maharashtra, description: "Marathi Newspaper Partner",link:`https://marathi.indiatimes.com/` }
  ],
  "Food Sponsors": [
    { name: "Desir", photo: Desir, description: "Desserts Partner" },
    { name: "Cubanos", photo: cubanos, description: "Food and Beverages Partner"},
    { name: "Atrangi Manas", photo: atrangi, description: "Ice Cream Partner"},
    { name: "Momo Nation Cafe", photo: momo, description: "Momo Partner" },
    { name: "Cubanos", photo: cubanos, description: "Food and Beverages Partner" },
    { name: "Noodle+", photo: noodle , description: "Noodles Partner"},
    { name: "Potato Twister's", photo: potato, description: "Potato Twister Partner" },
    { name: "Abhiniks Kitchen", photo: abhiniks, description: "Snacks Partner" },
  ],
};

const Sponsors = () => {
  return (
    <div className="bg-fixed bg-no-repeat bg-cover bg-galleryBackground w-full h-full">
      <Navbar />
    <div
      className="w-full min-h-screen bg-cover bg-center p-8 flex flex-col items-center"
      style={{ backgroundImage: 'url("/mjy15.jpg")' }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white tracking-wide">
        SPONSORS
      </h2>
      {Object.entries(sponsorsData).map(([category, sponsors], categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6 text-white">
            {category}
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {sponsors.map((sponsor, index) => (
              <SponsorsCard
                key={index}
                name={sponsor.name}
                photo={sponsor.photo}
                description={sponsor.description}
                link={sponsor.link}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Sponsors;
