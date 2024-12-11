// import React from "react";
// import "./Modules.css";

// function Modules() {
//     return(
//         <div>
//             <div class="body">
//                 <section>
//                     <section class="parallax-1">
//                         <div class="parallax-inner">
//                             <h1>Music</h1>
//                             <button>Events</button>
//                         </div>
//                 </section>
//                 <section class="parallax-2">
//                     <div class="parallax-inner">
//                         <h1>Dance</h1>
//                         <button>Events</button>
//                     </div>
//                 </section>
//                 <section class="parallax-3">
//                     <div class="parallax-inner">
//                         <h1>Arts & Craft</h1>
//                         <button>Events</button>
//                     </div>
//              </section>
//                 </section>
//             </div>
//         </div>
//     );
// }
// export default Modules;

import React from "react";
import { Link } from 'react-router-dom';
import "./Modules.css";
import Navbar from "./Navbar";

function Modules() {
    const modules = [
        {
            title: "Music",
            route: "/events/Music",
            textAlign: "text-left",
            bgClass: "bg-parallax-1"
        },
        {
            title: "Dance",
            route: "/events/Dance",
            textAlign: "text-right",
            bgClass: "bg-parallax-2",
            buttonClass: "lg:ml-[1300px] sm:ml-[0px]"
        },
        {
            title: "Arts & Craft",
            route: "/events/Arts&Craft",
            textAlign: "text-left",
            bgClass: "bg-parallax-3"
        },
        {
            title: "Camera",
            route: "/events/Camera",
            textAlign: "text-right",
            bgClass: "bg-parallax-4",
            buttonClass: "lg:ml-[1300px] sm:ml-[0px]"
        },
        {
            title: "Shoutout",
            route: "/events/Shoutout",
            textAlign: "text-left",
            bgClass: "bg-parallax-5"
        },
        {
            title: "Abhinay",
            route: "/events/Abhinay",
            textAlign: "text-right",
            bgClass: "bg-parallax-6",
            buttonClass: "lg:ml-[1300px] sm:ml-[0px]"
        }
    ];

    return (
        <div className="box-border p-0 m-0 overflow-x-hidden font-sans bg-gray-200 scroll-sti">
            <Navbar color={"black/50"} fixed={"fixed"}/>
            <section class="module">
                {modules.map((module, index) => (
                    <section 
                        key={module.title} 
                        className={`flex items-center w-screen min-h-screen bg-fixed bg-center bg-cover ${module.bgClass}`}
                    >
                        <div className={`w-full px-10 py-[10%] ${module.textAlign === 'text-right' ? 'text-right' : 'text-left'}`}>
                            <h1 className={`${module.textAlign} text-6xl text-white sm:text-7xl lg:text-8xl text-overlay font-bold drop-shadow-lg`}>
                                {module.title}
                            </h1>
                            <button 
                                className={`
                                    mt-4 px-6 py-3 text-white 
                                    bg-blue-600 border-none rounded-lg 
                                    hover:bg-blue-800 transition-colors duration-300 
                                    shadow-md hover:shadow-lg 
                                    ${module.buttonClass || ''}
                                `}
                            >
                                <Link
                                    to={module.route}
                                    className="font-semibold tracking-wider text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                ))}
            </section>
        </div>
    );
}

export default Modules;