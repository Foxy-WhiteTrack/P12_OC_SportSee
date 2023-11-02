// classe de modélisation
class UserData {

    constructor(datas, performance, activity, averageSessions) {
        this.id = datas.id;
        this.userInfos = {
            firstName: datas.userInfos.firstName,
            lastName: datas.userInfos.lastName,
            age: datas.userInfos.age,
        };
        this.score = datas.score || datas.todayScore;
        this.keyData = {
            calorieCount: datas.keyData.calorieCount,
            proteinCount: datas.keyData.proteinCount,
            carbohydrateCount: datas.keyData.carbohydrateCount,
            lipidCount: datas.keyData.lipidCount,
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

export { UserData };