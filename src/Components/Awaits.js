import React from 'react'
import Free_Demo from './Free_Demo'
import Image from 'next/image';
function Awaits() {
    return (
        <div className='Awaits border-b'>
            <div className='container_x'>
                <div className='Awaits_box relative'>
                <Image
                        className="w-auto md:absolute relative top-0 right-0"
                        src="/Image/Features/Awaits2.png"
                        alt="logos"
                        width={422}
                        height={457}
                    />
                    <h2 className='font-semibold md:mb-12 '>Smarter healthcare, simpler solutions. Free demo awaits!</h2>
                    <Free_Demo title="Get a free demo" />
                </div>
            </div>
        </div>
    )
}

export default Awaits
