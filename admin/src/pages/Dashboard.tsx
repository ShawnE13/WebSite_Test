import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome to the admin dashboard. Here you can manage employment positions, news articles, and staff information.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;