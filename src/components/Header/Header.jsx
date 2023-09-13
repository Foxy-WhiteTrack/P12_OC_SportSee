import "./Header.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header-body">
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <nav className="nav">
                    <NavLink to="/" className="link" activeclassname="active">Accueil</NavLink>
                    <NavLink to="/profil" className="link" activeclassname="active">Profil</NavLink>
                    <NavLink to="/setting" className="link" activeclassname="active">Réglage</NavLink>
                    <NavLink to="/community" className="link" activeclassname="active">Communauté</NavLink>
                </nav>
            </div>
        </div>
    );
};