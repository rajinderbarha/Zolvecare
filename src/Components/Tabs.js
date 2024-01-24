import React from 'react'
import Image from 'next/image';
import Free_Demo from './Free_Demo'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs";
import {
    Card,
  
} from "./ui/card";

function Tabs_sec() {
    return (
        <div className='Tabs '>
            <div className='container_Tabs'>
                <h2 className='mb-8 mb:md-16 text-center mx-auto font-semibold'>This is how easy it is to use Zolvecare. Easy, Simple and Accurate</h2>

                <Tabs defaultValue="Start_Session" className="  ">
                    <TabsList className="grid tabs_main_btn h-auto w-full mb-6 md:mb-16 md:grid-cols-4 grid-cols-1">
                        <TabsTrigger value="Start_Session">Start Session</TabsTrigger>
                        <TabsTrigger value="Start_Recording">Start Recording</TabsTrigger>
                        <TabsTrigger value="Generated_Summary">Generated Summary</TabsTrigger>
                        <TabsTrigger value="Send_Patient">Send to Patient</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Start_Session">
                        <Card className='border-0 shadow-none'>
                            <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                                <div className='tabs-image'>
                                    <Image
                                        className=" w-full"
                                        src="/Image/Features/tabs_1.png"
                                        alt="logos"
                                        width={256}
                                        height={534}
                                    />
                                </div>
                                <div className='tabs_cont'>
                                    <h3 className='md:mb-5 mb-3 font-semibold'>Initiate Care with Zolvecare Sessions</h3>
                                    <p className='font-normal mb-10'>Initiate your healthcare journey by seamlessly starting a session. With Zolvecare, your patient interactions are organized and accessible in one dedicated space, ensuring a streamlined workflow from the get-go.</p>
                                    <Free_Demo title="Start a demo" />
                                </div>

                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Start_Recording">
                        <Card className='border-0 shadow-none'>
                            <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                                <div className='tabs-image'>
                                    <Image
                                        className=" w-full"
                                        src="/Image/Features/tabs_1.png"
                                        alt="logos"
                                        width={256}
                                        height={534}
                                    />
                                </div>
                                <div className='tabs_cont'>
                                    <h3 className='md:mb-5 mb-3 font-semibold'>2 Initiate Care with Zolvecare Sessions</h3>
                                    <p className='font-normal mb-10'>Initiate your healthcare journey by seamlessly starting a session. With Zolvecare, your patient interactions are organized and accessible in one dedicated space, ensuring a streamlined workflow from the get-go.</p>
                                    <Free_Demo title="Start a demo" />
                                </div>

                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Generated_Summary">
                        <Card className='border-0 shadow-none'>
                            <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                                <div className='tabs-image'>
                                    <Image
                                        className=" w-full"
                                        src="/Image/Features/tabs_1.png"
                                        alt="logos"
                                        width={256}
                                        height={534}
                                    />
                                </div>
                                <div className='tabs_cont'>
                                    <h3 className='md:mb-5 mb-3 font-semibold'>3 Initiate Care with Zolvecare Sessions</h3>
                                    <p className='font-normal mb-10'>Initiate your healthcare journey by seamlessly starting a session. With Zolvecare, your patient interactions are organized and accessible in one dedicated space, ensuring a streamlined workflow from the get-go.</p>
                                    <Free_Demo title="Start a demo" />
                                </div>

                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Send_Patient">
                        <Card className='border-0 shadow-none'>
                            <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                                <div className='tabs-image'>
                                    <Image
                                        className=" w-full"
                                        src="/Image/Features/tabs_1.png"
                                        alt="logos"
                                        width={256}
                                        height={534}
                                    />
                                </div>
                                <div className='tabs_cont'>
                                    <h3 className='md:mb-5 mb-3 font-semibold'>4Initiate Care with Zolvecare Sessions</h3>
                                    <p className='font-normal mb-10'>Initiate your healthcare journey by seamlessly starting a session. With Zolvecare, your patient interactions are organized and accessible in one dedicated space, ensuring a streamlined workflow from the get-go.</p>
                                    <Free_Demo title="Start a demo" />
                                </div>

                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}

export default Tabs_sec
