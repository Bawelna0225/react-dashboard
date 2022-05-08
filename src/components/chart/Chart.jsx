import React from 'react'
import './chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        Total: 2000
    },
    {
        name: 'Febuary',
        Total: 900
    },
    {
        name: 'March',
        Total: 700
    },
    {
        name: 'April',
        Total: 1200
    },
    {
        name: 'May',
        Total: 2500
    },
    {
        name: 'June',
        Total: 1600
    }
];

const Chart = ({aspect, title}) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e89700" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#e89700" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area 
                    type="monotone" 
                    dataKey="Total" 
                    stroke="#e89700" 
                    fillOpacity={1} 
                    fill="url(#Total)" 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart