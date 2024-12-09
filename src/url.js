// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// // import { element } from "three/webgpu";
// import CoordinatorForm from "./components/CoordinatorForm";
// import VolunteerForm from "./components/VolunteerForm";
// import  Newspaper  from './components/Newspaper';
// import InProgress from "./components/ui/InProgress";
import Room from "./components/LandingRoom";
import MainCards from './components/EventsModules';
import Teams from './components/teams';
// import VolunteerForm from "./components/VolunteerForm";
// import Mmifinal from './components/Mmifinal';
// import Voting from './components/VotingForm';
import EventsPage from './components/EventsPage';
import Explore from './components/Explore';
// import MainCards from './components/MainCards';
import Modules from "./components/Modules";

export const urls = [
    {url: '/', name: "Home", element:<ImpressionsNewspaper/> },
    // {url: '/mmi', name: "MMI", element: <VotingForm />},
    {url: '/mmi-reg', name: "MMI Registration", element: <MMIForm />},
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]