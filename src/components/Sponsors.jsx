// import React from 'react';
// import SponsorsCard from './SponsorsCard';
// import abhinay from './MODULE_IMAGES/abhinay/artiskit.jpg';

// const sponsorsData = {
//   "Title Sponsors": [
//     { name: "Sponsor A", photo: abhinay, description: "Main Sponsor" },
//     { name: "Sponsor B", photo: abhinay, description: "Lead Sponsor" },
//   ],
//   "Associate Sponsors": [
//     { name: "Sponsor C", photo: abhinay, description: "Supporting Sponsor" },
//   ],
//   "Co-Title Sponsors": [
//     { name: "Sponsor D", photo: abhinay, description: "Joint Sponsor" },
//   ],
//   "Media Partners": [
//     { name: "Sponsor E", photo: abhinay, description: "Media Coverage Partner" },
//   ],
//   "Food Sponsors": [
//     { name: "Sponsor F", photo: abhinay, description: "Food and Beverage" },
//   ],
//   "Other Sponsors": [
//     { name: "Sponsor G", photo: abhinay, description: "Miscellaneous" },
//   ],
// };

// const Sponsors = () => {
//   return (
//     <div className="p-4 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">SPONSORS</h2>
//         {Object.entries(sponsorsData).map(([category, sponsors], categoryIndex) => (
//           <div key={categoryIndex} className="mb-10">
//             <h3 className="text-xl font-semibold text-center mb-4 text-blue-800">{category}</h3>
//             <div className="flex flex-wrap gap-6 justify-center">
//               {sponsors.map((sponsor, index) => (
//                 <SponsorsCard
//                   key={index}
//                   name={sponsor.name}
//                   photo={sponsor.photo}
//                   description={sponsor.description}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//   );
// };

// export default Sponsors;

import React from 'react';
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

