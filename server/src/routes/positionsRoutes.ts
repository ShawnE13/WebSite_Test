import { Router } from 'express';
import { getAllPositions, getPositionById, createPosition, updatePosition, deletePosition } from '../controllers/positionsController';

const router = Router();

// Route to get all positions
router.get('/', getAllPositions);

// Route to get a position by ID
router.get('/:id', getPositionById);

// Route to create a new position
router.post('/', createPosition);

// Route to update a position
router.put('/:id', updatePosition);

// Route to delete a position
router.delete('/:id', deletePosition);

export default router;