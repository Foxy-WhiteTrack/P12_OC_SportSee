// apiService.js

const BASE_URL = 'http://localhost:3000'; // URL du backend (3001 étant celui du frontend)

export const getUserDataById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${id}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        throw error;
    }
};


export const getUserPerformanceDataById = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        const data = await response.json(); // retourne un objet utilisateur
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de performance utilisateur :', error);
        throw error;
    }
};

export const getUserGoalsDataById = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        const data = await response.json(); // retourne un objet utilisateur
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de sessions utilisateur :', error);
        throw error;
    }
};