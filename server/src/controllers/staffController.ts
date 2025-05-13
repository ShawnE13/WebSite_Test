import { Request, Response } from 'express';
import { Staff } from '../models/Staff';
import { getConnection } from '../utils/db';

// Get all staff members
export const getAllStaff = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM Staff');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving staff information', error });
    }
};

// Get a staff member by ID
export const getStaffById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM Staff WHERE id = ?', [id]);
        if (result.length > 0) {
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: 'Staff member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving staff information', error });
    }
};

// Create a new staff member
export const createStaff = async (req: Request, res: Response) => {
    const newStaff: Staff = req.body;
    try {
        const connection = await getConnection();
        await connection.query('INSERT INTO Staff SET ?', newStaff);
        res.status(201).json({ message: 'Staff member created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating staff member', error });
    }
};

// Update a staff member
export const updateStaff = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedStaff: Staff = req.body;
    try {
        const connection = await getConnection();
        await connection.query('UPDATE Staff SET ? WHERE id = ?', [updatedStaff, id]);
        res.status(200).json({ message: 'Staff member updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating staff member', error });
    }
};

// Delete a staff member
export const deleteStaff = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        await connection.query('DELETE FROM Staff WHERE id = ?', [id]);
        res.status(200).json({ message: 'Staff member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting staff member', error });
    }
};