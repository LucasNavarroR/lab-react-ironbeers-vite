import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeerArr, setAllBeersArr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);

      setAllBeersArr(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h2>Loading bears</h2>;
  }

  return (
    <div>
      {allBeerArr.map((eachBear) => {
        return (
          <Link to={`/beers/${eachBear._id}`} key={eachBear._id}>
            <img src={eachBear.image_url} alt="beer-img" />
            <h4>{eachBear.name}</h4>
            <p>{eachBear.tagline}</p>
            <p>{eachBear.contributed_by}</p>
            
            <hr />
          </Link>
         
        );
      })}
    </div>
  );
}

export default AllBeersPage;
