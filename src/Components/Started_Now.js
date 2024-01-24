import React from 'react'
import Free_Demo from './Free_Demo'

function Started_Now() {
    return (
        <div className='Started_Now'>
            <div className='container_x'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                    <div>

                    </div>
                    <div className='Started_Btn'>
                        <h2 className='mb-5 font-semibold'>Get Started Now with Zolvecare!</h2>
                        <p className='mb-5 font-normal text-white'>Revolutionize your practice by automating medical documentation, ensuring precision, and optimizing your workflow. Your journey to efficient healthcare starts here!</p>
                        <Free_Demo title="Get a free demo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Started_Now
