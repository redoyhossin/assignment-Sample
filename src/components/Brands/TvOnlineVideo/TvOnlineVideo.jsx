import { useEffect, useState } from "react";

const TvOnlineVideo = () => {
  const [CartImg, setCarrlImg] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("data.json") // Replace with your API URL
      .then((response) => response.json()) // Parse the JSON
      .then((data) => {
        setCarrlImg(data[2]); // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Display loading indicator or data once it is fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(CartImg);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 justify-items-center">
      

      {CartImg.map((CalsData) => (
        <div className="" key={CalsData.id}>
          <iframe
            width="350"
            height="215"
            src={CalsData.url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default TvOnlineVideo;
