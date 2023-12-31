import './Kpi.css';
import React, { useState, useEffect } from 'react';

import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import styled from 'styled-components'

import { allMockRequest } from '../../services/mockOrApi';

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

export default function Kpi({ userId }) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const userDataInstance = await allMockRequest(userId);
                setUserData(userDataInstance);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }
        fetchData();
    }, [userId]);

    const radialData = [
        { name: 'Score', value: userData.score ? userData.score * 100 : 0 },
    ];
    const startAngle = 90;
    const maxAngle = 360;
    const scorePercent = radialData[0].value;
    const endAngle = startAngle + (maxAngle * scorePercent) / 100;

    return (
        <div className='ctn-score'>

            <StyledResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <text x={35} y={35} className='score-txt1' textAnchor="middle" dominantBaseline="middle">
                        Score
                    </text>
                    <circle cx="50%" cy="50%" r="30%" fill="white" />
                    <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={'24px'}
                        fontWeight={700}
                    >
                        {radialData[0].value}%
                    </text>
                    <text
                        className='kpi-txt'
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={'14px'}
                        fontWeight={700}
                        fill={'#74798c'}
                        width={20}
                    >
                        de votre
                    </text>
                    <text
                        className='kpi-txt'
                        x="50%"
                        y="62%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={'14px'}
                        fontWeight={700}
                        fill={'#74798c'}
                        width={20}
                    >
                        objectif
                    </text>
                    <Pie
                        data={radialData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="70%"
                        fill="#FF0000"
                        stroke="red"
                        startAngle={startAngle}
                        endAngle={endAngle}
                        paddingAngle={0}
                        cornerRadius={5}
                    >
                    </Pie>
                </PieChart>
            </StyledResponsiveContainer>
        </div >
    );
}

