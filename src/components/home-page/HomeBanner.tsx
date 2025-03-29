import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const HomeBanner = () => {
    return (
        <>
            <div className="bg-[url('/homeBgImg.png')] h-[956px] lg:max-w-5xl w-full bg-cover bg-center mx-auto relative">
            </div>

            <div className="absolute top-24 lg:top-[22%] left-1/2 transform -translate-x-1/2 w-full px-4 lg:px-0">
                <div className="w-full lg:w-[64rem] mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
                    {/* Left Section */}
                    <div className="w-full lg:w-[602px] text-center lg:text-left">
                        <h1 className="text-3xl lg:text-6xl text-[#000030] font-bold leading-tight">
                            Milly & Rio
                        </h1>
                        <p className="text-xl lg:text-2xl text-[#000030] mt-2">
                            Adventures in learning, friendship & discovering!
                        </p>
                        <div className="mt-6 lg:mt-16 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6">
                            <Button className="w-full lg:w-[286px] rounded-4xl text-white text-lg lg:text-xl font-bold hover:text-[#FFC107] hover:bg-white" variant={"gold"}>
                                Explore books
                            </Button>
                            <Button className="w-full lg:w-[286px] rounded-4xl bg-white text-[#000030] text-lg lg:text-xl font-bold hover:text-[#FFC107]">
                                Fun activities
                            </Button>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="mt-8 lg:mt-0">
                        <Image
                            className="rounded-full object-contain w-[300px] md:w-[450px] lg:w-[610px] h-auto"
                            src={"/homeImg1.png"}
                            width={610}
                            height={610}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
