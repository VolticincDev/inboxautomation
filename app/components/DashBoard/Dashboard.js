import React, { useState, useEffect } from 'react'
import DonutChart from './DonutChart';
import LineChart from './LineChart';
import PlotArea from './PlotArea';



function Dashboard() {

    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        const yearsArray = [];

        for (let year = startYear; year <= currentYear; year++) {
            yearsArray.push(year);
        }

        setYears(yearsArray);
        setSelectedYear(currentYear); // Set the current year as the default selected value
    }, []);

    // Handle year change
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const tabledata = [
        { taskid: '01/01/2024', taskName: 'Verification started (Task- 786687)', totalEMail: 100, status: 525, dateStarted: 425 },
        { taskid: '01/01/2024', taskName: 'Verification started (Task- 786687)', totalEMail: 100, status: 525, dateStarted: 425 },
        { taskid: '01/01/2024', taskName: 'Verification started (Task- 786687)', totalEMail: 100, status: 525, dateStarted: 425 },
        { taskid: '01/01/2024', taskName: 'Verification started (Task- 786687)', totalEMail: 100, status: 525, dateStarted: 425 },
    ]

    return (
        <div className='mx-6'>
            <div className='flex md:flex-row flex-col lg:items-center md:space-x-10'>
                <div className='md:w-[500px] lg:w-[650px] h-[408px] bg-white py-5 pl-5 pr-0 rounded-lg'>
                    <h1 className='text-[#030229] text-[18px] font-black mb-4'>Verification Activity</h1>
                    <LineChart />
                </div>

                <div className='w-[400px] h-[408px] bg-white rounded-xl md:mt-0 mt-5'>
                    <div className='flex items-center justify-between bg-white p-4 rounded-lg'>
                        <h1 className='text-[#030229] text-[18px] font-black'>Lifetime Usage</h1>
                        <div className='border rounded-full px-3 py-1.5'>
                            <select
                                name="year"
                                id="yearDropdown"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className='focus:outline-none text-[12px] font-semibold'
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='px-10 pb-10 pt-2'>
                        <DonutChart />
                    </div>
                </div>

            </div>

            <div className='flex md:flex-row flex-col md:items-center md:space-x-10 md:mt-5 md:mb-5'>
                <div className='w-[400px] md:w-[600px] lg:w-[650px] md:bg-white lg:bg-red-300 xl:bg-blue-300 px-8 py-6 rounded-lg'>
                    <h1 className='text-[#030229] text-[18px] font-black text-center mb-4'>Credit History</h1>
                    <div className='w-full overflow-x-auto lg:overflow-visible'>
                        <table className='w-[600px] px-4'>

                            <thead>
                                <tr className=''>
                                    <th className='min-w-[60px]  text-left px-1 py-3 text-[#030229] text-[14px] font-semibold'>Date Created</th>
                                    <th className='min-w-[170px]  text-left px-1 py-3 text-[#030229] text-[14px] font-semibold'>Reason</th>
                                    <th className='min-w-[30px]  text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Cost</th>
                                    <th className='min-w-[80px]  text-left px-1 py-3 text-[#030229] text-[14px] font-semibold'>Balance Before</th>
                                    <th className='min-w-[70px]  text-left px-0 py-3 text-[#030229] text-[14px] font-semibold'>Balance After</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    tabledata.map((item, index) => (
                                        <tr className='bg-white'>
                                            <td className='max-w-[60px]  px-1 py-3 text-[#323C47] text-[13px] font-normal'>{item.taskid}</td>
                                            <td className='max-w-[200px]  px-1 py-3 text-[#323C47] text-[13px] font-normal'>{item.taskName}</td>
                                            <td className='max-w-[30px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.totalEMail}</td>
                                            <td className='max-w-[50px] text-center  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.status}</td>
                                            <td className='max-w-[60px] text-right px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.dateStarted}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <PlotArea/> */}
                <div className='w-[400px] h-[310px] bg-white rounded-xl'>
                    <div className='flex items-center justify-between bg-white px-4 pt-4 pt-2 rounded-lg'>
                        <h1 className='text-[#030229] text-[18px] font-black'>Lifetime Usage</h1>
                        <div className='border rounded-full px-3 py-1.5'>
                            <select
                                name="year"
                                id="yearDropdown"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className='focus:outline-none text-[12px] font-semibold'
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='px-6 pb-2'>
                        <DonutChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
