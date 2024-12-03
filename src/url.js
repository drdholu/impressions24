// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// import CoordinatorForm from "./components/CoordinatorForm";
// import VolunteerForm from "./components/VolunteerForm";
import InProgress from "./components/ui/InProgress";
// import Landing from "./components/Landing";
import  Newspaper  from './components/Newspaper';
import Mmifinal from './components/Mmifinal';
// import Voting from './components/VotingForm';

export const urls = [
    { url: '/', name: "Home", element: <Newspaper /> },
    // { url: '/test', name: "Home", element: <Landing /> },
    { url: '/team', name: "Team", element: <InProgress />, position: [-3, 4, 2], className: "" },
    { url: '/events', name: "Events", element: <InProgress />, position: [-2.5, 3.25, 4], className: "" },
    { url: '/sponsors', name: "Sponsors", element: <InProgress />, position: [-2.25, 4, 0], className: "" },
    { url: '/showflow', name: "Showflow", element: <InProgress />, position: [-0.35, 4.25, 0], className: "" },
    { url: '/proshow', name: "Proshows", element: <InProgress />, position: [0.7, 4, 0], className: "" },
    { url: '/about', name: "About", element: <InProgress />, position: [1.8, 3.45, 0], className: "" },
    { url: '/contact', name: "Contact", element: <InProgress />, position: [2.7, 3.5, 0], className: "" },
    { url: '/mmi-finalists', name: "mmi-finalists", element: <Mmifinal />, position: [2.7, 3.5, 0], className: "" },
    // { url: '/Voting', name: "mmi-finalists", element: <Voting />, position: [2.7, 3.5, 0], className: "" },

    //{url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},

    // {url: '/', name: "Home", element:<LandingPage/> },
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]