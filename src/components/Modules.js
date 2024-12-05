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
import "./Modules.css";

function Modules() {
    return(
        <div>
            <div className="box-border m-0 p-0 bg-gray-200 overflow-x-hidden font-poppins">
                <section>
                    {/* <section class="parallax-1"> */}
                    <section class="parallax-1" className="bg-parallax-1 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                        {/* <div class="parallax-inner"> */}
                        <div class="parallax-inner" className="px-10 py-[10%]">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-left text-overlay">Music</h1>
                            <button className="mt-4 px-5 py-2 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 ml-20">Events</button>
                        </div>
                </section>
                <section class="parallax-2" className="bg-parallax-2 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                    <div className="px-10 py-[10%] text-right sm:text-left">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl text-right text-overlay">Dance</h1>
                        <button className="mt-4 px-5 py-2 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 lg:ml-[1300px] sm:ml-[0px]">Events</button>
                    </div>
                </section>
                <section class="parallax-3" className="bg-parallax-3 bg-fixed bg-cover bg-center w-screen min-h-screen flex items-center">
                    <div class="parallax-inner" className="px-10 py-[10%]">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl text-left text-overlay">Arts & Craft</h1>
                        <button className="mt-4 px-5 py-2 text-white bg-blue-500 border-none rounded-md hover:bg-blue-700 ml-20">Events</button>
                    </div>
             </section>
                </section>
            </div>
        </div>
    );
}
export default Modules;