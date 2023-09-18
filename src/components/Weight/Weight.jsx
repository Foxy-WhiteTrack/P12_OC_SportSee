import React from 'react';
import './Weight.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

const Weight = ({ data }) => {
    const indexedData = data.map((item, index) => ({
        ...item,
        index: index + 1 // Index commence à 1
    }));
    return (
        <>
            <BarChart
                width={500}
                height={300}
                data={indexedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="index" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#8884d8" />
                <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
        </>
    );
}
export default Weight;