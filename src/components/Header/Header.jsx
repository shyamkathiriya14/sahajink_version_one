import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-white hover:text-primary"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 px-6 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="size-10 flex items-center justify-center bg-primary rounded-lg text-background-dark">
            <span className="material-symbols-outlined text-3xl font-bold">
              print
            </span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Sahaj<span className="text-primary">ink</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>

        <NavLink to="/IndustriesWeServe" className={navClass}>
          Industries We Serve
        </NavLink>

        <NavLink to="/OurSolution" className={navClass}>
          Our Solutions
        </NavLink>

        <NavLink to="/Infastructure" className={navClass}>
          Infrastructure
        </NavLink>

        <NavLink to="/QualityAndCertification" className={navClass}>
          Quality & Certification
        </NavLink>

        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-orange-500 text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
          Request Quote
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>

        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
