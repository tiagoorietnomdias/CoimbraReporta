import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("responsive");
    }
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Conta</a>
        <a href="/#">SIM</a>
        <a href="/#">Clica em mim</a>
        <button className="nav-btn nav-close-btn " onClick={showNavbar}>
          <FaTimes />
        </button>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
