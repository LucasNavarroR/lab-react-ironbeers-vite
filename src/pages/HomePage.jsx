import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <img src="src\assets\beers.png" alt="" />
        <br />
        <Link to="/beers">All Beers</Link>
      </div>
      <div>
        <img src="src\assets\random-beer.png" alt="" />
        <br />
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <img src="src\assets\new-beer.png" alt="" />
        <br />
        <Link to="/new-beer">New Beer</Link>
      </div>
    </div>
  );
}

export default HomePage;
