// apiService.js

import { USER_MAIN_DATA, USER_PERFORMANCE, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../data/data.js';

export const getUserMockById = async (userId) => {
    try {
        let numberId = Number(userId);
        let user = USER_MAIN_DATA.find((item) => item.id === numberId);
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        return user;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        throw error;
    }
};

export const getUserMockPerf = async (userId) => {
    try {
        let numberId = Number(userId);
        let userPerf = USER_PERFORMANCE.find((performanceData) => performanceData.userId === numberId);
        if (!userPerf) {
            throw new Error('Performances non trouvées');
        }
        const formattedData = {
            data: {
                userId: userPerf.userId,
                kind: userPerf.kind,
                data: userPerf.data,
            },
        };
        return formattedData.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances utilisateur :', error);
        throw error;
    }
};

export const getUserMockActivity = async (userId) => {
    try {
        let numberId = Number(userId);
        let userActivity = USER_ACTIVITY.find((item) => item.userId === numberId);
        if (!userActivity) {
            throw new Error('Performances non trouvées');
        }
        return userActivity;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances utilisateur :', error);
        throw error;
    }
};

export const getUserMockSession = async (userId) => {
    try {
        let numberId = Number(userId);
        let userSession = USER_AVERAGE_SESSIONS.find((item) => item.userId === numberId);
        if (!userSession) {
            throw new Error('Performances non trouvées');
        }
        return userSession;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances utilisateur :', error);
        throw error;
    }
};