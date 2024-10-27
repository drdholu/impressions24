// import CoordinatorForm from "./components/CoordinatorForm";
// import ErrorPage from "./components/ErrorPage";
import LandingPage from "./components/LandingPage";

import CoordinatorForm from "./components/CoordinatorForm";


// import VolunteerForm from "./components/VolunteerForm";

export const urls = [
    {url: '/', name: "Home", element: <LandingPage />},

    {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},

    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},

    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]