import React, { useEffect, useState } from 'react';
import { fetchEmploymentPositions } from '../utils/api';

const Employment: React.FC = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const getPositions = async () => {
            const data = await fetchEmploymentPositions();
            setPositions(data);
        };

        getPositions();
    }, []);

    return (
        <div className="employment-page">
            <h1>Employment Positions</h1>
            <ul>
                {positions.map((position) => (
                    <li key={position.id}>
                        <h2>{position.title}</h2>
                        <p>{position.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employment;