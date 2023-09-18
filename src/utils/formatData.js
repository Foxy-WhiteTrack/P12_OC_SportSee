import { getUserDataById, getUserPerformanceDataById } from '../api/callApi.js';

const user1et2 = USER_PERFORMANCE.map(userPerformance => {
    const userId = userPerformance.userId;
    const performanceData = Object.keys(userPerformance.kind).map(kindId => {
        const axis = userPerformance.kind[kindId];
        const dataItem = userPerformance.data.find(item => item.kind === parseInt(kindId));
        return {
            axis,
            value: dataItem ? dataItem.value : 0 // Si les données ne sont pas trouvées, vous pouvez définir une valeur par défaut ici.
        };
    });

    return {
        userId,
        performanceData
    };
});