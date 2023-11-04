import React from 'react';
import './Weight.css';

import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

import styled from 'styled-components';

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 15px;
  padding-block: 25px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #e60000;
  color: white;
  border: 0;
`

const LegendDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const LegendTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #20253a;
  margin-top: 0;
`

const LegendLi = styled.li`
  display: flex;
  color: rgba(116, 121, 140, 1);
  font-size: 16px;
  margin-right: 30px;
  &:before {
    content: '·';
    font-size: 80px;
    vertical-align: middle;
    line-height: 20px;
    transform: translate(-5px, -5px);
  }
`

const LegendUl = styled.div`
  display: flex;
  align-items: center;
`

export const CustomTtip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <StyledDiv>
        {payload.map((p, index) => (
          <div key={index} style={{ display: 'inline-block', padding: 20 }}>
            <div>
              {p.value}
              {p.dataKey === 'kilogram' ? 'kg' : 'Kcal'}
            </div>
          </div>
        ))}
      </StyledDiv>
    )
  }
  return null
}

const CustomLgd = ({ payload }) => {
  return (
    <LegendDiv>
      <LegendTitle>Activité quotidienne</LegendTitle>
      <LegendUl>
        {payload.map((entry, index) => (
          <LegendLi
            key={`item-${index}`}
            style={index === 1 ? { color: '#E60000' } : { color: '#282D30' }}
          >
            {' '}
            {entry.value}
          </LegendLi>
        ))}
      </LegendUl>
    </LegendDiv>
  )
}

const Weight = ({ data }) => {
  const indexedData = data.map((item, index) => ({
    ...item,
    index: index + 1 // Index commence à 1
  }));
  return (
    <div className='ctn-weight'>
      <StyledResponsiveContainer width="100%" height={300}>
        <BarChart
          data={indexedData}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 35
          }}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis tickLine={false} tickMargin={10} dataKey="index" tick={{ fontSize: 14, }} />
          <YAxis tick={{ fontSize: 14, }} tickLine={false} tickMargin={5} orientation="right" tickCount={3} type="number" />
          <Tooltip content={<CustomTtip />} wrapperStyle={{ outline: 0 }} />
          <Legend
            iconType="circle"
            iconSize={10}
            height={80}
            align="right"
            verticalAlign="top"
            content={CustomLgd}
          />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </StyledResponsiveContainer>
    </div>
  );
}

export default Weight;