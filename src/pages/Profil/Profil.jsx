import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Profil.css';

import { allMockRequest } from '../../services/mockOrApi';

import Goals from '../../components/Goals/Goals';
import FoodStats from '../../components/FoodStats/FoodStats';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import Kpi from '../../components/Kpi/Kpi';
import Weight from '../../components/Weight/Weight';

// Importer les fonctions de formatage
import {
    formatPerformanceData,
    formatAverageSessionData,
    formatActivityData
} from '../../utils/formatData.js';

export default function Profil() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    const [performanceData, setPerformanceData] = useState([]);
    const [formattedSessionData, setSessionAverageData] = useState([]);
    const [activitySession, setWeightData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userDataInstance = await allMockRequest(id);

                const user = userDataInstance.id;
                if (user.error) {
                    navigate('/error404');
                }
                setUserData(userDataInstance);

                const performanceApiResponse = userDataInstance.performance;
                const sessionAverageApiResponse = userDataInstance.averageSessions;
                const weightData = userDataInstance.activity;

                // fonctions de formatage pour mettre en forme les données
                const formattedPerformanceData = formatPerformanceData(performanceApiResponse);
                const formattedSessionData = formatAverageSessionData(sessionAverageApiResponse);
                const formattedActivitySession = formatActivityData(weightData);

                if (!formattedPerformanceData || !formattedSessionData || !formattedActivitySession) {
                    console.error("Les données sont manquantes ou incorrectes.");
                } else {
                    setPerformanceData(formattedPerformanceData);
                    setSessionAverageData(formattedSessionData);
                    setWeightData(formattedActivitySession);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        }

        fetchData();
    }, [id]);

    // console.log(userData.userInfos);

    return (
        <>
            <div className='container-all'>
                <div className='welcome'>
                    <h1 className='hello'>Bonjour <span className='firstname'>{userData.userInfos ? userData.userInfos.firstName : ''}</span></h1>
                    <p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='ctn-dashboard'>
                    <div className='left'>
                        <Weight data={activitySession} />
                        <div className='datas-perf'>
                            <div className='parts'>
                                <Goals data={formattedSessionData} />
                            </div>
                            <div className='parts'>
                                <SimpleRadarChart data={performanceData} />
                            </div>
                            <div className='parts'>
                                <Kpi userId={id} />
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='nutriments'>
                            <FoodStats />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
