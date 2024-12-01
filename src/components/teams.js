// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import './teams.css';

// const Card = ({ dataImage, header, content }) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const cardRef = useRef(null);
//   const mouseLeaveDelay = useRef(null);

//   useEffect(() => {
//     const cardElement = cardRef.current;
//     if (cardElement) {
//       setDimensions({
//         width: cardElement.offsetWidth,
//         height: cardElement.offsetHeight,
//       });
//     }
//   }, []);

//   const handleMouseMove = (e) => {
//     const { offsetLeft, offsetTop } = cardRef.current;
//     const mouseX = e.pageX - offsetLeft - dimensions.width / 2;
//     const mouseY = e.pageY - offsetTop - dimensions.height / 2;

//     // Use GSAP to animate the rotation
//     gsap.to(cardRef.current, {
//       rotationY: mouseX * 0.075,
//       rotationX: -mouseY * 0.075,
//       duration: 0.3,
//       overwrite: true,
//     });
//   };

//   const handleMouseLeave = () => {
//     clearTimeout(mouseLeaveDelay.current);
//     mouseLeaveDelay.current = setTimeout(() => {
//       // Reset rotation on mouse leave
//       gsap.to(cardRef.current, {
//         rotationY: 0,
//         rotationX: 0,
//         duration: 0.5,
//       });
//     }, 1000);
//   };

//   return (
//     <div
//       className="card-wrap"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       ref={cardRef}
//     >
//       <div className="card">
//         <div className="card-bg" style={{ backgroundImage: `url(${dataImage})` }}></div>
//         <div className="card-info">
//           <h1>{header}</h1>
//           <p>{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Teams = () => {
//   const sec = [
//     {
//       image: './images/AnishJagtap.jpg',
//       header: 'Anish Jagtap',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     },
//     {
//       image: './images/AryanMaria.jpg',
//       header: 'Aryan Maria',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     }
//   ];

//   return (
//     <div className="container">
//         <h1 className="title">SECRETARY</h1>
//         <div id="app">
//             {sec.map((card, index) => (
//             <Card
//                 key={index}
//                 dataImage={card.image}
//                 header={card.header}
//                 content={card.content}
//             />
//             ))}
//         </div>

//         {/* Add other sections as needed */}
        
//     </div>
//   );
// };

// export default Teams;








import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './teams.css'; // You can keep this if you have any additional styles

const Card = ({ dataImage, header, content }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);
  const mouseLeaveDelay = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      setDimensions({
        width: cardElement.offsetWidth,
        height: cardElement.offsetHeight,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = cardRef.current;
    const mouseX = e.pageX - offsetLeft - dimensions.width / 2;
    const mouseY = e.pageY - offsetTop - dimensions.height / 2;

    // Use GSAP to animate the rotation
    gsap.to(cardRef.current, {
      rotationY: mouseX * 0.075,
      rotationX: -mouseY * 0.075,
      duration: 0.3,
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    clearTimeout(mouseLeaveDelay.current);
    mouseLeaveDelay.current = setTimeout(() => {
      // Reset rotation on mouse leave
      gsap.to(cardRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
      });
    }, 1000);
  };

  return (
    <div
      className="card-wrap perspective-800 flex justify-center items-center cursor-pointer m-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card relative flex flex-col w-full h-full bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ease-in-out">
        <div
          className="card-bg absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 transition-opacity duration-300 ease-in-out"
          style={{ backgroundImage: `url(${dataImage})` }}
        ></div>
        <div className="card-info absolute bottom-0 p-5 text-white transform translate-y-10 transition-transform duration-600 ease-in-out">
          <h1 className="text-4xl font-bold text-shadow">{header}</h1>
          <p className="opacity-0 transition-opacity duration-600 ease-in-out">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const sec = [
    {
      image: './images/AnishJagtap.jpg',
      header: 'Anish Jagtap',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      image: './images/AryanMaria.jpg',
      header: 'Aryan Maria',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }
  ];


  

  return (
    <div className="container mx-auto p-10 flex flex-col items-center gap-5">
        <h1 className="title text-center text-3xl font-bold text-brown-700">SECRETARY</h1>
        <div id="app" className="flex gap-10 mb-52 justify-center">
            {sec.map((card, index) => (
            <Card
                key={index}
                dataImage={card.image}
                header={card.header}
                content={card.content}
            />
            ))}
        </div>

        {/* Add other sections as needed */}
        
    </div>
  );
};

export default Teams;