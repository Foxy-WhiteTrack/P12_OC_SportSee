import { allFetchRequest } from './callApi';
import { fetchUserMock } from './mockDatas';

const isApiOk = true;

export const fetchApiOrMock = async (userId) => {

    if (isApiOk) {
        // return getUserDataById(userId);
        return fetchUserMock(userId);
    } else {
        // return mockDataById(userId);
        return allFetchRequest(userId);
    }

}

