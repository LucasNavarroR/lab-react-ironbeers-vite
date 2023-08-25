import { Link } from "react-router-dom";

function Navbar() {

return (
    <div style={{backgroundColor:"blue", display:"flex", justifyContent:"center"}}>
        <Link to="/"><img src="src\assets\home-icon.png" alt="" /></Link>
    </div>
)

}

export default Navbar;
