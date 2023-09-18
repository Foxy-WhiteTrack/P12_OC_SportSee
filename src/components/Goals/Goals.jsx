import React from 'react';
import './Goals.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const Goals = ({ data }) => {
    return (
        <>
            <div className='content-goal'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dot={false} dataKey="sessionLength" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className='results-goal'>
                <p className='text-goal'>Durée moyenne des sessions</p>
            </div>
        </>
    );
}
export default Goals;