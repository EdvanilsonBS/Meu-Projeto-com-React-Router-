import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Meu projeto 
      </Link>
      <nav className="nav">
        {/* NavLink adiciona a classe "active" automaticamente na rota atual */}
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </nav>
    </header>
  );
}
