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
import Try from "../Try/Try";
import CompanyHistory from "../components/AboutUs/CompanyHistory/CompanyHistory";
import MissionandVision from "../components/AboutUs/MissionandVision";
import BrandDynamicCards from "../components/Brands/BrandsCard/BrandDynamicCards/BrandDynamicCards";
import TvOnlineVideo from "../components/MediaCenter/TvOnlineVideo/TvOnlineVideo";
import PressAdvertisement from "../components/MediaCenter/PressAdvertisement/PressAdvertisement";
import PressRelease from "../components/MediaCenter/PressRelease/PressRelease";
import GalleryHome from "../components/MediaCenter/GalleryHome/GalleryHome";
import SignUp from "../components/SignUp/SignUp";

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
        path:"/BrandsCard/:id",
        element:<BrandDynamicCards/>
      },
      {
        path: "/MediaCenter",
        element: <MediaCenter/>
      },
      {
        path: "/TvOnlineVideo",
        element: <TvOnlineVideo/>
      },
      {
        path: "/PressAdvertisement",
        element: <PressAdvertisement/>
      },
      {
        path: "/PressRelease",
        element: <PressRelease/>
      },
      {
        path: "/GalleryHome",
        element: <GalleryHome/>
      },
      {
        path: "/Career",
        element: <Career/>,
      },
      {
        path: "/Contact",
        element:<Contact/>,
      },
      {
        path: "/SignUp",
        element: <SignUp/>,
      },
      {
       path:"/CompanyHistory",
       element:<CompanyHistory/>,
      },
      {
        path:"/MissionandVision",
        element:<MissionandVision/>,
       },
      {
        path:'/Try',
        element:<Try/>
      }



    ],
  },
 
]);