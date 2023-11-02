const UserData = require('./User');

const USER_MAIN_DATA = require('./data').USER_MAIN_DATA;
const USER_ACTIVITY = require('./data').USER_ACTIVITY;
const USER_AVERAGE_SESSIONS = require('./data').USER_AVERAGE_SESSIONS;
const USER_PERFORMANCE = require('./data').USER_PERFORMANCE;

const users = [];

USER_MAIN_DATA.forEach(mainData => {
    const userId = mainData.id;
    const userInfos = mainData.userInfos;
    const todayScore = mainData.todayScore || mainData.score;
    const keyData = mainData.keyData;
    const activity = USER_ACTIVITY.find(data => data.userId === userId).sessions;
    const averageSessions = USER_AVERAGE_SESSIONS.find(data => data.userId === userId).sessions;
    const performance = USER_PERFORMANCE.find(data => data.userId === userId);

    const user = new UserData(userId, userInfos, todayScore, keyData, activity, averageSessions, performance);
    users.push(user);
});

// console.log(users);