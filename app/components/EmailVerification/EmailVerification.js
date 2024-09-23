"use client"; 
import React, { useState } from 'react'
import StartVerificationSVG from '../SVGs/StartVerificationSVG'
import UploadVerificationSVG from '../SVGs/UploadVerificationSVG'

function EmailVerification() {

    const [task , settask] = useState();
    const [email , setemail] = useState();

    // console.log(task)
    // console.log(email)


    return (
        <div className='flex lg:flex-row flex-col items-center space-x-8 mx-6 mt-8'>
            <div className='min-w-[510px] max-h-[571px] bg-white px-10 rounded-3xl py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[#030229] text-[18px] font-black '>Option 1: Upload File For Verification</h1>

                    <div className='mt-10'>
                        <UploadVerificationSVG />
                    </div>
                    <div className=' w-[309px] h-[98px] py-6 px-2.5 bg-[#F6F6F6] rounded-xl'>
                        <p className='text-[#030229] text-[12px] font-semibold'>The Supported File Formats Are TXT And CSV.The TXT File Can Contain Only Email Adresses And The CSV File Can Contain multiple data columns.</p>
                    </div>

                    <h1 className='text-[#030229] text-[16px] font-semibold mt-6'>Upload</h1>

                    <div class=" rounded-full mt-4">
                        <label class="px-10 py-4 text-sm font-medium text-blue-900 bg-gray-200 rounded-l-xl cursor-pointer">
                            Choose File
                            <input type="file" class="hidden" />
                        </label>
                        <span class="px-6 py-4 text-sm text-blue-900 bg-[#F6F6F6] rounded-r-xl">
                            No File Chosen
                        </span>
                    </div>

                    <div className='flex mt-8 w-[297px]'>
                        <input type="checkbox" className='' />
                        <div className='ml-2'>
                            <p className='text-[#030229] text-[14px] font-semibold'>Remove duplicate rows (only if all the columns are same.)</p>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center space-x-2 bg-primary px-20 py-3 rounded-xl mt-4'>
                        <StartVerificationSVG />
                        <div>
                            <button className='text-[14px] text-[#030229] font-semibold'>Start Verification</button>
                        </div>

                    </div>
                </div>

            </div>

            {/* Second Box */}

            <div className='minw-[510px] h-[571px] bg-white px-10 rounded-3xl'>
                <div className='flex flex-col items-center mx-4'>
                    <h1 className='text-[#030229] text-[18px] font-black mt-10'>Option 2: Direct Submit Email Addresses</h1>

                    <form action="" className='flex flex-col items-center border w-[380px]'>
                    <label htmlFor="" className='text-[#030229] text-[18px] font-semibold mt-12'>Task Name</label>
                    <div className='border border-[#9A9AA9] px-6 py-3 w-full rounded-xl'>
                        <input type="text" className='focus:outline-none' placeholder='Enter a name' value={task} onChange={(e) => settask(e.target.value)}/>
                    </div>
                    

                    <label htmlFor="" className='text-[#030229] text-[18px] font-semibold mt-12'>Email Addresses</label>
                    <div className='border border-[#9A9AA9] px-6 py-4 w-full rounded-xl'>
                        <textarea name="" id="" cols="38" rows="6" placeholder='Enter email address one per line' className='focus:outline-none resize-none' value={email} onChange={(e) => setemail(e.target.value)}></textarea>
                    </div>


                    <div className=' flex justify-center items-center space-x-2 bg-primary px-20 py-3 rounded-xl mt-9'>
                        <StartVerificationSVG />
                        <div>
                            <button className='text-[14px] text-[#030229] font-semibold'>Start Verification</button>
                        </div>

                    </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EmailVerification
