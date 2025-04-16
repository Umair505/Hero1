import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultsChart = () => {
    const resultData =[
        {
          "stud_id": 1,
          "name": "Alice",
          "physics": 34,
          "chemistry": 23,
          "math": 12
        },
        {
          "stud_id": 2,
          "name": "Bob",
          "physics": 45,
          "chemistry": 32,
          "math": 19
        },
        {
          "stud_id": 3,
          "name": "Charlie",
          "physics": 29,
          "chemistry": 18,
          "math": 27
        },
        {
          "stud_id": 4,
          "name": "David",
          "physics": 50,
          "chemistry": 40,
          "math": 35
        },
        {
          "stud_id": 5,
          "name": "Eva",
          "physics": 38,
          "chemistry": 25,
          "math": 30
        },
        {
          "stud_id": 6,
          "name": "Frank",
          "physics": 42,
          "chemistry": 37,
          "math": 22
        },
        {
          "stud_id": 7,
          "name": "Grace",
          "physics": 27,
          "chemistry": 19,
          "math": 41
        },
        {
          "stud_id": 8,
          "name": "Henry",
          "physics": 33,
          "chemistry": 28,
          "math": 15
        },
        {
          "stud_id": 9,
          "name": "Ivy",
          "physics": 47,
          "chemistry": 31,
          "math": 24
        },
        {
          "stud_id": 10,
          "name": "Jack",
          "physics": 39,
          "chemistry": 21,
          "math": 29
        }
      ];
    return (
        <div>
            <LineChart width={500} height={300} data={resultData} >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;