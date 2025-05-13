import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="admin-header">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/manage-positions">Manage Positions</a></li>
                    <li><a href="/manage-news">Manage News</a></li>
                    <li><a href="/manage-staff">Manage Staff</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;