import React, { useEffect, useState } from 'react';
import { fetchNews } from '../utils/api';

const News: React.FC = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews();
            setNewsArticles(data);
        };

        getNews();
    }, []);

    return (
        <div className="news-container">
            <h1>Latest News</h1>
            <ul>
                {newsArticles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;