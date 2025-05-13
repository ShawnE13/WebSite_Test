import { Request, Response } from 'express';
import { getNews, createNews, updateNews, deleteNews } from '../utils/db';

export const getAllNews = async (req: Request, res: Response) => {
    try {
        const news = await getNews();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving news' });
    }
};

export const addNews = async (req: Request, res: Response) => {
    try {
        const newsData = req.body;
        const newNews = await createNews(newsData);
        res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({ message: 'Error creating news' });
    }
};

export const editNews = async (req: Request, res: Response) => {
    try {
        const newsId = req.params.id;
        const newsData = req.body;
        const updatedNews = await updateNews(newsId, newsData);
        res.status(200).json(updatedNews);
    } catch (error) {
        res.status(500).json({ message: 'Error updating news' });
    }
};

export const removeNews = async (req: Request, res: Response) => {
    try {
        const newsId = req.params.id;
        await deleteNews(newsId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news' });
    }
};