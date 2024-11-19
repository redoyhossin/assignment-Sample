
import { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";

const Carousels = () => {
   
    const [CarouselImg, setCarouselImg]=useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator



    useEffect(() => {
      // Fetch data 
      fetch('data.json') //  API URL
        .then((response) => response.json()) 
        .then((data) => {
          setCarouselImg(data[0]); // Set the fetched data
          setLoading(false); // Set loading to false
        })
        .catch((error) => {
          console.error('Error fetching data:', error); 
          setLoading(false);
        });
    }, []); 
    if (loading) {
      return <div>Loading...</div>;
    }
  
  
 return (
        <div>
          <Carousel autoplay loop className="">
          {
            CarouselImg.map(CarouselsData=> 
                (
                  <img  key={CarouselsData.id}
                       src={CarouselsData.img}
                      alt={CarouselsData.name}
                      className="h-full w-full object-cover"
                    />  
                )           
            )
         }
                   
                  </Carousel>
       


        </div>
    );
};

export default Carousels;