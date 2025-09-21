import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Seus Pokemons favoritos</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/new"} className="new-btn"> Novo Post </Link>
        </li>
      </ul>
    </nav>
  );
}; // O '}' estava faltando aqui

export default Navbar;