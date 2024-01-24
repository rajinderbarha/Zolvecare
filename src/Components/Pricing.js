import React from 'react'

function Pricing() {
    return (
        <div className='Pricing'>
            <div className='container_x'>
                <h2 className='font-semibold md:mb-16 text-center mb-8'>Explore our flexible pricing plans</h2>

                <div className='  grid items-center md:gap-8 gap-4 md:grid-cols-3 grid-cols-1'>
                    <div className='Pricing_box'>
                        <h4 className='font-semibold py-4 px-6'>Starter Plan</h4>
                        <div className='md:p-8 p-6'>
                            <h3 className='font-semibold mb-4'>$0.00</h3>
                            <p className='pb-4 border-b font-normal'>Kickstart your healthcare journey with Zolvecare's Starter Plan: easy-to-use interface, basic documentation features, all at zero cost.</p>
                            <h5 className='font-semibold my-4'>Access to:</h5>
                            <ul className='pricing_list pb-4 border-b mb-4'>
                                <li>User-Friendly Interface</li>
                                <li>Basic Medical Documentation</li>
                                <li>Secure Data Storage</li>
                                <li> Task Management</li>
                                <li>Limited Access Users</li>
                                <li>No Initial Cost</li>

                            </ul>
                            <button className='pricing_free_start font-medium'> Get started for free</button>
                        </div>
                    </div>
                    <div className='Pricing_box_2 '>
                        <h4 className='font-semibold py-4 px-6'>Professional Plan</h4>
                        <div className='md:p-8 p-6'>
                            <h3 className='font-semibold mb-4'>$99.00/mo</h3>
                            <p className='pb-4 border-b font-normal'>Zolvecare's Professional Plan empowers healthcare teams with advanced documentation, collaboration, and analytics tools, ensuring seamless patient care and practice optimization.</p>
                            <h5 className='font-semibold my-4'>Everything in Starter+</h5>
                            <ul className='pricing_list pb-4 border-b mb-4'>
                                <li>User-Friendly Interface</li>
                                <li>Basic Medical Documentation</li>
                                <li>Secure Data Storage</li>
                                <li> Task Management</li>
                                <li>Advanced Medical Documentation</li>
                                <li>Team Collaboration Tools</li>
                                <li>Team Collaboration Tools</li>
                                <li>Customizable Templates</li>
                                <li>Priority Customer Support</li>
                                <li>Mobile Accessibility and Flexibility</li>
                            </ul>
                            <button className='pricing_free_start font-medium'> Get started for free</button>
                        </div>
                    </div>
                    <div className='Pricing_box'>
                        <h4 className='font-semibold py-4 px-6'>Starter Plan</h4>
                        <div className='md:p-8 p-6'>
                            <h3 className='font-semibold mb-4'>$0.00</h3>
                            <p className='pb-4 border-b font-normal'>Tailor Zolvecare to fit your unique needs with the Custom Plan: personalized features, flexible workflows, and budget-friendly pricing.</p>
                            <h5 className='font-semibold my-4'>Access to:</h5>
                            <ul className='pricing_list pb-4 border-b mb-4'>
                                <li>Personalized Feature Selection</li>
                                <li>Flexible User Access</li>
                                <li>Customizable Workflows</li>
                                <li> Specialized Support</li>
                                <li>Integration Options</li>
                                <li>Budget-Friendly Pricing</li>

                            </ul>
                            <button className='pricing_free_start font-medium'> Get started for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
