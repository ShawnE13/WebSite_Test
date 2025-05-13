import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { fetchStaff, deleteStaff } from '../utils/api';

const ManageStaff = () => {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        const loadStaff = async () => {
            const staffData = await fetchStaff();
            setStaffList(staffData);
        };
        loadStaff();
    }, []);

    const handleDelete = async (id) => {
        await deleteStaff(id);
        setStaffList(staffList.filter(staff => staff.id !== id));
    };

    return (
        <div className="admin-container">
            <Header />
            <Sidebar />
            <main className="admin-main">
                <h1>Manage Staff</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map(staff => (
                            <tr key={staff.id}>
                                <td>{staff.name}</td>
                                <td>{staff.position}</td>
                                <td>
                                    <button onClick={() => handleDelete(staff.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <Footer />
        </div>
    );
};

export default ManageStaff;