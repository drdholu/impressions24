// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// import CoordinatorForm from "./components/CoordinatorForm";
import VolunteerForm from "./components/VolunteerForm";
// import  Newspaper  from './components/Newspaper';
// import InProgress from "./components/ui/InProgress";
import Room from "./components/LandingRoom";
import MainCards from './components/EventsModules';
import Teams from './components/teams';
// import VolunteerForm from "./components/VolunteerForm";
// import Mmifinal from './components/Mmifinal';
// import Voting from './components/VotingForm';

export const urls = [
    { url: '/', name: "Landing", element: <Room /> },
    // {url: '/', name: "Home", element:<LandingPage/> },
    // { url: '/mmi-finalists', name: "mmi-finalists", element: <Mmifinal />, className: "" },
    // { url: '/voting', name: "mmi-voting", element: <Voting /> },
    // { url: '/test', name: "Home", element: <Landing /> },
    { url: '/team', name: "Team", element: <Teams />, position: [-3, 4, 2], className: "" },
    // { url: '/trial', name: "Team", element: <Teams />, position: [-3, 4, 2], className: "" },
    // { url: '/sponsors', name: "Sponsors", element: <InProgress />, position: [-2.25, 4, 0], className: "" },
    // { url: '/showflow', name: "Showflow", element: <InProgress />, position: [-0.35, 4.25, 0], className: "" },
    // { url: '/proshow', name: "Proshows", element: <InProgress />, position: [0.7, 4, 0], className: "" },
    // { url: '/contact', name: "Contact", element: <InProgress />, position: [2.7, 3.5, 0], className: "" },
    {url: '/events', name: "Events", element: <MainCards />},
    {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
// import { element } from "three/webgpu";
// import MMIForm from "./components/MmiForm";
// import ImpressionsNewspaper from "./components/Newspaper";
// import VotingForm from "./components/VotingForm";
// import VolunteerForm from "./components/VolunteerForm";
// import EventsPage from './components/EventsPage';
// import Explore from './components/Explore';
// // import MainCards from './components/MainCards';
// import Modules from "./components/Modules";

// export const urls = [
//     // {url: '/', name: "Home", element:<ImpressionsNewspaper/> },
//     // {url: '/mmi', name: "MMI", element: <VotingForm />},
//     // {url: '/mmi-reg', name: "MMI Registration", element: <MMIForm />},
//     // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
//     // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
//     {url: '/', name: "Module's Page", element: <Modules />},
//     {url: '/events/:moduleName', name: "Events Page", element: <EventsPage />},
//     {url: '/events/:moduleName/:eventTitle', name: "Explore Page", element: <Explore />}
]