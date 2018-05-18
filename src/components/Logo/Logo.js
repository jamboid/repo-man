import React from 'react';
import logo from "./repo_man_logo.svg";
import './Logo.css';

const Logo = () => (
  <h1 className="cp_Logo">
    <img className="cp_Logo__image" src={logo} alt="Repo Man"/>
  </h1>
);

export default Logo;
