import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { fetchPositions, deletePosition } from '../utils/api';

const ManagePositions = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const loadPositions = async () => {
            const data = await fetchPositions();
            setPositions(data);
        };
        loadPositions();
    }, []);

    const handleDelete = async (id) => {
        await deletePosition(id);
        setPositions(positions.filter(position => position.id !== id));
    };

    return (
        <div className="admin-container">
            <Header />
            <Sidebar />
            <main>
                <h1>Manage Employment Positions</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Position Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positions.map(position => (
                            <tr key={position.id}>
                                <td>{position.title}</td>
                                <td>
                                    <button onClick={() => handleDelete(position.id)}>Delete</button>
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

export default ManagePositions;