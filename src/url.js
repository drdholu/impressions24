// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// import CoordinatorForm from "./components/CoordinatorForm";
// import InProgress from "./components/ui/InProgress";
// import Landing from "./components/Landing";
// import VolunteerForm from "./components/VolunteerForm";
// import Mmifinal from './components/Mmifinal';
// import Voting from './components/VotingForm';

import Modules from './components/Modules'
import Landingroom from './components/LandingRoom';
import TeamsSection from './components/teams';


export const urls = [
    { url: '/', name: "Home", element: <Landingroom /> },
    { url: '/teams', name: "Core Team", element: <TeamsSection /> },
    // {url: '/', name: "Home", element:<LandingPage/> },
    // { url: '/mmi-finalists', name: "mmi-finalists", element: <Mmifinal />, className: "" },
    // { url: '/voting', name: "mmi-voting", element: <Voting /> },
    // { url: '/test', name: "Home", element: <Landing /> },
    // { url: '/team', name: "Team", element: <InProgress />, position: [-3, 4, 2], className: "" },
    {url: '/events', name: "Events", element: <Modules />},

    // { url: '/sponsors', name: "Sponsors", element: <InProgress />, position: [-2.25, 4, 0], className: "" },
    // { url: '/showflow', name: "Showflow", element: <InProgress />, position: [-0.35, 4.25, 0], className: "" },
    // { url: '/proshow', name: "Proshows", element: <InProgress />, position: [0.7, 4, 0], className: "" },
    // { url: '/about', name: "About", element: <InProgress />, position: [1.8, 3.45, 0], className: "" },
    // { url: '/contact', name: "Contact", element: <InProgress />, position: [2.7, 3.5, 0], className: "" },
    //{url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]