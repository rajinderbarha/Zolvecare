import React from 'react'
import Image from 'next/image';
function Benner() {
    return (
        <>
            <div className='benner_Home'>
                <div className='Beener-bg'>
                    <div className='container_benner'>
                        <div className='Benner_intro'>
                            <h1 className='mb-4 text-center font-semibold'>Revolutionizing Healthcare through AI-Powered Automation of Medical Documentation</h1>
                            <p className='font-medium text-center'>Zolvecare aims to revolutionize healthcare by introducing an AI-driven solution focusing on automating medical documentation.</p>
                        </div>
                        <div className='Benner_img'>

                            <Image
                                className=" w-full mx-auto"
                                src="/Image/Benner_home.png"
                                alt="logos"
                                width={996}
                                height={721}
                            />
                        </div>
                        <div className='benner_blenk'>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Benner
