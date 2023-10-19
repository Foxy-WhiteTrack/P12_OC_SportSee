// classe de modélisation
class UserData {

    constructor(datas, activity, averageSessions, performance) {
        this.id = datas.id;
        this.userInfos = {
            firstName: datas.userInfos.firstName,
            lastName: datas.userInfos.lastName,
            age: datas.userInfos.age,
        };
        this.score = datas.score || datas.todayScore;
        this.key = {
            calorieCount: datas.key.calorieCount,
            proteinCount: datas.key.proteinCount,
            carbohydrateCount: datas.key.carbohydrateCount,
            lipidCount: datas.key.lipidCount,
        };

        this.activity = activity.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }));

        this.averageSessions = averageSessions.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }));

        this.performance = {
            kind: performance.kind,
            data: performance.data,
        };
    }
}

export default User;