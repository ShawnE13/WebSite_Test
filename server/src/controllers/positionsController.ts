import { Request, Response } from 'express';
import { Position } from '../models/Position';
import { getDatabaseConnection } from '../utils/db';

export const getAllPositions = async (req: Request, res: Response) => {
    try {
        const db = await getDatabaseConnection();
        const positions = await db.query('SELECT * FROM Positions');
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving positions', error });
    }
};

export const getPositionById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const db = await getDatabaseConnection();
        const position = await db.query('SELECT * FROM Positions WHERE id = ?', [id]);
        if (position.length > 0) {
            res.status(200).json(position[0]);
        } else {
            res.status(404).json({ message: 'Position not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving position', error });
    }
};

export const createPosition = async (req: Request, res: Response) => {
    const newPosition: Position = req.body;
    try {
        const db = await getDatabaseConnection();
        await db.query('INSERT INTO Positions SET ?', newPosition);
        res.status(201).json({ message: 'Position created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating position', error });
    }
};

export const updatePosition = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedPosition: Position = req.body;
    try {
        const db = await getDatabaseConnection();
        await db.query('UPDATE Positions SET ? WHERE id = ?', [updatedPosition, id]);
        res.status(200).json({ message: 'Position updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating position', error });
    }
};

export const deletePosition = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const db = await getDatabaseConnection();
        await db.query('DELETE FROM Positions WHERE id = ?', [id]);
        res.status(200).json({ message: 'Position deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting position', error });
    }
};