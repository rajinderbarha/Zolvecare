import React from 'react'
import Image from 'next/image';
function Features() {
    return (
        <div className='Features'>
            <div className='container_x'>
                <h2 className='xl:mb-20 text-center mx-auto font-semibold sm:mb-10'>Revolutionizing Healthcare with Smart Features</h2>
                <div className='Features_box grid md:grid-cols-2 sm:grid-cols-1	 md:gap-y-16 gap-y-12 gap-x-8'>
                    <div className='relative Features_boxs'>
                        <Image
                            className="absolute bottom-0 left-0 w-auto"
                            src="/Image/Features/1.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                         <Image
                            className="mb-4 relative z-10 w-auto"
                            src="/Image/Features/data_capture.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                        <h4 className='mb-4 relative z-10  font-semibold '>Intelligent Data<br/> Capture</h4>
                        <p className='font-normal relative z-10'>Zolvecare employs advanced AI algorithms to intelligently capture and interpret medical data, ensuring accurate and comprehensive documentation.</p>
                    </div>
                    <div className='relative Features_boxs'>
                        <Image
                            className="absolute bottom-0 left-0 w-auto"
                            src="/Image/Features/2.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                         <Image
                            className="mb-4 w-auto relative z-10"
                            src="/Image/Features/Workflow.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                        <h4 className='mb-4  font-semibold relative z-10'>Automated Workflow Management</h4>
                        <p className='font-normal relative z-10'>The app optimizes healthcare workflows by automating routine documentation tasks, allowing healthcare professionals to prioritize patient care.</p>
                    </div>
                    <div className='relative Features_boxs'>
                        <Image
                            className="absolute bottom-0 left-0 w-auto"
                            src="/Image/Features/3.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                         <Image
                            className="mb-4 w-auto relative z-10"
                            src="/Image/Features/regulatory.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                        <h4 className='mb-4 relative z-10 font-semibold '>Regulatory Compliance Assurance</h4>
                        <p className='font-normal relative z-10'>Zolvecare is designed to adhere to stringent healthcare regulations and standards. It provides a secure and compliant platform for medical documentation.</p>
                    </div>
                    <div className='relative Features_boxs'>
                        <Image
                            className="absolute bottom-0  left-0 w-auto"
                            src="/Image/Features/4.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                         <Image
                            className="mb-4 w-auto relative z-10"
                            src="/Image/Features/friendly.svg"
                            alt="logos"
                            width={100}
                            height={100}
                        />
                        <h4 className='mb-4 relative z-10  font-semibold '>Customizable and User-Friendly Interface</h4>
                        <p className='font-normal relative z-10'>Zolvecare offers a user-friendly interface that can be tailored to the specific needs of healthcare professionals and their practices.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Features
