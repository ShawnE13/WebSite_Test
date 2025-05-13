import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { fetchNews, deleteNews } from '../utils/api';

const ManageNews: React.FC = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchNews();
            setNewsList(news);
        };
        loadNews();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteNews(id);
        setNewsList(newsList.filter(news => news.id !== id));
    };

    return (
        <div className="admin-container">
            <Header />
            <Sidebar />
            <main className="admin-main">
                <h1>Manage News</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newsList.map(news => (
                            <tr key={news.id}>
                                <td>{news.title}</td>
                                <td>{new Date(news.date).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleDelete(news.id)}>Delete</button>
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

export default ManageNews;