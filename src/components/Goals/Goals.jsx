import React, { useState, useEffect } from 'react';
import './Goals.css';
import { getUserDataById } from '../../api/callApi';

import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default function Goals({ userId }) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(userId);
                setUserData(user);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    }, [userId]);

    const radialData = [
        { name: 'Score', value: userData.todayScore ? userData.todayScore * 100 : 0 },
    ];

    const scorePercentage = userData.todayScore ? userData.todayScore * 100 : 0;
    const startAngle = 0;
    const endAngle = (scorePercentage / 100) * 360;

    return (
        <>
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
        </>
    );
}
