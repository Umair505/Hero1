import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    //data processing for the chart
    const marksChartData = marksData.map(stdData => {
        const student = {
            id: stdData.id,
            name: stdData.name,
            physics: stdData.marks.phy,
            chemistry: stdData.marks.Chemistry,
            math: stdData.marks.math
        }
        const avg = (stdData.marks.phy + stdData.marks.Chemistry + stdData.marks.math) / 3;
        student.avg = avg;
        return student;
    })
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill="yellow"></Bar>
                <Bar dataKey="math" fill="blue"></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;