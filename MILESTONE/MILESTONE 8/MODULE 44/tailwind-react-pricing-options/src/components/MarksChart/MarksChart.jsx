import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    console.log(marksData);
    //data processing for the chart
    
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;