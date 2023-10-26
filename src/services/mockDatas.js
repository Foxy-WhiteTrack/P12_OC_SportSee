import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';
import UserDatas from '../models/UserData';

const mockSearchDatas = (nameData, userKey, userId) => {
    const mockUserId = Number(userId);
    const mockData = nameData.find(item => item[userKey] === mockUserId);
    try {
        return { mockData };
    } catch (error) {
        console.error('Erreur lors de la récupération des données mockées :', error);
        throw new Error("Erreur 404, données mockée non récupérées");
    }

}

export const fetchUserMock = async (userId) => {
    const idData = mockSearchDatas(USER_MAIN_DATA, 'id', userId).data;
    const perfData = mockSearchDatas(USER_ACTIVITY, 'userId', userId).data;
    const goalData = mockSearchDatas(USER_AVERAGE_SESSIONS, 'userId', userId).data;
    const activityData = mockSearchDatas(USER_PERFORMANCE, 'userId', userId).data;

    return new UserDatas(idData, perfData, goalData, activityData);
}

export const mockDataById = async (userId) => {

    try {
        const response = await fetch(USER_MAIN_DATA);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        throw error;
    }

};