import SponsorsCard from './SponsorsCard';
import artify from './images/MODULE_IMAGES/sponsors1/Artify - Title Sponsor - Official Design Partner.webp'
import cognavi from './images/MODULE_IMAGES/sponsors1/cognavi.webp'
// import studentcover from './images/MODULE_IMAGES/sponsors1/studentcover.webp'
// import mayavarta from './images/MODULE_IMAGES/sponsors1/mayavarta-black.webp'
// import decathlon from './images/MODULE_IMAGES/sponsors1/decathlon.webp'
// import easemytrip from './images/MODULE_IMAGES/sponsors1/easemytrip.webp'
// import ziblot from './images/MODULE_IMAGES/sponsors1/Ziblot_street Arena Partner.webp'
// import vardi from './images/MODULE_IMAGES/sponsors1/VardiLogo.webp'
// import transglobe from './images/MODULE_IMAGES/sponsors1/Logo.webp'
// import tork from './images/MODULE_IMAGES/sponsors1/Tork Motors - EV Partner.webp'
// import boompanda from './images/MODULE_IMAGES/sponsors2/boompanda.webp'
// import self_pivot from './images/MODULE_IMAGES/sponsors1/Self Pivot - Mental Health Partner2.webp'
// import beards from './images/MODULE_IMAGES/sponsors1/beards_shears.webp'
// import adonis from './images/MODULE_IMAGES/sponsors1/Adonis Sterling - Official Accessories Partner.webp'
// import beautfiulier from './images/MODULE_IMAGES/sponsors2/Beautifier Baubleslogo.webp'
// import kiah from './images/MODULE_IMAGES/sponsors1/KIAH Advertising logo.webp'
// import internship from './images/MODULE_IMAGES/sponsors1/internship studio.webp'
// import abpmajha from './images/MODULE_IMAGES/sponsor-logos/Media Partners/ABP_Majha_logo.webp'
// import inshorts from './images/MODULE_IMAGES/sponsor-logos/Media Partners/inshorts.webp'
// import campustimes from './images/MODULE_IMAGES/sponsor-logos/Media Partners/campustimes.webp'
// import puneshor from './images/MODULE_IMAGES/sponsor-logos/Media Partners/puneshor.webp'
// import sakal from './images/MODULE_IMAGES/sponsor-logos/Media Partners/sakal.webp'
// import punesmart from './images/MODULE_IMAGES/sponsor-logos/Media Partners/punesmartcity.webp'
// import punekar from './images/MODULE_IMAGES/sponsor-logos/Media Partners/Punekar News.webp'
// import navabharat from './images/MODULE_IMAGES/sponsor-logos/Media Partners/navabharat.webp'
// import rashtrasanchar from './images/MODULE_IMAGES/sponsor-logos/Media Partners/rashtra.webp'
// import sachkahun from './images/MODULE_IMAGES/sponsor-logos/Media Partners/Sach kahoon.webp'
// import youth_incorporated from './images/MODULE_IMAGES/sponsor-logos/Media Partners/youthincorporated.webp'
// import ed from './images/MODULE_IMAGES/sponsor-logos/Media Partners/EDTIMES LOGO.webp'
// import amadas from './images/MODULE_IMAGES/sponsors2/Amadas Empanadas logo.webp'
// import anazori from './images/MODULE_IMAGES/sponsors2/anazori.webp'
// import rajeshahi from './images/MODULE_IMAGES/sponsors2/rajeshahi.webp'
// import ginger from './images/MODULE_IMAGES/sponsors2/Taste partner.webp'
// import melt from './images/MODULE_IMAGES/sponsors2/CafeMelt.webp'
// import soda from './images/MODULE_IMAGES/sponsors2/sodaMonkey.webp'
// import escents from './images/MODULE_IMAGES/sponsors2/escents.webp'
// import bringer from './images/MODULE_IMAGES/sponsors1/bringer-logo.webp'
// import truscholar from './images/MODULE_IMAGES/sponsors2/truscholar mayur sir transparent logos-01 (2).webp'
// import gyandhan from './images/MODULE_IMAGES/sponsors1/gyandhan.webp'
// import meowdy from './images/MODULE_IMAGES/sponsors2/Meowdy Boys.webp'
const sponsorsData = {
  "Title Sponsors": [
    { name: "Artify", photo: artify, description: "Official Design Partner",link:`https://www.cognavi.com/` }
],
  "Co-Title Sponsors": [
    { name: "Cognavi", photo: cognavi, description: "Music Arena Partner",link:`https://www.cognavi.com/` },
  ],
  "Associate Sponsors": [
    { name: "Emerald", photo: emerald, description: "Jewellery Partner",link:`https://www.cognavi.com/` },
    { name: "Officials", photo: perfume, description: "Pefume Partner",link:`https://www.cognavi.com/` },
    { name: "Vrukshavalli", photo: plant, description: "Plant Nursery Partner",link:`https://www.cognavi.com/` },


    // { name: "Student Cover", photo: studentcover, description: "Main Auditorium Venue Partner",link:`https://www.cognavi.com/` },
    // { name: "Mayavarta", photo: mayavarta, description: "Merchandise & AnC Arena Partner",link:`https://www.cognavi.com/` },
    // { name: "Decathlon Play", photo: decathlon, description: "Official Ticketing Sponsor",link:`https://www.cognavi.com/` },
    // { name: "EaseMyTrip", photo: easemytrip, description:"Official Travel Partner",link:`https://www.cognavi.com/` },
    // { name: "Ziblot", photo: ziblot, description: "Street Arena Partner",link:`https://www.cognavi.com/` },
    // { name: "Vardi", photo: vardi, description: "Patriotic Apparel Partner",link:`https://www.cognavi.com/` },
    // { name: "TransGlobe", photo: transglobe, description: "Education Partner",link:`https://www.cognavi.com/` },
    // { name: "Tork Motors", photo: tork, description: "Official EV Partner",link:`https://www.cognavi.com/` },
    // { name: "Boom Panda", photo: boompanda, description: "Student Community Partner",link:`https://www.cognavi.com/` },
    // { name: "Self Pivot", photo: self_pivot, description: "Mental Health Partner",link:`https://www.cognavi.com/` },
    // { name: "Beards-&-Shears", photo: beards, description: "Official Grooming Partner",link:`https://www.cognavi.com/` },
    // { name: "Adonis Sterling", photo: adonis, description: "Official Accessories Partner",link:`https://www.cognavi.com/` },
    // { name: "Beautifier Bauble", photo: beautfiulier, description: "Official Jewellary Partner" ,link:`https://www.cognavi.com/`},
    // { name: "Kiah", photo: kiah, description: "Advertising Partner",link:`https://www.cognavi.com/` },
    // { name: "Internship Studio", photo: internship, description: "Internship Partner",link:`https://www.cognavi.com/` }
],
  "Media Partners": [
    // { name: "ABP Majha", photo: abpmajha, description: "News Channel Partner",link:`https://www.cognavi.com/` },
    // { name: "InShorts", photo: inshorts, description: "Media Partner",link:`https://www.cognavi.com/` },
    // { name: "Campus Times", photo: campustimes, description: "Online Media Partner",link:`https://www.cognavi.com/` },
    // { name: "Pune SHOR", photo: puneshor, description: "Social Media Outreach",link:`https://www.cognavi.com/` },
    // { name: "Pune Smart City", photo: punesmart, description: "",link:`https://www.cognavi.com/` },
    // { name: "Punekar News", photo: punekar, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
    // { name: "Navabharat", photo: navabharat, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
    // { name: "RasthraSanchar", photo: rashtrasanchar, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
    // { name: "Sach Kahun", photo: sachkahun, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
    // { name: "Youth Incorporated", photo: youth_incorporated, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
    // { name: "ED Times", photo: ed, description: "Media Coverage Partner",link:`https://www.cognavi.com/` },
],
  "Food Sponsors": [
    { name: "Desir", photo: Desir, description: "Desserts Partner",link:`https://www.cognavi.com/` },
    { name: "Cubanos", photo: cubanos, description: "Food and Beverages Partner",link:`https://www.cognavi.com/` },
    { name: "Atrangi Manas", photo: atrangi, description: "Ice Cream Partner",link:`https://www.cognavi.com/` },
    { name: "Momo Nation Cafe", photo: momo, description: "Momo Partner",link:`https://www.cognavi.com/` },
    { name: "Cubanos", photo: cubanos, description: "Food and Beverages Partner",link:`https://www.cognavi.com/` },
    { name: "Noodle+", photo: noodle , description: "Noodles Partner",link:`https://www.cognavi.com/` },
    { name: "Potato Twister's", photo: potato, description: "Potato Twister Partner",link:`https://www.cognavi.com/` },
    { name: "Abhiniks Kitchen", photo: abhiniks, description: "Snacks Partner",link:`https://www.cognavi.com/` },
  ],
  "Other Sponsors": [
    // { name: "Escents", photo: escents, description: "Miscellaneous" ,link:`https://www.cognavi.com/`},
    // { name: "Bringer", photo: bringer, description: "Miscellaneous",link:`https://www.cognavi.com/` },
    // { name: "TruScholar", photo: truscholar, description: "Miscellaneous" ,link:`https://www.cognavi.com/`},
    // { name: "Gyandhan", photo: gyandhan, description: "Miscellaneous",link:`https://www.cognavi.com/` },
    // { name: "Meowdy Boys", photo: meowdy, description: "Miscellaneous",link:`https://www.cognavi.com/` },
  ],
};

const Sponsors = () => {
  return (
    <div className="w-full min-h-screen bg-blue-900 p-8 flex items-center justify-center">
      <div className=" p-4 rounded-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-black tracking-wide">
  SPONSORS
</h2>        {Object.entries(sponsorsData).map(([category, sponsors], categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <h3 className="text-3xl font-bold text-center mb-4 text-">{category}</h3>
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
