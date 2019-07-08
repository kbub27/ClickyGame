import React from 'react';

const Nav = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">{props.title}</a>
            <ul className="navbar-nav justify-content-center">
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