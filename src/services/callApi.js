// apiService.js
import UserDatas from '../models/UserData';

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

export const getUserWeightDataById = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        const data = await response.json(); // retourne un objet utilisateur
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'activité utilisateur :', error);
        throw error;
    }
};

// refactorisé:
// export const allFetchRequest = async (id) => {

//     const IdResponse = await fetch(`${BASE_URL}/user/${id}`);
//     if (!IdResponse.ok) {
//         throw new Error(IdResponse.status);
//     }
//     const idData = await IdResponse.json();

//     const perfResponse = await fetch(`${BASE_URL}/user/${id}/performance`);
//     if (!perfResponse.ok) {
//         throw new Error(perfResponse.status);
//     }
//     const perfData = await perfResponse.json();

//     const goalResponse = await fetch(`${BASE_URL}/user/${id}/average-sessions`);
//     if (!goalResponse.ok) {
//         throw new Error(goalResponse.status);
//     }
//     const goalData = await goalResponse.json();

//     const activityResponse = await fetch(`${BASE_URL}/user/${id}/activity`);
//     if (!activityResponse.ok) {
//         throw new Error(activityResponse.status);
//     }
//     const activityData = await activityResponse.json();

//     return new UserDatas(idData.data, perfData.data, goalData.data, activityData.data);
// }
