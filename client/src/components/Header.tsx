import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Welcome to Our Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/employment">Employment</a></li>
                    <li><a href="/staff">Staff</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;