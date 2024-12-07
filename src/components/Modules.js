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

function Modules() {
    return (
        <div>
            <div className="box-border p-0 m-0 overflow-x-hidden bg-gray-200 font-poppins">
                <section>
                    <section class="parallax-1" className="flex items-center w-screen min-h-screen bg-fixed bg-center bg-cover bg-parallax-1">
                        <div class="parallax-inner" className="px-10 py-[10%]">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-left text-overlay text-white">Music</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700">
                                <Link
                                    to={`/events/Music`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                    <section class="parallax-2" className="bg-parallax-2 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        <div className="px-10 py-[10%] text-right sm:text-left">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-right text-overlay text-white">Dance</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 lg:ml-[1300px] sm:ml-[0px]">
                                <Link
                                    to={`/events/Dance`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                    <section class="parallax-3" className="bg-parallax-3 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        <div class="parallax-inner" className="px-10 py-[10%]">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-left text-overlay text-white">Arts & Craft</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700">
                                <Link
                                    to={`/events/Arts&Craft`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                    <section class="parallax-4" className="bg-parallax-4 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        <div className="px-10 py-[10%] text-right sm:text-left">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-right text-overlay text-white">Camera</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 lg:ml-[1300px] sm:ml-[0px]">
                                <Link
                                    to={`/events/Camera`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                    <section class="parallax-5" className="bg-parallax-5 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        <div class="parallax-inner" className="px-10 py-[10%]">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-left text-overlay text-white">Shoutout</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700">
                                <Link
                                    to={`/events/Shoutout`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                    <section class="parallax-6" className="bg-parallax-6 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        <div className="px-10 py-[10%] text-right sm:text-left">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-right text-overlay text-white">Abhinay</h1>
                            <button className="mt-4 px-6 py-3 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 lg:ml-[1300px] sm:ml-[0px]">
                                <Link
                                    to={`/events/Abhinay`}
                                    className="text-white"
                                >
                                    Events
                                </Link>
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}
export default Modules;