import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profil.css';
import { getUserDataById } from '../../api/callApi.js';

import { RadialBarChart, RadialBar, Legend } from 'recharts';


export default function Profil() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    const radialData = [
        { name: 'Score', value: userData.todayScore ? userData.todayScore * 100 : 0 },
    ];

    const scorePercentage = userData.todayScore ? userData.todayScore * 100 : 0;
    const startAngle = 0;
    const endAngle = (scorePercentage / 100) * 360;



    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(id);
                setUserData(user);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
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

                </div>
                <div className='score'>
                    <div className='title-score'>
                        <p className=''>Score</p>
                    </div>
                    <div className='donut-score'>
                        <RadialBarChart
                            width={200}
                            height={200}
                            cx={100}
                            cy={100}
                            innerRadius={40}
                            outerRadius={80}
                            barSize={8}
                            data={radialData}
                            label={() => ''}
                            startAngle={startAngle}
                            endAngle={endAngle}
                        >
                            <RadialBar minAngle={15} background dataKey='value' fill='#FF0000' />
                            <Legend iconSize={0} />
                        </RadialBarChart>

                    </div>

                    <div className='results-score'>
                        <p className='data-score'>{userData.todayScore ? userData.todayScore * 100 : ''} %</p>
                        <p className='text-score'>de votre objectif</p>
                    </div>
                </div>
            </div>

            <div className='nutriments'>
                <div className='kcal'>
                    <div className='icon-kcal'>

                    </div>
                    <p className='nbr-kcal'>{userData.keyData ? userData.keyData.calorieCount : ''}</p>
                    <p>Calories</p>
                </div>
                <div className='protein'>
                    <div className='icon-protein'>

                    </div>
                    <p className='nbr-protein'>{userData.keyData ? userData.keyData.proteinCount : ''}</p>
                    <p>Proteines</p>
                </div>
                <div className='glucides'>
                    <div className='icon-glucides'>

                    </div>
                    <p className='nbr-glucides'>{userData.keyData ? userData.keyData.carbohydrateCount : ''}</p>
                    <p>Glucides</p>
                </div>
                <div className='lipides'>
                    <div className='icon-lipides'>

                    </div>
                    <p className='nbr-lipides'>{userData.keyData ? userData.keyData.lipidCount : ''}</p>
                    <p>Lipides</p>
                </div>
            </div>
        </>
    );
}
