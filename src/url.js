// import CoordinatorForm from "./components/CoordinatorForm";
// import LandingPage from "./components/LandingPage";
// import { element } from "three/webgpu";
// import MMIForm from "./components/MmiForm";
// import ImpressionsNewspaper from "./components/Newspaper";
// import VotingForm from "./components/VotingForm";
// import VolunteerForm from "./components/VolunteerForm";
import { element } from 'prop-types';
import EventsPage from './components/EventsPage';
import Explore from './components/Explore';
// import MainCards from './components/MainCards';
import Modules from "./components/Modules";
import Sponsors from './Sponsors.jsx'
export const urls = [
    // {url: '/', name: "Home", element:<ImpressionsNewspaper/> },
    // {url: '/mmi', name: "MMI", element: <VotingForm />},
    // {url: '/mmi-reg', name: "MMI Registration", element: <MMIForm />},
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element:   <VolunteerForm />},
    {url: '/', name: "Module's Page", element: <Modules />},
    {url: '/events/:moduleName', name: "Events Page", element: <EventsPage />},
    {url: '/events/:moduleName/:eventTitle', name: "Explore Page", element: <Explore />},
    {url : '/sponsors', name:"Sponsors Page", element : <Sponsors/>}
]
