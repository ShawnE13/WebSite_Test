import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchPositions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/positions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching positions:', error);
        throw error;
    }
};

export const fetchNews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};

export const fetchStaff = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/staff`);
        return response.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw error;
    }
};