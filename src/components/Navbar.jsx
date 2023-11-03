import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="">R3D</Link>
      </div>
      <Link to="/chat" className="">
        ⚡ chatter
      </Link>
      <Link to="/generate" className="">
        🎨 générer
      </Link>
      <Link to="/play" className="">
        🎮 jouer
      </Link>
    </div>
  );
}

export default Navbar;
