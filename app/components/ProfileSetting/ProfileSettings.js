import React from 'react'

function ProfileSettings() {
    return (
        <div className='mb-10'>
            <div className='min-w-[1000px] bg-white ml-20 mr-14 rounded-xl'>
                <div>
                    <div className='flex justify-between items-center px-10 pt-6'>
                        <h1 className='text-[#030229] text-[18px] font-black'>General Information</h1>
                        <div>
                            <button className='bg-primary text-[#030229] text-[10px] font-semibold px-6 py-1.5 rounded-lg'>Save All</button>
                        </div>
                    </div>

                    <div className='flex items-center space-x-24 px-10 py-6'>
                        <div className='space-y-10'>
                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Profile Name</label>
                                <input type="text" className='min-w-[360px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='M Saad' />
                            </div>

                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Email</label>
                                <input type="email" className='min-w-[360px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad@gmail.com' />
                            </div>
                        </div>
                        {/* 2nd Row */}
                        <div className='space-y-10'>
                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Last Name</label>
                                <input type="text" className='min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>

                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Phone</label>
                                <input type="number" className='min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>
                        </div>
                    </div>
                </div>

                <hr  className='w-full'/>

                <div>
                    <div className='flex justify-between items-center px-10 pt-4'>
                        <h1 className='text-[#030229] text-[18px] font-black'>Update Password</h1> 
                    </div>

                    <div className='flex items-center space-x-24 px-10 py-6'>
                        <div className='space-y-10'>
                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Profile Name</label>
                                <input type="text" className='min-w-[360px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='M Saad' />
                            </div>

                            <div className=''>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Email</label>
                                <input type="email" className='min-w-[360px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad@gmail.com' />
                            </div>
                        </div>
                        {/* 2nd Row */}
                        <div className='space-y-10'>
                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Last Name</label>
                                <input type="text" className='min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>

                            <div>
                                <label htmlFor="" className='block mb-2 text-[#030229] text-[12px] font-black'>Phone</label>
                                <input type="number" className='min-w-[380px] px-4 py-2 rounded-xl focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
