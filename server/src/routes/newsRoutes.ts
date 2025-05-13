import { Router } from 'express';
import { getAllNews, getNewsById, createNews, updateNews, deleteNews } from '../controllers/newsController';

const router = Router();

// Route to get all news articles
router.get('/', getAllNews);

// Route to get a specific news article by ID
router.get('/:id', getNewsById);

// Route to create a new news article
router.post('/', createNews);

// Route to update an existing news article
router.put('/:id', updateNews);

// Route to delete a news article
router.delete('/:id', deleteNews);

export default router;