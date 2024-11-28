// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";
// import CoordinatorForm from "./components/CoordinatorForm";
// import VolunteerForm from "./components/VolunteerForm";
import InProgress from "./components/InProgress";
import Landing from "./components/Landing";

export const urls = [
    {url: '/', name: "Home", element: <Landing />},
    {url: '/team', name: "Team", element: <InProgress />, position:[-3, 2, 0], className: "bg-white"},
    {url: '/events', name: "Events", element: <InProgress />, position:[-3.45, 3.25, 0], className: "bg-red-700"},
    {url: '/sponsors', name: "Sponsors", element: <InProgress />, position:[-2.25, 4, 0], className: "bg-purple-700"},
    {url: '/showflow', name: "Showflow", element: <InProgress />, position:[-0.35, 4.25, 0], className: "bg-red-700"},
    {url: '/proshow', name: "Proshows", element: <InProgress />, position:[0.7, 4, 0], className: "bg-green-900"},
    {url: '/about', name: "About", element: <InProgress />, position:[1.8, 3.45, 0], className: "bg-red-700"},
    {url: '/contact', name: "Contact", element: <InProgress />, position:[2.7, 2.45, 0], className: "bg-white"},
    //{url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},

    // {url: '/', name: "Home", element:<LandingPage/> },
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]