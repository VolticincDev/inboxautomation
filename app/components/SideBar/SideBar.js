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
import './SideBar.css'
import EmailVerification from '../EmailVerification/EmailVerification'
import Task_and_Result from '../Task&Result/Task_and_Result';
import AddCredits from '../Add Credits/AddCredits';
import ProfileSettings from '../ProfileSetting/ProfileSettings';
import Dashboard from '../DashBoard/Dashboard';

function SideBar() {

    const [verifyEmail, setVerifyEmail] = useState();
    const [verifymodel, setVerifyModel] = useState(false);
    const [safemodel, setSafeModel] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Dashboard');


    const OpenVerifyModel = () => {
        setVerifyModel((prev) => !prev);
    }

    const OpenSafeModel = () => {
        setSafeModel((prev) => !prev);
    }

    console.log(verifyEmail)

    const sidebar = [
        { logo: <DashBoardIconSVG />, title: 'Dashboard', component: 'Dashboard' },
        { logo: <EmailVerifyIconSVG />, title: 'Email Verification', component: 'EmailVerification' },
        { logo: <TaskResultIconSVG />, title: 'Task & Result', component: 'Task_and_Result' },
        { logo: <ApiIntegrationIconSVG />, title: 'Api & Integration', component: 'Task_and_Result' },
        { logo: <SettingIconSVG />, title: 'Setting', component: 'ProfileSettings' },
    ]

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'EmailVerification':
                return <EmailVerification />;
            case 'Task_and_Result':
                return <Task_and_Result />;
            case 'AddCredits':
                return <AddCredits />;
            case 'ProfileSettings':
                return <ProfileSettings />;
            default:
                return <Dashboard />;
        }
    };


    return (
        <nav>
            <div className='flex'>
                <div className={`max-w-[265px] flex-shrink-0 flex flex-col justify-between h-screen overflow-y-auto hide-scrollbar
                            fixed lg:relative z-50 lg:z-auto transform lg:translate-x-0 
                            transition-transform duration-300 ease-in-out lg:max-w-[265px]
                            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white`}>
                    <div className=''>
                        <h1 onClick={() => setSidebarOpen(!sidebarOpen)} className='text-center text-[22px] font-sans font-semibold mt-12 mb-16 cursor-pointer'>inbo<span className='text-[22px] font-extrabold'>x</span><span className='text-primary'>automation</span></h1>
                        <div className=''>
                            {
                                sidebar.map((item, index) => (
                                    <li key={index} className='flex items-center space-x-2  py-4 pl-6 pr-2 hover:bg-gradient-to-r hover:from-gray-200 hover:via-transparent hover:to-transparent' onClick={() => setActiveComponent(item.component)}>
                                        {item.logo}
                                        <button className='text-[#9A9AA9] text-[16px] font-extrabold'>{item.title}</button>
                                    </li>
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
                                <h1 className='text-[12px] text-[#030229] font-sans font-semibold'>Saad Javed</h1>
                                <h3 className='text-[10px] text-[#030229] font-sans font-semibold'>See Profile</h3>
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
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-black">
                            {/* Hamburger icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        <h1 className='text-[#030229] text-[24px] font-black '>{activeComponent}</h1>

                        <div className='flex items-center'>
                            <div className='bg-white px-4 py-2.5 rounded-l-lg'>
                                <input type="text" name="" id="" placeholder='Enter Email Address' className='focus:outline-none' value={verifyEmail} onChange={(e) => setVerifyEmail(e.target.value)} />
                            </div>
                            <button className='bg-primary text-[15px] text-[#323C47] font-semibold px-4 py-3 rounded-r-lg' onClick={OpenVerifyModel}>Verify</button>
                        </div>



                        {verifymodel && (
                            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={OpenVerifyModel}>
                                <div className='bg-white rounded-lg w-[500px]' onClick={(e) => e.stopPropagation()}>
                                    <div className='py-6 px-20'>
                                        <div className='flex items-center justify-center mb-4'>
                                            <div className=''>
                                                <h1 className='text-[42px] text-[#030229] font-semibold '>Verifiying</h1>
                                            </div>
                                            {/* <button className='font-bold' onClick={() => setVerifyModel(false)}>&#10005;</button> */}
                                        </div>
                                        <h3 className='w-[340px] text-[#030229] text-[18px] font-normal mb-4'>
                                            We are verifiying your provided email address saadjaved5907@gmail.com as fast as possible.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )}

                        {safemodel && (
                            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                                <div className='bg-white rounded-lg w-[500px]'>
                                    <div className='py-6 px-20'>
                                        <div className='flex items-center justify-center mb-4'>
                                            <div className=''>
                                                <h1 className='text-[32px] text-[#030229] font-semibold '>Emails Successfully</h1>
                                                <h1 className='text-[32px] text-[#030229] font-semibold text-center'>Submitted</h1>
                                            </div>
                                            {/* <button className='font-bold' onClick={() => setVerifyModel(false)}>&#10005;</button> */}
                                        </div>
                                        <h3 className='w-[330px] text-[#030229] text-[18px] font-normal mb-4'>
                                            You have sucessfully submitted the emails.Now the verification will start automatically within few moments. Please note that, the required credits has been deducted from your account. However, after the verifcation completes, you will get credits refund for all the emails with “unknown” status.
                                        </h3>
                                        <div className='flex items-center space-x-3 px-6'>
                                            <button className='px-10 py-2 bg-primary border border-[#D0D5DD] text-[#000000] rounded-md'>Cancel</button>
                                            <button className='px-6 py-2 text-white bg-[#030229] rounded-lg'>Stay Here</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    <div className='w-full h-full overflow-y-auto hide-scrollbar' onClick={() => setVerifyModel(false)}>

                        {
                            renderComponent()
                        }
                        {/* <EmailVerification/> */}
                        {/* <Task_and_Result/> */}
                        {/* <AddCredits/> */}
                        {/* <ProfileSettings/> */}
                        {/* <Dashboard /> */}
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default SideBar
