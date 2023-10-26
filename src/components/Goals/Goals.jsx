import React from 'react';
import './Goals.css';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    Legend
} from "recharts";
import styled from 'styled-components'

const StyledUl = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #FFFFFF;
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

const CustomizedDot = (props) => {
    const { cx, cy } = props;

    return (
        <>
            <svg>
                <rect
                    x={cx}
                    width={1000}
                    height="100%"
                    fill="#E60000"
                    fillOpacity={0.7}
                />
            </svg>
            <svg x={cx - 10} y={cy - 10} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white" />
                <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" strokeOpacity="0.198345" strokeWidth="5" />
            </svg>
        </>
    )
}

const Goals = ({ data }) => {

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
                        <Line type="monotone" dot={false} dataKey="sessionLength" stroke="white" strokeWidth={3} activeDot={<CustomizedDot />} />
                    </LineChart>
                </StyledResponsiveContainer>
            </div>
        </>
    );
}
export default Goals;