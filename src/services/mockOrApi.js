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

const isApiOk = false;

export const askiId = async (userId) => {

    if (!isApiOk) {
        return getUserMockById(userId);
    } else {
        return getUserDataById(userId);
    }
}

export const askPerf = async (userId) => {
    if (!isApiOk) {
        return getUserMockPerf(userId);
    } else {
        return getUserPerformanceDataById(userId);
    }
}

export const askActivity = async (userId) => {
    if (!isApiOk) {
        return getUserMockActivity(userId);
    } else {
        return getUserWeightDataById(userId);
    }
}

export const askSession = async (userId) => {
    if (!isApiOk) {
        return getUserMockSession(userId);
    } else {
        return getUserGoalsDataById(userId);
    }
}

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

            return new UserDataClass(userIdData, perfData, activityData, sessionData);
        } else {
            const [userIdData, perfData, activityData, sessionData] = await Promise.all([
                getUserMockById(userId),
                getUserMockPerf(userId),
                getUserMockActivity(userId),
                getUserMockSession(userId)
            ]);

            return new UserDataClass(userIdData, perfData, activityData, sessionData);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
}