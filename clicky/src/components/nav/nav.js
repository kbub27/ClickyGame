import React from 'react';
import './Nav.css';

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <a className="navbar-brand" href="/">{props.title}</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    {props.answer}
                </li>
                <li className="nav-item">
                    Top Score: {props.topScore} | Current Score: {props.currentScore}
                </li>
            </ul>
        </nav>
    )
};

export default Nav;