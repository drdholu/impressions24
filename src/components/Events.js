// // import React, { useState } from 'react';
// import React from 'react';
// // import { X } from 'lucide-react';

// const EventCard = ({ event, onClick }) => (
//   <div 
//     className="p-6 transition-colors border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
//     onClick={onClick}
//   >
//     <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
//     <p className="text-gray-600">{event.description}</p>
//   </div>
// );

// // const EventModal = ({ event, onClose, open }) => {
// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
// //       <div className="relative w-full max-w-md p-6 bg-white rounded-lg">
// //         <button
// //           onClick={onClose}
// //           className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
// //         >
// //           <X size={20} />
// //         </button>
// //         <h2 className="mb-4 text-2xl font-semibold">{event.title}</h2>
// //         <p className="mb-6 text-gray-600">{event.description}</p>
// //         <button
// //           onClick={onClose}
// //           className="w-full px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// const Events = () => {
//   // const [selectedEvent, setSelectedEvent] = useState(null);

//   const events = [
//     {
//       "id": "SW",
//       "title": "Swa(g)Desi",
//       "description": "A high-energy Bollywood group dance competition showcasing choreography and cultural expression"
//     },
//     {
//       "id": "HC",
//       "title": "High Current",
//       "description": "A battle of bands competition featuring live performances with diverse musical instruments and original compositions"
//     },
//     {
//       "id": "PO",
//       "title": "Poona-०५",
//       "description": "A dynamic rap competition featuring freestyle performances and knockout battles between emerging artists"
//     },
//     {
//       "id": "KK",
//       "title": "ComiKing",
//       "description": "A stand-up comedy competition celebrating original humor in Hindi, English, or Marathi"
//     },
//     {
//       "id": "SVwest",
//       "title": "Saavani Western",
//       "description": "A solo singing competition focused on English songs across multiple rounds of performance"
//     },
//     {
//       "id": "SVbolly",
//       "title": "Saavani Bollywood",
//       "description": "A solo singing competition featuring Hindi and Marathi songs from Bollywood"
//     },
//     {
//       "id": "SVclassic",
//       "title": "Saavani Classical",
//       "description": "A solo singing competition celebrating Indian classical music traditions"
//     }
//   ]

//   return (
//     <div id="events" className="px-4 py-16 mx-auto max-w-7xl">
//       <h2 className="mb-8 text-3xl font-bold text-center">Our Past Events</h2>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//         {events.map((event) => (
//           <EventCard 
//             key={event.id} 
//             event={event} 
//             // onClick={() => setSelectedEvent(event)} 
//           />
//         ))}
//       </div>
//       {/* <EventModal 
//         event={selectedEvent} 
//         onClose={() => setSelectedEvent(null)}
//         open={!!selectedEvent}
//       /> */}
//     </div>
//   );
// };

// export default Events;

import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  //   const events = [
  //   {
  //     "id": "SW",
  //     "title": "Swa(g)Desi",
  //     "description": "A high-energy Bollywood group dance competition showcasing choreography and cultural expression"
  //   },
  //   {
  //     "id": "HC",
  //     "title": "High Current",
  //     "description": "A battle of bands competition featuring live performances with diverse musical instruments and original compositions"
  //   },
  //   {
  //     "id": "PO",
  //     "title": "Poona-०५",
  //     "description": "A dynamic rap competition featuring freestyle performances and knockout battles between emerging artists"
  //   },
  //   {
  //     "id": "KK",
  //     "title": "ComiKing",
  //     "description": "A stand-up comedy competition celebrating original humor in Hindi, English, or Marathi"
  //   },
  //   {
  //     "id": "SVwest",
  //     "title": "Saavani Western",
  //     "description": "A solo singing competition focused on English songs across multiple rounds of performance"
  //   },
  //   {
  //     "id": "SVbolly",
  //     "title": "Saavani Bollywood",
  //     "description": "A solo singing competition featuring Hindi and Marathi songs from Bollywood"
  //   },
  //   {
  //     "id": "SVclassic",
  //     "title": "Saavani Classical",
  //     "description": "A solo singing competition celebrating Indian classical music traditions"
  //   }
  // ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 25%",
        end: "+=4000",
        scrub: true,
        pin: true,
        // markers: true
      }
    });

    // Initial states
    tl.set('.card-1', {
      scaleX: 0.95,
      y: '0',
    }, 'start');
    tl.set('.card-2', {
      scaleX: 1,
      y: '400%',
    }, 'start');
    tl.set('.card-3', {
      scaleX: 1.05,
      y: '400%',
    }, 'start');
    tl.set('.card-4', {
      scaleX: 1.1,
      y: '400%',
    }, 'start');

    // Animations
    tl.to('.card-1', {
      scaleX: 0.85,
      y: '0',
    });
    tl.to('.card-2', {
      y: '20',
    }).to('.card-2', {
      scaleX: 0.9,
    });
    tl.to('.card-3', {
      y: '40',
    }).to('.card-3', {
      scaleX: 0.95,
    });
    tl.to('.card-4', {
      y: '60',
    }).to('.card-4', {
      scaleX: 1,
    });
  }, { scope: containerRef });

  return (
    <div className="w-full" ref={containerRef}>
      {/* <div className="bg-gray-100 "></div> */}
      <section className="overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden py-[300px]">
          <ul className="min-h-[400px] m-0 p-0 list-none" ref={cardsRef}>
            {[1, 2, 3, 4].map((num) => (
              <li 
              key={num}
              className={`card-${num} w-[90%] h-full absolute top-0 left-[50%] translate-x-[-50%] rounded-[30px] 
                ${num % 2 === 0 ? 'bg-black' : 'bg-gray-300'}`}
              style={{ zIndex: num }}
              />
            ))}
          </ul>
        </div>
      </section>
      {/* <div className="h-screen bg-gray-100"></div> */}
    </div>
  );
}