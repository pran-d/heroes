import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Tour of Heroes</h1>
        <div>
          <Link className="links" to="/dash">Dashboard</Link>
          <Link className="links" to="/">Heroes</Link>
        </div>
      </nav>
    );
  };
   
  export default Navbar;