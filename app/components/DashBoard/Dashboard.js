import React from 'react'
import DonutChart from './DonutChart';
import LineChart from './LineChart';



function Dashboard() {

    return (
        <div>
            <div className='max-w-[700px]'>
                <LineChart />
                <DonutChart />
            </div>
        </div>
    )
}

export default Dashboard
