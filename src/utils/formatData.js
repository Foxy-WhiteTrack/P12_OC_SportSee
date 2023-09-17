import { getUserDataById, getUserPerformanceDataById } from '../api/callApi.js';

const formattedData = {
    userId: initialData.userId,
    data: initialData.data.map(item => ({
        value: item.value,
        kind: initialData.kind[item.kind]
    }))
};