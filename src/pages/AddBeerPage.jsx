import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handletaglineChange = (event) => {
    setTagline(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    setFirst_brewed(event.target.value);
  };

  const handleBrewedTipsChange = (event) => {
    setBrewers_tips(event.target.value);
  };

  const handleAtenuationLevelChange = (event) => {
    setAttenuation_level(event.target.value);
  };

  const handleContributedByChange = (event) => {
    setContributed_by(event.target.value);
  };

  const handleCreateBeer = async () => {
    event.preventDefault();

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      });
    } catch (error) {}
  };

  return (
    <div>
      <h2>Create a new beer</h2>

      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handletaglineChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <label htmlFor="first_brewed">First brewed</label>
        <input
          type="text"
          name="first_brewedme"
          value={first_brewed}
          onChange={handleFirstBrewedChange}
        />
        <br />
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewedTipsChange}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAtenuationLevelChange}
        />
        <br />
        <label htmlFor="contributed_by">Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedByChange}
        />
        <br />

        <button type="submit" onClick={handleCreateBeer}>
          Add beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
