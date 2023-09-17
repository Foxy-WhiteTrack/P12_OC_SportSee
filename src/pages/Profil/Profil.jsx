import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profil.css';
import { getUserDataById, getUserPerformanceDataById } from '../../api/callApi.js';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import Goals from '../../components/Goals/Goals';
import FoodStats from '../../components/FoodStats/FoodStats';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';


export default function Profil() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [performanceData, setPerformanceData] = useState([]);




    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(id);
                setUserData(user);

                const performanceApiResponse = await getUserPerformanceDataById(id);

                //toDo:  ici, vérifier que le contenu de performanceApiResponse est correct!

                const performanceData = Object.keys(performanceApiResponse.kind).map(kindId => {
                    const subject = performanceApiResponse.kind[kindId];
                    const dataItem = performanceApiResponse.data.find(item => item.kind === parseInt(kindId));
                    return {
                        subject,
                        A: dataItem ? dataItem.value : 0
                    };
                });

                if (performanceData) {
                    console.log('data OP !!!');
                    setPerformanceData(performanceData);
                } else {
                    console.error("Les données de performance sont manquantes ou incorrectes.");
                }

                setPerformanceData(performanceData);
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
                <div className='objectifs'>

                </div>
                <div className='radar'>
                    <RadarChart
                        cx={300}
                        cy={250}
                        outerRadius={150}
                        width={500}
                        height={500}
                        data={performanceData}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar
                            name="Mike"
                            dataKey="A"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </div>
                <div className='score'>
                    <Goals userId={id} />
                </div>
            </div>

            <div className='nutriments'>
                <FoodStats userId={id} />
            </div>
        </>
    );
}
