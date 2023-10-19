import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Profil.css';
// Importer les fonctions d'appel API
import {
    getUserDataById,
    getUserPerformanceDataById,
    getUserGoalsDataById,
    getUserWeightDataById
} from '../../services/callApi.js';

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
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(id);
                if (user.error) {
                    navigate('/error404');
                }
                setUserData(user);

                const performanceApiResponse = await getUserPerformanceDataById(id);
                const sessionAverageApiResponse = await getUserGoalsDataById(id);
                const weightData = await getUserWeightDataById(id);

                // Utiliser les fonctions de formatage pour mettre en forme les données
                const formattedPerformanceData = formatPerformanceData(performanceApiResponse);
                const formattedSessionData = formatAverageSessionData(sessionAverageApiResponse);
                const formattedActivitySession = formatActivityData(weightData);

                if (!formattedPerformanceData || !formattedSessionData) {
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
                            <FoodStats userId={id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
