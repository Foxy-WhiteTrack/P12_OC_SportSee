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