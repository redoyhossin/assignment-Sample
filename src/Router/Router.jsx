import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import Brands from "../components/Brands/Brands";
import MediaCenter from "../components/MediaCenter/MediaCenter";
import Career from "../components/Career/Career";
import Contact from "../components/Contact/Contact";
import MilContact from "../components/MilContact/MilContact";
import Try from "../Try/Try";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/AboutUs",
        element: <AboutUs/>,
      },
      {
        path: "/Brands",
        element: <Brands/>
      },
      {
        path: "/MediaCenter",
        element: <MediaCenter/>
      },
      {
        path: "/Career",
        element: <Career/>,
      },
      {
        path: "/Contact",
        element:<Contact/>,
      },{
        path: "/MilContact",
        element: <MilContact/>,
      },
      {
        path:'/Try',
        element:<Try/>
      }



    ],
  },
 
]);