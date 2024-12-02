import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import image1 from '../images/memories/5.webp';
import image2 from '../images/memories/6.webp';
import image3 from '../images/memories/7.webp';
import image4 from '../images/memories/8.webp';
import image5 from '../images/memories/sabali7.webp';
import { Link } from 'react-router-dom';
// import Cleo from '../images/Cleo.png'

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const cleoRef = useRef(null);


  const events = [
    {
      header: "Music",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#33FF57' }
    },
    {
      header: "Arts & Craft",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#FF5733' }
    },
    {
      header: "Abhinay",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#FFC300' }
    },
    {
      header: "Dance",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#FFDD00' }
    },
    {
      header: "Shoutout",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#FFDD00' }
    },
    {
      header: "Camera",
      description: "Explore the first event of the series.",
      imageUrl: image1,
      buttonText: "Discover More",
      style: { borderRadius: '15px' },
      headerStyle: { backgroundColor: '#FFDD00' }
    }
  ];

  useGSAP(() => {
    const cleoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 25%",
        end: "+=2000", // Increased duration
        scrub: true,
      }
    });

    cleoTimeline
      .to(cleoRef.current, {
        y: '-80%',
        scale: 1.2,
        duration: 1,
        rotation: 10,
      })
    // .to(cleoRef.current, {
    //   y: '0%',
    //   scale: 1,
    //   duration: 1,
    //   rotation: 0,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 25%",
        end: "+=3000", // Shortened duration for smoother scrolling
        scrub: 0.5,    // Smoother scrubbing
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
      // const rotationAngle = (idx % 2 === 0 ? 1.25 : -1.25) * (idx + 1);
      if (idx === 0) {
        tl.to(`.card-${idx + 1}`, {
          scaleX: 0.85,
          y: '0',
          duration: 1.5,
          ease: "power2.inOut"
        })
          .to(`.card-${idx + 1} img`, {
            scale: 1.15,  // Compensate for card scale
          }, '<')
          .to(`.card-${idx + 1} h2`, {
            scale: 1.15,
          }, '<')
          .to(`.card-${idx + 1} .content`, {
            opacity: 1,
            y: 0,
            duration: 0.5
          }, '<');
      } else {
        tl.to(`.card-${idx + 1}`, {
          y: idx * 25,
          scaleX: 0.85 + (idx * 0.05),
          duration: 1.5,
          ease: "power2.inOut"
        })
          .to(`.card-${idx + 1}`, {
            scaleX: 0.85 + (idx * 0.05),
          })
          .to(`.card-${idx + 1} img`, {
            scale: 1 / (0.85 + (idx * 0.05)),  // Inverse scale to maintain image proportion
          }, '<')
          .to(`.card-${idx + 1} h2`, {
            scale: 1 / (0.85 + (idx * 0.05)),
          }, '<')
          .to(`.card-${idx + 1} .content`, {
           opacity: 1,
            y: 0,
            duration: 0.5
          }, '<');
      }
    });

  }, { scope: containerRef });

  return (
    <div className="w-full" ref={containerRef}>
      <section className="overflow-hidden">
        <h2 className="mb-10 text-4xl font-bold tracking-tight text-center text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Past Events
          </span>
        </h2>
        <div className="max-w-[1200px] w-full mx-auto relative overflow-hidden px-4 p-[300px]">
          <ul className="min-h-[400px] m-0 p-0 list-none relative" ref={cardsRef}>
            {/* <img ref={cleoRef} src={Cleo} alt="" className='-z-1 absolute bottom-0 right-0 md:right-20 h-[18em]'/> */}
            {events.map((event, idx) => (
              <li
                key={event.id}
                className={`card-${idx + 1} w-[90%] h-full absolute top-0 left-[50%] -translate-x-1/2 
                  overflow-hidden rounded-[30px] shadow-2xl
                  transform transition-transform duration-300 hover:scale-[1.02]
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-gradient-to-t before:from-black/80 before:to-transparent before:z-10`}
                style={{ zIndex: idx + 1 }}
              >
                <img 
                  src={image1} 
                  alt="" 
                  className='absolute object-cover w-full h-full transition-transform duration-700 hover:scale-110'
                />
                <div className='relative z-20 flex flex-col items-center justify-center h-full gap-4 transform translate-y-10 opacity-0 content'>
                  <h2 className="text-3xl font-bold text-center text-white md:text-4xl drop-shadow-lg">
                    {event.header}
                  </h2>
                  <p className="max-w-md px-4 text-base text-center md:text-lg text-white/90">
                    {event.description}
                  </p>
                  <Link 
                    to={`/events/${encodeURIComponent(event.header)}`}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-black transition-all duration-300 transform bg-white rounded-full group hover:bg-opacity-90 hover:scale-105 hover:shadow-lg"
                  >
                    Explore Event
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ScrollCards;