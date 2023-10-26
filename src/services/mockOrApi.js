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