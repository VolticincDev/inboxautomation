import React from 'react'
import GoIconSVG from '../SVGs/GoIconSVG'

function AddCredits() {

    const lightusage = [
        { price: 2.95, amountofvalidation: 1000, peremail: 0.00295, },
        { price: 5.95, amountofvalidation: 5000, peremail: 0.00119, },
        { price: 9.95, amountofvalidation: 10000, peremail: 0.000995, },
        { price: 23.95, amountofvalidation: 25000, peremail: 0.000958, },
    ]

    const heavyusage = [
        { price: 2.95, amountofvalidation: 1000, peremail: 0.00295, },
        { price: 5.95, amountofvalidation: 5000, peremail: 0.00119, },
        { price: 9.95, amountofvalidation: 10000, peremail: 0.000995, },
        { price: 23.95, amountofvalidation: 25000, peremail: 0.000958, },
    ]

    const enterpriseusage = [
        { price: 2.95, amountofvalidation: 1000, peremail: 0.00295, },
        { price: 5.95, amountofvalidation: 5000, peremail: 0.00119, },
    ]

    return (
        <div className='mt-20 mb-20 ml-6'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 ml-2 md:ml-0 '>
            {/*grid grid-cols-3 gap-x-2 gap-y-16 */}
                <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl shadow-xl'>
                    {
                        lightusage.map((item, index) => (
                            <div className='pt-10'>
                                <div className='bg-primary text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
                                    <h2 className='px-3'>${item.price}</h2>
                                </div>
                                <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
                                    <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
                                        <p>{item.amountofvalidation} Email Validation</p>
                                        <p>1 email = ${item.peremail}</p>
                                    </div>
                                    <div className='border-l border-[#030229] h-14 ml-14'/>
                                    <div className='px-6 py-2'>
                                        <GoIconSVG />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='absolute top-[-25px] z-30 left-24 bg-primary px-5 py-3 rounded-2xl'>
                        <h1>Light Usage</h1>
                    </div>
                </div>

                <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl'>
                    {
                        heavyusage.map((item, index) => (
                            <div className='pt-10'>
                                <div className='bg-[#FF6B6B] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
                                    <h2 className='px-3'>${item.price}</h2>
                                </div>
                                <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
                                    <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
                                        <p>{item.amountofvalidation} Email Validation</p>
                                        <p>1 email = ${item.peremail}</p>
                                    </div>
                                    <div className='border-l border-[#030229] h-14 ml-14' />
                                    <div className='px-6 py-2'>
                                        <GoIconSVG />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='absolute top-[-25px] z-30 left-24 bg-[#FF6B6B] px-5 py-3 rounded-2xl'>
                        <h1>Heavy Usage</h1>
                    </div>
                </div>


                <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl shadow-xl'>
                    {
                        heavyusage.map((item, index) => (
                            <div className='pt-10'>
                                <div className='bg-[#FF8C62] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
                                    <h2 className='px-3'>${item.price}</h2>
                                </div>
                                <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
                                    <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
                                        <p>{item.amountofvalidation} Email Validation</p>
                                        <p>1 email = ${item.peremail}</p>
                                    </div>
                                    <div className='border-l border-[#030229] h-14 ml-14' />
                                    <div className='px-6 py-2'>
                                        <GoIconSVG />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='absolute top-[-25px] z-30 left-24 bg-[#FF8C62] px-5 py-3 rounded-2xl'>
                        <h1>Average Usage</h1>
                    </div>
                </div>


                {/* <div className='relative max-w-[333px] min-h-[356px] bg-white rounded-2xl xl:col-span-3 xl:justify-self-center pt-4 pb-10'>
                    {
                        enterpriseusage.map((item, index) => (
                            <div className='pt-6'>
                                <div className='bg-[#AD44FF] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl shadow-xl'>
                                    <h2 className='px-3'>${item.price}</h2>
                                </div>
                                <div className={`${index === enterpriseusage.length - 1 ? '' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
                                    <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
                                        <p>{item.amountofvalidation} Email Validation</p>
                                        <p>1 email = ${item.peremail}</p>
                                    </div>
                                    <div className='border-l border-[#030229] h-14 ml-14' />
                                    <div className='px-6 py-2'>
                                        <GoIconSVG />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='absolute top-[-25px] z-30 left-20 bg-[#AD44FF] px-5 py-3 rounded-2xl'>
                        <h1>Enterprise Usage</h1>
                    </div>
                </div> */}

            </div>

        </div>
        // <div className='mt-20 mb-20 ml-6'>
        //     <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 ml-2 sm:ml-0'>
        //         {/* Light Usage */}
        //         <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl shadow-xl'>
        //             {
        //                 lightusage.map((item, index) => (
        //                     <div className='pt-10' key={index}>
        //                         <div className='bg-primary text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
        //                             <h2 className='px-3'>${item.price}</h2>
        //                         </div>
        //                         <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
        //                             <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
        //                                 <p>{item.amountofvalidation} Email Validation</p>
        //                                 <p>1 email = ${item.peremail}</p>
        //                             </div>
        //                             <div className='border-l border-[#030229] h-14 ml-14' />
        //                             <div className='px-6 py-2'>
        //                                 <GoIconSVG />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             }
        //             <div className='absolute top-[-25px] z-30 left-24 bg-primary px-5 py-3 rounded-2xl'>
        //                 <h1>Light Usage</h1>
        //             </div>
        //         </div>

        //         {/* Heavy Usage */}
        //         <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl'>
        //             {
        //                 heavyusage.map((item, index) => (
        //                     <div className='pt-10' key={index}>
        //                         <div className='bg-[#FF6B6B] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
        //                             <h2 className='px-3'>${item.price}</h2>
        //                         </div>
        //                         <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
        //                             <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
        //                                 <p>{item.amountofvalidation} Email Validation</p>
        //                                 <p>1 email = ${item.peremail}</p>
        //                             </div>
        //                             <div className='border-l border-[#030229] h-14 ml-14' />
        //                             <div className='px-6 py-2'>
        //                                 <GoIconSVG />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             }
        //             <div className='absolute top-[-25px] z-30 left-24 bg-[#FF6B6B] px-5 py-3 rounded-2xl'>
        //                 <h1>Heavy Usage</h1>
        //             </div>
        //         </div>

        //         {/* Average Usage */}
        //         <div className='relative min-w-[333px] max-w-[333px] h-[446px] bg-white rounded-2xl shadow-xl'>
        //             {
        //                 heavyusage.map((item, index) => (
        //                     <div className='pt-10' key={index}>
        //                         <div className='bg-[#FF8C62] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl'>
        //                             <h2 className='px-3'>${item.price}</h2>
        //                         </div>
        //                         <div className={`${index === lightusage.length - 1 ? 'rounded-b-2xl' : ''} bg-[#F7F7F8] flex items-center justify-between max-w-[333px] `}>
        //                             <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
        //                                 <p>{item.amountofvalidation} Email Validation</p>
        //                                 <p>1 email = ${item.peremail}</p>
        //                             </div>
        //                             <div className='border-l border-[#030229] h-14 ml-14' />
        //                             <div className='px-6 py-2'>
        //                                 <GoIconSVG />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             }
        //             <div className='absolute top-[-25px] z-30 left-24 bg-[#FF8C62] px-5 py-3 rounded-2xl'>
        //                 <h1>Average Usage</h1>
        //             </div>
        //         </div>

        //         {/* Enterprise Usage */}
        //         <div className='relative max-w-[333px] min-h-[356px] bg-white rounded-2xl xl:col-span-3 xl:justify-self-center pt-4 pb-10'>
        //             {
        //                 enterpriseusage.map((item, index) => (
        //                     <div className='pt-6' key={index}>
        //                         <div className='bg-[#AD44FF] text-[14px] font-semibold w-[84px] h-[18px] rounded-t-2xl shadow-xl'>
        //                             <h2 className='px-3'>${item.price}</h2>
        //                         </div>
        //                         <div className='bg-[#F7F7F8] flex items-center justify-between max-w-[333px]'>
        //                             <div className='text-[#030229] text-[14px] font-semibold px-6 py-2'>
        //                                 <p>{item.amountofvalidation} Email Validation</p>
        //                                 <p>1 email = ${item.peremail}</p>
        //                             </div>
        //                             <div className='border-l border-[#030229] h-14 ml-14' />
        //                             <div className='px-6 py-2'>
        //                                 <GoIconSVG />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             }
        //             <div className='absolute top-[-25px] z-30 left-20 bg-[#AD44FF] px-5 py-3 rounded-2xl'>
        //                 <h1>Enterprise Usage</h1>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default AddCredits
