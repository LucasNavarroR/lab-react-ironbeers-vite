import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function BeerDetailsPage() {

  const [oneBeer, setOneBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 const params = useParams();
  console.log(params);

  useEffect(() => {
    getData();
  }, [params.beerId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
     

      setOneBeer(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h2>Loading bears</h2>;
  }
console.log(oneBeer)
  return (
 <div key={oneBeer._id}>
<img src={oneBeer.image_url} alt="one-beer" />
<h4>{oneBeer.name}</h4>
<p>{oneBeer.tagline}</p>
<p>{oneBeer.first_brewed}</p>
<p>{oneBeer.attenuation_level}</p>
<p>{oneBeer.description}</p>
<p>{oneBeer.contributed_by}</p>
  
  </div>
  )
}

export default BeerDetailsPage;
