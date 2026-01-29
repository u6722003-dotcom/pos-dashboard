import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">POS</div>
        <span className="logo-text">Point of Sale System</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/sales-journal">
          Sales Journal
        </NavLink>
      </nav>
    </header>
  );
}
