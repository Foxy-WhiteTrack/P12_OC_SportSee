import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profil.css';
import { getUserDataById, getUserPerformanceDataById, getUserGoalsDataById } from '../../api/callApi.js';

import Goals from '../../components/Goals/Goals';
import FoodStats from '../../components/FoodStats/FoodStats';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import Kpi from '../../components/Kpi/Kpi';

export default function Profil() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [performanceData, setPerformanceData] = useState([]);
    const [formattedSessionData, setSessionAverageData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(id);
                setUserData(user);

                const performanceApiResponse = await getUserPerformanceDataById(id);
                const sessionAverageApiResponse = await getUserGoalsDataById(id);

                const performanceData = Object.keys(performanceApiResponse.kind).map(kindId => {
                    const subject = performanceApiResponse.kind[kindId];
                    const dataItem = performanceApiResponse.data.find(item => item.kind === parseInt(kindId));
                    return {
                        subject,
                        A: dataItem ? dataItem.value : 0
                    };
                });

                const dayMap = {
                    1: "L",
                    2: "M",
                    3: "M",
                    4: "J",
                    5: "V",
                    6: "S",
                    7: "D"
                };

                const formattedSessionData = sessionAverageApiResponse.sessions.map(session => ({
                    day: dayMap[session.day],
                    sessionLength: session.sessionLength
                }));


                if (!performanceData || !formattedSessionData) {
                    console.error("Les données de performance sont manquantes ou incorrectes.");
                } else {
                    setPerformanceData(performanceData);
                    setSessionAverageData(formattedSessionData);
                    console.log(formattedSessionData);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <>
            <div className='welcome'>
                <h1 className='hello'>Bonjour <span>{userData.userInfos ? userData.userInfos.firstName : ''}</span></h1>
                <p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='weight'>

            </div>
            <div className='datas-perf'>
                <div className='objectifs' id='content'>
                    <Goals data={formattedSessionData} />
                </div>
                <div className='radar'>
                    <SimpleRadarChart data={performanceData} />
                </div>
                <div className='score'>
                    <Kpi userId={id} />
                </div>
            </div>

            <div className='nutriments'>
                <FoodStats userId={id} />
            </div>
        </>
    );
}
