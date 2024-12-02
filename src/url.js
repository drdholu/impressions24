// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// import CoordinatorForm from "./components/CoordinatorForm";
// import VolunteerForm from "./components/VolunteerForm";
// import  Newspaper  from './components/Newspaper';
import InProgress from "./components/ui/InProgress";
import Landing from "./components/Landing";
import EventsPage from './components/EventsPage';
import Explore from './components/Explore';
import MainCards from './components/EventsModules';

export const urls = [
    { url: '/', name: "Landing", element: <Landing /> },
    // { url: '/test', name: "Home", element: <Landing /> },
    // { url: '/team', name: "Team", element: <InProgress />, position: [-3, 4, 2], className: "" },
    // { url: '/sponsors', name: "Sponsors", element: <InProgress />, position: [-2.25, 4, 0], className: "" },
    // { url: '/showflow', name: "Showflow", element: <InProgress />, position: [-0.35, 4.25, 0], className: "" },
    // { url: '/proshow', name: "Proshows", element: <InProgress />, position: [0.7, 4, 0], className: "" },
    // { url: '/contact', name: "Contact", element: <InProgress />, position: [2.7, 3.5, 0], className: "" },
    {url: '/events', name: "Events", element: <MainCards />},
    {url: '/events/:moduleName', name: ":moduleName", element: <EventsPage />},
    {url: '/events/:moduleName/:eventTitle', name: ":eventTitle", element: <Explore />}
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]