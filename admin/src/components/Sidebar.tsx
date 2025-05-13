import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Admin Navigation</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/manage-positions">Manage Positions</Link>
                </li>
                <li>
                    <Link to="/manage-news">Manage News</Link>
                </li>
                <li>
                    <Link to="/manage-staff">Manage Staff</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;