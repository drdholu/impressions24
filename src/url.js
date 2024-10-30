// import CoordinatorForm from "./components/CoordinatorForm";
import ErrorPage from "./components/ErrorPage";
import LandingPage from "./components/LandingPage";
import ImpressionsNewspaper from "./components/Newspaper";
// import VolunteerForm from "./components/VolunteerForm";

export const urls = [
    {url: '/', name: "Home", element:<ImpressionsNewspaper/> },
    {url: '/stuff', name: "Stuff", element: <ErrorPage />},
    // {url: '/coordinator-form', name: 'Coordinator Forms', element: <CoordinatorForm />},
    // {url: '/volunteer-form', name: 'Volunteer Forms', element: <VolunteerForm />},
]