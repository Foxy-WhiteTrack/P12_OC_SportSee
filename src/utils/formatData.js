import { translate, dayMap, ordertranslate } from '../services/translate.js';

// Formate les données de performance
export const formatPerformanceData = (performanceApiResponse) => {
    return ordertranslate.map(kindId => {
        const subject = performanceApiResponse.kind[kindId];
        const dataItem = performanceApiResponse.data.find(item => item.kind === parseInt(kindId));
        return {
            subject: translate[subject] || subject, // Utilisez la traduction
            A: dataItem ? dataItem.value : 0,
        };
    });
};

// Formate les données de sessions moyennes
export const formatAverageSessionData = (sessionAverageApiResponse) => {
    return sessionAverageApiResponse.sessions.map(session => ({
        day: dayMap[session.day] || session.day, // Utilisez la traduction
        sessionLength: session.sessionLength,
    }));
};

// Formate les données d'activité
export const formatActivityData = (weightData) => {
    return weightData.sessions;
};

// fonction de normalisation!
// if score n'existe pas alors todayScore = score
// ignorer les données qui n'existe pas (exemple: activité pour l'ID 13)
