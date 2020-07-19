import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to="/" className="text-white">
            Crud react y redux
          </Link>
        </h1>
      </div>
      <a
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        href="/productos/nuevo"
      >
        Agregar producto &#43;
      </a>
    </nav>
  );
};

export default Header;
