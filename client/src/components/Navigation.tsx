import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/employment">Employment</Link>
                </li>
                <li>
                    <Link to="/staff">Staff</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;