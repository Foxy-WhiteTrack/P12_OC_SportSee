import {
    getUserMockById,
    getUserMockPerf,
    getUserMockActivity,
    getUserMockSession
} from './callMock';

import {
    getUserDataById,
    getUserPerformanceDataById,
    getUserGoalsDataById,
    getUserWeightDataById
} from './callApi.js';

import { UserData as UserDataClass } from '../models/UserData';

const isApiOk = true;

//refactorisé:
export const allMockRequest = async (userId) => {
    try {
        if (isApiOk) {
            const [userIdData, perfData, activityData, sessionData] = await Promise.all([
                getUserDataById(userId),
                getUserPerformanceDataById(userId),
                getUserWeightDataById(userId),
                getUserGoalsDataById(userId)
            ]);
            console.log("Données API");

            return new UserDataClass(userIdData, perfData, activityData, sessionData);
        } else {
            const [userIdData, perfData, activityData, sessionData] = await Promise.all([
                getUserMockById(userId),
                getUserMockPerf(userId),
                getUserMockActivity(userId),
                getUserMockSession(userId)
            ]);
            console.log("Données mockées");

            return new UserDataClass(userIdData, perfData, activityData, sessionData);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
}