import { Helmet } from "react-helmet-async";
import Carousels from "./Carousel/Carousels/Carousels";
import WeHiring from "./WeHiring/WeHiring";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BEOL -Bangladesh Edible Oil Limited</title>
      </Helmet>
      <Carousels />
      <WhoWeAre />
      <WeHiring />
    </div>
  );
};

export default Home;
