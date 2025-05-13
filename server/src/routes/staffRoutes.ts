import { Router } from 'express';
import { getAllStaff, getStaffById, createStaff, updateStaff, deleteStaff } from '../controllers/staffController';

const router = Router();

// Route to get all staff
router.get('/', getAllStaff);

// Route to get a staff member by ID
router.get('/:id', getStaffById);

// Route to create a new staff member
router.post('/', createStaff);

// Route to update a staff member
router.put('/:id', updateStaff);

// Route to delete a staff member
router.delete('/:id', deleteStaff);

export default router;