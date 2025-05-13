import React, { useEffect, useState } from 'react';
import { fetchStaff } from '../utils/api';
import './client.css';

const Staff: React.FC = () => {
    const [staffMembers, setStaffMembers] = useState([]);

    useEffect(() => {
        const getStaff = async () => {
            const data = await fetchStaff();
            setStaffMembers(data);
        };

        getStaff();
    }, []);

    return (
        <div className="staff-container">
            <h1>Staff Information</h1>
            <ul>
                {staffMembers.map((member) => (
                    <li key={member.id}>
                        <h2>{member.name}</h2>
                        <p>{member.position}</p>
                        <p>{member.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Staff;