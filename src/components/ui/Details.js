import React from 'react';
// import { Phone, Mail } from 'lucide-react';
import { Phone} from 'lucide-react';
// import { Link } from 'react-router-dom';

const portfolios = [
    {
      title: "ACCOUNTS",
      description: "From budget establishment to meticulous audits, we exercise complete control over festival finances. Our oversight extends to every Impressions transaction, ensuring a seamless and transparent financial flow.",
      contacts: [
        // { name: "Anuja Bhagwat", phone: "82085 36352" },
        // { name: "Atharva Dhokane", phone: "82377 82369" }
      ]
    },
    {
      title: "CORPORATE OUTREACH GROUP (COG)",
      description: "Elevate your communication and networking prowess within the portfolio, engaging effectively with corporate world thereby roll in money from the alumni network for the fest. Tap into the invaluable support of our impressive alumni network who contribute significantly to the success of Impressions.",
      contacts: [
        // { name: "Apurva Haspe", phone: "93216 28078" },
        // { name: "Dhiraj Murmude", phone: "93733 95977" }
      ]
    },
    {
      title: "DECOR",
      description: "Armed with a brush and palette, infuse every Impressions event with your unique creativity, turning the campus into a captivating masterpiece. Let your creativity be the guiding force, illuminating each event with innovative ideas that leave a lasting and inspiring impression.",
      contacts: [
        // { name: "Pratod Daware", phone: "90968 29925" },
        // { name: "Sakshi Nikam", phone: "95299 42163" }
      ]
    },
    {
      title: "DOCUMENTATION",
      description: "Transform your words into powerful tools, meticulously refined and tailored for every Impressions letter, email, or speech. Infuse your crafted messages with strategic intent, ensuring they resonate deeply with the intended audience and effectively represent the essence of Impressions.",
      contacts: [
        // { name: "Avani Shah", phone: "74105 39520" },
        // { name: "Sudhanshu Vaishampayan", phone: "82752 82356" }
      ]
    },
    {
      title: "EVENTS & PROSHOWS (EnP)",
      description: "Envision, strategize, and immerse yourself in every Impressions event, crafting a portfolio that serves as the foundation of our festival's success. Become the driving force behind each event, shaping its concept, execution, and impact, as you breathe life into Impressions' vibrant experiences.",
      contacts: [
        // { name: "Ishwari Thatte", phone: "86250 58398" },
        // { name: "Pranjali Jadhav", phone: "81491 01637" },
        // { name: "Shaunak Deshpande", phone: "91759 32409" },
        // { name: "Simran Veer", phone: "72628 43661" }
      ]
    },
    {
      title: "FINANCE & SPONSORSHIPS",
      description: "Transform into a financial tycoon and reap the rewards of lucrative sponsorship deals worth lakhs. If you're driven by a business passion, we provide the perfect guidance and platform to channel your ambitions and thrive.",
      contacts: [
        // { name: "Janhavi Kulkarni", phone: "75177 69868" },
        // { name: "Yadnesh Shastri", phone: "91463 85925" }
      ]
    },
    {
      title: "GRAPHIC DESIGN",
      description: "Embrace the art of graphic design through our dedicated portfolio, honing your skills to perfection. Unleash your creations across social media platforms, allowing your designs to traverse the digital landscape and amplify the impact of Impressions.",
      contacts: [
        // { name: "Ashlesha Deokate", phone: "84217 33805" },
        // { name: "Prasad Patil", phone: "88796 01912" }
      ]
    },
    {
      title: "MARKETING",
      description: "Seamlessly fulfill sponsor commitments while establishing a compelling fest image through meticulous execution. Unleash your creativity in strategizing impactful campaigns. Harness the power of social platforms, crafting a captivating fest image that resonates with a global audience and leaves an indelible mark.",
      contacts: [
        // { name: "Aishwarya Pillai", phone: "99223 79763" },
        // { name: "Pushkar Ugale", phone: "92093 30184" }
      ]
    },
    {
      title: "MEDIA",
      description: "Leverage media sponsors, captivating videos, and compelling captions to transform Impressions' social media platforms within our media portfolio. Enhance online identity for Impressions, making it shine in the dynamic digital landscape through a comprehensive media portfolio.",
      contacts: [
        // { name: "Chetan Patil", phone: "77190 52221" },
        // { name: "Vedant Wadgaonkar", phone: "97639 33599" }
      ]
    },
    {
      title: "PRINT & PURCHASE (PnP)",
      description: "PnP excels in bargaining for optimal deals, ensuring the best value for Impressions. Serving as the nerve center, PnP adeptly manages purchases, contributing crucially to Impressions' success.",
      contacts: [
        // { name: "Debapriya Panchadhyayee", phone: "91581 84033" },
        // { name: "Vedang Talekar", phone: "91370 07498" }
      ]
    },
    {
      title: "PRODUCTION",
      description: "Illuminate the path for Impressions with a comprehensive portfolio, meticulously arranging every technical aspect from lights and cameras to sound and action. Ensure a flawless stage setup by anticipating and fulfilling all technical requirements, creating an immersive experience that enhances the impact of every event.",
      contacts: [
        // { name: "Medha Badugu", phone: "88302 47934" },
        // { name: "Nishant Sahasrabuddhe", phone: "77966 98502" }
      ]
    },
    {
      title: "PUBLICITY & REGISTRATION (PR)",
      description: "Dive into the world of publicity and registration, forging new connections, friendships, and cherished memories. Extend your network, branch out, and engage with every participant, ensuring Impressions' wide-reaching impact and visibility across diverse audiences.",
      contacts: [
        // { name: "Utkarsha Gore", phone: "81499 57599" },
        // { name: "Varad Joshi", phone: "82377 12970" }
      ]
    },
    {
      title: "VFX",
      description: "Showcase a diverse range of visually stunning VFX projects that demonstrate technical expertise and creative prowess within our VFX portfolio. Highlight the seamless fusion of imagination and technology through impactful before-and-after visuals, reflecting our commitment to delivering exceptional visual effects.",
      contacts: [
        // { name: "Prathamesh Dhomse", phone: "82911 90866" },
        // { name: "Vedant Patil", phone: "77670 85690" }
      ]
    },
    {
      title: "WEB",
      description: "Establish and uphold the digital presence of the comprehensive Impressions website, serving as the central hub for all things related to the event, year-round. Curate and manage a user-friendly platform that seamlessly houses all aspects of Impressions, providing easy access to information, updates, and resources for a cohesive experience.",
      contacts: [
        // { name: "Abhishek Shinde", phone: "70578 70097" },
        // { name: "Arsh Maknojia", phone: "88503 67659" }
      ]
    }
  ];

  const PortfolioCard = ({ title, description, contacts }) => (
    <div className="p-4 mb-4 transition-all duration-300 transform bg-white rounded-lg shadow-md sm:p-6 hover:shadow-lg hover:-translate-y-1">
      <h3 className="mb-3 text-lg font-bold text-red-500 sm:text-xl line-clamp-2">{title}</h3>
      <p className="mb-4 text-sm text-gray-600 sm:text-base line-clamp-4 hover:line-clamp-none">{description}</p>
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center text-xs text-gray-500 sm:text-sm hover:text-indigo-500">
            <Phone size={14} className="flex-shrink-0 mr-2" />
            <span className="break-all">{contact.name}: {contact.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  const ImpressionsEvent = () => (
    <div className="min-h-screen px-4 py-6 sm:py-10 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="p-4 mb-6 bg-white rounded-lg shadow-md sm:p-6 sm:mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">Event Details</h2>
          <div className="space-y-2 text-sm text-gray-600 sm:text-base">
            <p className="flex items-center"><span className="mr-2">📅</span> Dates: 4th & 5th December</p>
            <p className="flex items-center"><span className="mr-2">⏰</span> Timing: TBD</p>
            <p className="flex items-center"><span className="mr-2">📍</span> Venue: TBD</p>
            {/* <p className="flex items-center"><span className="mr-2">⚠️</span> Deadline: 23rd October, 11 a.m.</p> */}
          </div>
        </div>
  
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} />
          ))}
        </div>
  
        {/* <div className="mt-6 sm:mt-8">
          <div className="p-4 bg-white rounded-lg shadow-md sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">Contact Leadership</h3>
            <div className="space-y-2 text-sm text-gray-600 sm:text-base">
              <p className="transition-colors hover:text-indigo-500">Secretary: Chetan Patil (77190 52221)</p>
              <p className="transition-colors hover:text-indigo-500">Joint Secretary: Dhiraj Murmude (93733 95977)</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
  
export default ImpressionsEvent;
