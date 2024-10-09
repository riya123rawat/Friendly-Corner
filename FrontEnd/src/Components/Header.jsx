import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

function Header() {

  function closeSidebar() {
    document.getElementById("sidebar-active").checked=false;
  }

  return (
    <header>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active" />
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </label>

          <Link onClick={closeSidebar} className="_link" to="/">Home</Link> 
          <HashLink onClick={closeSidebar} className="_link" smooth to="/#prices">Prices</HashLink>
          <HashLink onClick={closeSidebar} className='_link' smooth to="/#contact-us">Contact</HashLink> 
          <Link onClick={closeSidebar} className="_link" to="/">Partners</Link>
          <Link onClick={closeSidebar} className="_link" to="/">Butik</Link>
          <Link onClick={closeSidebar} className="_link" to="/login">Login</Link>
          <Link onClick={closeSidebar} className="_link" to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;