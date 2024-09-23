import React from 'react'
import PreviewIconSVG from '../SVGs/PreviewIconSVG'
import DownloadIconSVG from '../SVGs/DownloadIconSVG'

function Task_and_Result() {

    const tabledata = [
        { taskid: 786687, taskName: 'Test1', totalEMail: 100, status: 'Completed', dateStarted: '12/02/2024', currentprogress: '100%', },
        { taskid: 786687, taskName: 'Test2', totalEMail: 100, status: 'Completed', dateStarted: '12/02/2024', currentprogress: '100%', },
        { taskid: 786687, taskName: 'Test3', totalEMail: 100, status: 'Completed', dateStarted: '12/02/2024', currentprogress: '100%', },
        { taskid: 786687, taskName: 'Test4', totalEMail: 100, status: 'Completed', dateStarted: '12/02/2024', currentprogress: '100%', },
    ]
    return (
        <div className='ml-6 mr-14 py-4'>
            <table className='w-full border-separate' style={{ borderSpacing: '0 8px' }}>
                <thead>
                    <tr className='bg-[#EAEAEA]'>
                        <th className='min-w-[150px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Task ID</th>
                        <th className='min-w-[150px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Task Name</th>
                        <th className='min-w-[110px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Total Email</th>
                        <th className='min-w-[160px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Status</th>
                        <th className='min-w-[180px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Date Started</th>
                        <th className='min-w-[180px] text-left px-2 py-3 text-[#030229] text-[14px] font-semibold'>Current Progress</th>
                        <th className='min-w-[130px] text-left px-3 py-3 text-[#030229] text-[14px] font-semibold'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tabledata.map((item, index) => (
                            <tr className='bg-white'>
                                <td className='max-w-[160px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.taskid}</td>
                                <td className='max-w-[160px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.taskName}</td>
                                <td className='max-w-[118px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.totalEMail}</td>
                                <td className='max-w-[185px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.status}</td>
                                <td className='max-w-[185px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.dateStarted}</td>
                                <td className='max-w-[185px]  px-3 py-3 text-[#323C47] text-[13px] font-normal'>{item.currentprogress}</td>
                                <td className='max-w-[135px]  px-3 py-3 '>
                                    <div className='flex items-center space-x-4'>
                                        <div>
                                            <PreviewIconSVG />
                                        </div>
                                        <div>
                                            <DownloadIconSVG />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Task_and_Result
