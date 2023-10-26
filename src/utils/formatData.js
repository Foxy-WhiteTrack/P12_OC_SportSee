import { translate, dayMap, ordertranslate } from '../services/translate.js';

// Formate les données de performance
export const formatPerformanceData = (performanceApiResponse) => {
    return ordertranslate.map(kindId => {
        const subject = performanceApiResponse.kind[kindId];
        const dataItem = performanceApiResponse.data.find(item => item.kind === parseInt(kindId));
        return {
            subject: translate[subject] || subject,
            A: dataItem ? dataItem.value : 0,
        };
    });
};

// Formate les données de sessions moyennes
export const formatAverageSessionData = (sessionAverageApiResponse) => {
    return sessionAverageApiResponse.map(session => ({
        day: dayMap[session.day] || session.day,
        sessionLength: session.sessionLength,
    }));
};

// Formate les données d'activité
export const formatActivityData = (weightData) => {
    return weightData;
};
