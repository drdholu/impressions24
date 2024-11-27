// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
// import LandingPage from "./components/LandingPage";

// import CoordinatorForm from "./components/CoordinatorForm";
import ThreeScene from "./components/landingtrial";
import FiberScene from "./components/FiberScene";

export const urls = [
    {url: '/', name: "Home", element: <FiberScene />},
    {url: '/chek', name: "Home", element: <ThreeScene />},
    //{url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},

    // {url: '/', name: "Home", element:<LandingPage/> },
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]