import React, { useState } from 'react'
import LinkIconSVG from '../SVGs/LinkIconSVG';
import ProfilePic2SVG from '../SVGs/ProfilePic2SVG';

function ProfileSettings() {

    const [submitmodel, setSubmitmodel] = useState(false);


    const OpenSafeModel = () => {
        setSubmitmodel((prev) => !prev);
    }



    return (
        <div className='mb-10' >
            <div className=' md:min-w-[1000px] bg-white mt-5 md:mt-0 ml-6 md:ml-20 mr-6 md:mr-14 rounded-xl'>
                <div>
                    <div className='flex justify-between items-center px-4 md:px-10 pt-6'>
                        <h1 className='text-[#030229] text-[18px] font-black'>General Information</h1>
                        <div>
                            <button className='bg-primary text-[#030229] text-[10px] font-semibold px-6 py-1.5 rounded-lg' onClick={OpenSafeModel}>Save All</button>
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:items-center md:space-x-24 px-4 md:px-10 py-6'>
                        <div className='md:space-y-10 space-y-5'>
                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Profile Name</label>
                                <input type="text" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='M Saad' />
                            </div>

                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Email</label>
                                <input type="email" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad@gmail.com' />
                            </div>
                        </div>
                        {/* 2nd Row */}
                        <div className='md:space-y-10 space-y-5 md:mt-0 mt-5 '>
                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Last Name</label>
                                <input type="text" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>

                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Phone</label>
                                <input type="number" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='w-full hidden lg:block' />

                <div>
                    <div className='flex justify-between items-center px-4 md:px-10 pt-4'>
                        <h1 className='text-[#030229] text-[18px] font-black'>Update Password</h1>
                    </div>

                    <div className='flex md:flex-row flex-col md:items-center md:space-x-24 px-4 md:px-10 py-6'>
                        <div className='md:space-y-10 space-y-5'>
                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Profile Name</label>
                                <input type="text" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='M Saad' />
                            </div>

                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Email</label>
                                <input type="email" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad@gmail.com' />
                            </div>
                        </div>
                        {/* 2nd Row */}
                        <div className='md:space-y-10 space-y-5 md:mt-0 mt-5'>
                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Last Name</label>
                                <input type="text" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>

                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Phone</label>
                                <input type="number" className='w-full md:min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[490px] ml-6 md:ml-20 mr-6 md:mr-0 px-6 py-6 bg-white mt-5 rounded-lg'>
                <h1 className='text-[18px] texxt-[#030229] font-black text-center'>Change Profile Picture</h1>
                <div className='flex lg:flex-row flex-col items-center md:space-x-5  mt-4'>
                    <div>
                        <ProfilePic2SVG />
                    </div>
                    <div>
                        <LinkIconSVG />
                    </div>
                    <div>
                        <h1 className='text-[#4F4E69] text-[18px] font-black md:text-left text-center'>Set Profile Picture</h1>
                        <h1 className='text-[#4F4E69] text-[18px] font-black'>PNG Or JPG Format Image</h1>
                    </div>
                </div>
            </div>

            {submitmodel && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50' onClick={(e) => { e.stopPropagation(); OpenSafeModel() }}>
                    <div className='bg-white rounded-lg w-[500px] border border-gray-500' onClick={(e) => e.stopPropagation()}>
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
                                <button className='px-10 py-2 bg-primary border border-[#D0D5DD] text-[#000000] rounded-md' onClick={(e) => OpenSafeModel()}>Cancel</button>
                                <button className='px-6 py-2 text-white bg-[#030229] rounded-lg' >Stay Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileSettings
