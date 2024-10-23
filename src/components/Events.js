// import { useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import image1 from '../images/memories/5.webp';
// import image2 from '../images/memories/6.webp';
// import image3 from '../images/memories/7.webp';
// import image4 from '../images/memories/8.webp';
// import image5 from '../images/memories/sabali7.webp';

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollCards() {
//   const containerRef = useRef(null);
//   const cardsRef = useRef(null);
  
//   const events = [
//     {
//       "id": "SW",
//       "title": "Swa(g)Desi",
//       "description": "A high-energy Bollywood group dance competition showcasing choreography and cultural expression",
//       image: image1
//     },
//     {
//       "id": "HC",
//       "title": "High Current",
//       "description": "A battle of bands competition featuring live performances with diverse musical instruments and original compositions",
//       image: image2
//     },
//     {
//       "id": "PO",
//       "title": "Poona-०५",
//       "description": "A dynamic rap competition featuring freestyle performances and knockout battles between emerging artists",
//       image: image3
//     },
//     {
//       "id": "KK",
//       "title": "ComiKing",
//       "description": "A stand-up comedy competition celebrating original humor in Hindi, English, or Marathi",
//       image: image4
//     },
//     {
//       "id": "SV",
//       "title": "Saavani",
//       "description": "A solo singing competition focused on English songs across multiple rounds of performance",
//       image: image5
//     },
//   ];

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top 25%",
//         end: "+=4000",
//         scrub: true,
//         pin: true,
//       }
//     });

//     // Reset any existing animations
//     events.forEach((_, idx) => {
//       gsap.set(`.card-${idx + 1}`, { clearProps: "all" });
//     });

//     // Set initial states for all cards
//     events.forEach((_, idx) => {
//       if (idx === 0) {
//         tl.set(`.card-${idx + 1}`, {
//           scaleX: 0.95,
//           y: '0',
//         }, 'start');
//       } else {
//         tl.set(`.card-${idx + 1}`, {
//           scaleX: 0.95 + (idx * 0.05),
//           y: '400%',
//         }, 'start');
//       }
//     });

//     // Create animations for all cards
//     events.forEach((_, idx) => {
//       const rotationAngle = (idx % 2 === 0 ? 1.25 : -1.25) * (idx + 1);
//       if (idx === 0) {
//       tl.to(`.card-${idx + 1}`, {
//         scaleX: 0.85,
//         y: '0',
//         rotation: rotationAngle,
//       });
//       } else {
//       tl.to(`.card-${idx + 1}`, {
//         y: idx * 20,
//         rotation: rotationAngle,
//       }).to(`.card-${idx + 1}`, {
//         scaleX: 0.85 + (idx * 0.05),
//       });
//       }
//     });

//   }, { scope: containerRef });

//   return (
//     <div className="w-full" ref={containerRef}>
//       <section className="overflow-hidden">
//         <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">Our Past Events</h2>
//         <div className="max-w-[1200px] w-full mx-auto relative overflow-hidden px-4 pb-[300px]">
//           <ul className="min-h-[400px] m-0 p-0 list-none relative" ref={cardsRef}>
//             {events.map((event, idx) => (
//               <li 
//                 key={event.id}
//                 className={`overflow-hidden card-${idx + 1} w-[90%] h-full absolute top-0 left-[50%] -translate-x-1/2 rounded-[30px] 
//                   ${idx % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-800'}
//                   flex flex-col items-center justify-center cursor-pointer
//                   transition-colors duration-300 hover:bg-neutral-700`}
//                 style={{ zIndex: idx + 1 }}
//               >
//                 <img src={event.image} alt="" className='z-[-1] absolute object-cover w-full h-full brightness-50'/>
//                 <h2 className="text-3xl font-bold text-white">{event.title}</h2>
//                 {/* <p className="text-lg text-neutral-400">{event.description}</p> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import image1 from '../images/memories/5.webp';
import image2 from '../images/memories/6.webp';
import image3 from '../images/memories/7.webp';
import image4 from '../images/memories/8.webp';
import image5 from '../images/memories/sabali7.webp';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  
  const events = [
    {
      "id": "SW",
      "title": "Swa(g)Desi",
      "description": "A high-energy Bollywood group dance competition showcasing choreography and cultural expression",
      image: image1
    },
    {
      "id": "HC",
      "title": "High Current",
      "description": "A battle of bands competition featuring live performances with diverse musical instruments and original compositions",
      image: image2
    },
    {
      "id": "PO",
      "title": "Poona-०५",
      "description": "A dynamic rap competition featuring freestyle performances and knockout battles between emerging artists",
      image: image3
    },
    {
      "id": "KK",
      "title": "ComiKing",
      "description": "A stand-up comedy competition celebrating original humor in Hindi, English, or Marathi",
      image: image4
    },
    {
      "id": "SV",
      "title": "Saavani",
      "description": "A solo singing competition focused on English songs across multiple rounds of performance",
      image: image5
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 25%",
        end: "+=4000",
        scrub: true,
        pin: true,
      }
    });

    // Reset any existing animations
    events.forEach((_, idx) => {
      gsap.set(`.card-${idx + 1}`, { clearProps: "all" });
      gsap.set(`.card-${idx + 1} img`, { clearProps: "all" });
      gsap.set(`.card-${idx + 1} h2`, { clearProps: "all" });
    });

    // Set initial states for all cards
    events.forEach((_, idx) => {
      if (idx === 0) {
        tl.set(`.card-${idx + 1}`, {
          scaleX: 0.95,
          y: '0',
        }, 'start');
        tl.set(`.card-${idx + 1} img`, {
          scale: 1.05,  // Slightly larger to counter the card scale
        }, 'start');
        tl.set(`.card-${idx + 1} h2`, {
          scale: 1.05,
        }, 'start');
      } else {
        tl.set(`.card-${idx + 1}`, {
          scaleX: 0.95 + (idx * 0.05),
          y: '400%',
        }, 'start');
        tl.set(`.card-${idx + 1} img`, {
          scale: 1 / (0.95 + (idx * 0.05)),  // Inverse scale to maintain image proportion
        }, 'start');
        tl.set(`.card-${idx + 1} h2`, {
          scale: 1 / (0.95 + (idx * 0.05)),
        }, 'start');
      }
    });

    // Create animations for all cards
    events.forEach((_, idx) => {
      const rotationAngle = (idx % 2 === 0 ? 1.25 : -1.25) * (idx + 1);
      if (idx === 0) {
        tl.to(`.card-${idx + 1}`, {
          scaleX: 0.85,
          y: '0',
          // rotation: rotationAngle,
        })
        .to(`.card-${idx + 1} img`, {
          scale: 1.15,  // Compensate for card scale
        }, '<')
        .to(`.card-${idx + 1} h2`, {
          scale: 1.15,
        }, '<');
      } else {
        tl.to(`.card-${idx + 1}`, {
          y: idx * 20,
          // rotation: rotationAngle,
        })
        .to(`.card-${idx + 1}`, {
          scaleX: 0.85 + (idx * 0.05),
        })
        .to(`.card-${idx + 1} img`, {
          scale: 1 / (0.85 + (idx * 0.05)),  // Inverse scale to maintain image proportion
        }, '<')
        .to(`.card-${idx + 1} h2`, {
          scale: 1 / (0.85 + (idx * 0.05)),
        }, '<');
      }
    });

  }, { scope: containerRef });

  return (
    <div className="w-full" ref={containerRef}>
       <section className="overflow-hidden">
         <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">Our Past Events</h2>
         <div className="max-w-[1200px] w-full mx-auto relative overflow-hidden px-4 pb-[300px]">
           <ul className="min-h-[400px] m-0 p-0 list-none relative" ref={cardsRef}>
             {events.map((event, idx) => (
               <li 
                 key={event.id}
                 className={`overflow-hidden card-${idx + 1} w-[90%] h-full absolute top-0 left-[50%] -translate-x-1/2 rounded-[30px] 
                   ${idx % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-800'}
                   flex flex-col items-center justify-center cursor-pointer
                   transition-colors duration-300 hover:bg-neutral-700`}
                 style={{ zIndex: idx + 1 }}
               >
                 <img src={event.image} alt="" className='z-[-1] absolute object-cover w-full h-full brightness-50'/>
                 <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                 {/* <p className="text-lg text-neutral-400">{event.description}</p> */}
               </li>
             ))}
           </ul>
         </div>
       </section>
     </div>
  );
}