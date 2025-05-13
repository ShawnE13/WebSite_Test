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

export const createPosition = async (positionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/positions`, positionData);
        return response.data;
    } catch (error) {
        console.error('Error creating position:', error);
        throw error;
    }
};

export const updatePosition = async (id, positionData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/positions/${id}`, positionData);
        return response.data;
    } catch (error) {
        console.error('Error updating position:', error);
        throw error;
    }
};

export const deletePosition = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/positions/${id}`);
    } catch (error) {
        console.error('Error deleting position:', error);
        throw error;
    }
};