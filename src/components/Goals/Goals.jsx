import React from 'react';
import { useState } from 'react';
import './Goals.css';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    Legend,
    ReferenceArea
} from "recharts";
import styled from 'styled-components'

const StyledUl = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-inline-start: 10px;
`

const StyledDiv = styled.div`
  background: #fff;
`

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;

`
export const customLegend = () => {
    return <StyledUl>Durée moyenne des sessions</StyledUl>
}

export const CustomTtp = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <StyledDiv>
                {payload.map((pld, index) => (
                    <div key={index} style={{ display: 'inline-block', padding: 10 }}>
                        <div>{pld.value} min </div>
                    </div>
                ))}
            </StyledDiv>
        )
    }

    return null
}

const Goals = ({ data }) => {
    const [hovered, setHovered] = useState({});

    return (
        <>
            <div className='ctn-goal'>
                <StyledResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 15,
                            left: 15,
                            bottom: 35,
                        }}
                    >
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: '#FFFFFF' }}
                            tickMargin={30}
                        />
                        <Tooltip content={CustomTtp} wrapperStyle={{ outline: 0 }} cursor={false} />
                        <Legend align="left" verticalAlign="top" content={customLegend} />
                        <Line type="monotone" dot={false} dataKey="sessionLength" stroke="white" strokeWidth={3} />
                    </LineChart>
                </StyledResponsiveContainer>
            </div>
        </>
    );
}
export default Goals;