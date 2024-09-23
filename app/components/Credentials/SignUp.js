import React from 'react'
import SignUpSVG from '../SVGs/SignUpSVG'
import GoogleLogoSVG from '../SVGs/GoogleLogoSVG'
import FacebookLogoSVG from '../SVGs/FacebookLogoSVG'
import MicrosoftLogoSVG from '../SVGs/MicrosoftLogoSVG'

function SignUp() {

    
    return (
        <div className='w-full bg-[#F5F5F5] lg:flex space-x-16'>
            <div className='lg:w-[448px] w-full bg-white flex justify-center px-8 '>
                <div className='mt-10'>
                <h1 className='text-center text-[22px] font-semibold mt-12 mb-16'>inbo<span className='text-[22px] font-extrabold'>x</span><span className='text-primary'>automation</span></h1>
                    <h1 className='text-center text-[24px] font-semibold mt-16'>Sign Up</h1>

                    <div className='flex md:flex-row flex-col items-center md:space-x-6 md:space-y-0 space-y-4 mt-8'>
                        <div className='flex items-center w-[164px] bg-[#F5F5F5] space-x-4 px-8 py-4 rounded-xl'>
                            <GoogleLogoSVG />
                            <button>Google</button>
                        </div>

                        <div className='flex items-center w-[164px] bg-[#F5F5F5] space-x-4 px-8 py-4 rounded-xl'>
                            <MicrosoftLogoSVG/>
                            <button>Facebook</button>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4 mt-6 '>
                        <div>
                            <hr className='w-[150px]' />
                        </div>
                        <div>
                            <p className='font-semibold'>Or</p>
                        </div>
                        <div>
                            <hr className='w-[150px]' />
                        </div>
                    </div>

                    <form action="">
                        <div>
                            <label htmlFor="" className='block mb-2 text-[#030229]'>Full Name</label>
                            <input type="text" className='w-full px-4 py-3 rounded-lg focus:outline-none bg-[#F5F5F5]' placeholder='Saad' />
                        </div>

                        <div className='mt-6'>
                            <label htmlFor="" className='block mb-2 text-[#030229]'>Email Address</label>
                            <input type="email" className='w-full px-4 py-3 rounded-lg focus:outline-none bg-[#F5F5F5]' placeholder='Saadjaved5907@gmail.com' />
                        </div>

                        <div className='mt-6'>
                            <label htmlFor="" className='block mb-2 text-[#030229]'>User Name</label>
                            <input type="email" className='w-full px-4 py-3 rounded-lg focus:outline-none bg-[#F5F5F5]' placeholder='Saad Javed' />
                        </div>

                        <div className='mt-6'>
                            <label htmlFor="" className='block mb-2 text-[#030229]'>Password</label>
                            <input type="password" className='w-full px-4 py-3 rounded-lg focus:outline-none bg-[#F5F5F5]' placeholder='******************' />
                        </div>

                        <div className='flex items-start mt-6'>
                            <input type="checkbox" className='mt-1' />
                            <div className='ml-2'>
                                <p>By creating an account you agree to the <br />  <a href='/terms-of-use' className='text-primary underline'> terms of use </a> and our <a href='/privacy-policy' className='text-primary underline'> privacy policy.</a></p>
                            </div>
                        </div>

                        <div className='mt-6  bg-primary rounded-lg w-full text-center px-6 py-3'>
                            <button className='font-medium'>Create account</button>
                        </div>

                        <div className='mt-6 text-center mb-10'>
                            <p>Already have an account? <a href='/login' className='text-primary'>Login</a></p>
                        </div>
                    </form>


                </div>
            </div>

            <div className='w-[657px] h-[492px] mt-40 lg:flex lg:items-center lg:justify-center hidden lg:block'>
                <SignUpSVG />
            </div>

        </div>
    )
}

export default SignUp
