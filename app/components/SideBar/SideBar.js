"use client"; 
import React, { useState } from 'react'
import DashBoardIconSVG from '../SVGs/DashBoardIconSVG'
import EmailVerifyIconSVG from '../SVGs/EmailVerifyIconSVG'
import TaskResultIconSVG from '../SVGs/TaskResultIconSVG'
import ApiIntegrationIconSVG from '../SVGs/ApiIntegrationIconSVG'
import SettingIconSVG from '../SVGs/SettingIconSVG'
import CreditIconSVG from '../SVGs/CreditIconSVG'
import ProfilePicSVG from '../SVGs/ProfilePicSVG'
import LogoutIconSVG from '../SVGs/LogoutIconSVG'
import './Sidebar.css'
import EmailVerification from '../EmailVerification/EmailVerification'
import Task_and_Result from '../Task&Result/Task_and_Result';
import AddCredits from '../Add Credits/AddCredits';
import ProfileSettings from '../ProfileSetting/ProfileSettings';
import Dashboard from '../DashBoard/Dashboard';

function SideBar() {

    const [verifyEmail , setVerifyEmail] = useState();

    console.log(verifyEmail)

    const sidebar = [
        { logo: <DashBoardIconSVG />, title: 'Dashboard' },
        { logo: <EmailVerifyIconSVG />, title: 'Email Verification' },
        { logo: <TaskResultIconSVG />, title: 'Task & Result' },
        { logo: <ApiIntegrationIconSVG />, title: 'Api & Integration' },
        { logo: <SettingIconSVG />, title: 'Setting' },
    ]
    return (
        <nav>
            <div className='flex'>
                <div className='max-w-[265px] flex-shrink-0 flex flex-col justify-between h-screen overflow-y-auto hide-scrollbar'>
                    <div className=''>
                        <h1 className='text-center text-[22px] font-semibold mt-12 mb-16'>inbo<span className='text-[22px] font-extrabold'>x</span><span className='text-primary'>automation</span></h1>
                        <div className=''>
                            {
                                sidebar.map((item, index) => (
                                    <div className='flex items-center space-x-2 hover:bg-gray-500 py-4 pl-6 pr-2'>
                                        {item.logo}
                                        <button className='text-[#9A9AA9] text-[16px] font-extrabold'>{item.title}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='mt-16'>
                        <div className='relative w-[168px] h-[161px] bg-[#F6F6F6] ml-6 rounded-2xl'>
                            {/* <CreditIconSVG /> */}
                            <div className='absolute top-0 right-3 bg-[#08E1D2] w-[145px] h-[110px] rounded-lg'>

                            </div>
                            <div className='px-4 '>
                                <button className='bg-primary text-[15px] text-[#5E5E5E] font-semibold rounded-xl text-center mt-28 w-full py-3'>Add Credits</button>

                            </div>
                        </div>

                        <div className='flex items-center mx-6 space-x-4 mt-10'>
                            <div className=''>
                                <ProfilePicSVG />
                            </div>
                            <div>
                                <h1 className='text-[12px] text-[#030229] font-semibold'>Saad Javed</h1>
                                <h3 className='text-[10px] text-[#030229] font-semibold'>See Profile</h3>
                            </div>
                            <div>
                                <LogoutIconSVG />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sectio for flex */}
                <div className='w-full flex flex-col h-screen bg-gray-100'>
                    <div className='flex justify-between items-center mt-11 px-6 mb-2'>
                        <h1 className='text-[#030229] text-[24px] font-black '>Profile Settings</h1>
                        <div className='flex items-center'>
                            <div className='bg-white px-4 py-2.5 rounded-l-lg'>
                                <input type="text" name="" id="" placeholder='Enter Email Address' className='focus:outline-none' value={verifyEmail} onChange={(e) => setVerifyEmail(e.target.value)}/>
                            </div>
                            <button className='bg-primary text-[15px] text-[#323C47] font-semibold px-4 py-3 rounded-r-lg'>Verify</button>
                        </div>
                    </div>

                    <div className='w-full h-full overflow-y-auto hide-scrollbar'>
                        {/* <EmailVerification/> */}
                        {/* <Task_and_Result/> */}
                        {/* <AddCredits/> */}
                        {/* <ProfileSettings/> */}
                        <Dashboard/>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default SideBar
