import React from 'react';
import './SimpleRadarChart.css';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background-color: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

const SimpleRadarChart = ({ data }) => {
    return (
        <div className='ctn-radar'>
            <StyledResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    data={data}
                >
                    <PolarGrid radialLines={false} stroke="#FFFFFF" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: '16px' }} />
                    <Radar
                        name="name"
                        dataKey="A"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </StyledResponsiveContainer>
        </div>
    );
};

export default SimpleRadarChart;
