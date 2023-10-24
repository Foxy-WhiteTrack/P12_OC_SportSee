import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';
import User from '../models/UserData';

const mockSearchDatas = (nameData, userKey, userId) => {
    const mockUserId = Number(userId);
    const mockData = nameData.find(item => item[userKey] === mockUserId);
    if (mockData) {
        return { mockData };
    }
    throw new Error("Erreur 404, données mockée non récupérées");
}

export const fetchUserMock = async (userId) => {
    const idData = mockSearchDatas(USER_MAIN_DATA, 'id', userId).data;
    const perfData = mockSearchDatas(USER_ACTIVITY, 'id', userId).data;
    const goalData = mockSearchDatas(USER_AVERAGE_SESSIONS, 'id', userId).data;
    const activityData = mockSearchDatas(USER_PERFORMANCE, 'id', userId).data;

    return new UserData(idData, perfData, goalData, activityData);
}

export const mockDataById = async (id) => {

    try {
        const response = await fetch(USER_MAIN_DATA);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        throw error;
    }

};

