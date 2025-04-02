"use client"



import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
const ProfilePage = () => {
    interface profile {
        name: string,
        email: string,
        phone: string,
        age: number,
        about: string,
        img: string,
    };
    const profileData: profile = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '0912345678',
        age: 32,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel ligula fermentum tincidunt. Donec faucibus velit sed odio faucibus, id facilisis neque consectetur. Nam vel mauris id arcu fermentum consectetur. Sed euismod elit vel velit vestibulum, vel tristique massa consectetur. Sed dignissim, ipsum non posuere malesuada, metus felis consectetur neque, non egestas diam ligula ac massa. Sed fringilla, ligula sed consectetur efficitur, velit arcu lobortis justo, in ultricies turpis arcu non nunc. Quisque at enim at mi posuere commodo.',
        img: '/B.png',
    };

    interface product {
        name: string;
        description: string;
        price: number;
        img: string;
    };

    const productList: product[] = [
        {
            name: "T-shirts for children ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc urna, sagittis ut justo ut, laoreet commodo leo. Donec vel rutrum mi, nec luctus neque. Etiam a risus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie sapien magna, quis porttitor enim interdum sed. Mauris faucibus lectus turpis, a congue mi sagittis vitae. Suspendisse in hendrerit odio.",
            price: 46.00,
            img: '/A.png',
        },
        {
            name: "T-shirts for children ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc urna, sagittis ut justo ut, laoreet commodo leo. Donec vel rutrum mi, nec luctus neque. Etiam a risus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie sapien magna, quis porttitor enim interdum sed. Mauris faucibus lectus turpis, a congue mi sagittis vitae. Suspendisse in hendrerit odio.",
            price: 46.00,
            img: '/A.png',
        },
        {
            name: "T-shirts for children ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc urna, sagittis ut justo ut, laoreet commodo leo. Donec vel rutrum mi, nec luctus neque. Etiam a risus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie sapien magna, quis porttitor enim interdum sed. Mauris faucibus lectus turpis, a congue mi sagittis vitae. Suspendisse in hendrerit odio.",
            price: 46.00,
            img: '/A.png',
        },
        {
            name: "T-shirts for children ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc urna, sagittis ut justo ut, laoreet commodo leo. Donec vel rutrum mi, nec luctus neque. Etiam a risus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie sapien magna, quis porttitor enim interdum sed. Mauris faucibus lectus turpis, a congue mi sagittis vitae. Suspendisse in hendrerit odio.",
            price: 46.00,
            img: '/A.png',
        },

    ]


    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=' bg-[#f5f8fc] ' >
            <div className=' max-w-[1216px] mx-auto pt-6 lg:pt-12 pb-8 lg:pb-16 px-3 lg:px-0 ' >
                <div className=' flex flex-col lg:flex-row md:flex-row  justify-between  ' >
                    <div>
                        <h1 className=' text-[#000030] font-bold text-3xl lg:text-6xl ' > {profileData.name} </h1>

                        <div className='flex items-center gap-2.5 mt-2.5 ' >
                            <div>
                                <span className='  ' ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#000030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                            </div>
                            <div>
                                <span className=' block text-[#000030] text-xl ' > {profileData.email} </span>
                            </div>
                        </div>
                        <div className='flex lg:flex-row  items-center mt-2.5 gap-2.5 ' >
                            <div>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.0014 16.92V19.92C22.0025 20.1985 21.9455 20.4742 21.8339 20.7294C21.7223 20.9845 21.5587 21.2136 21.3535 21.4019C21.1483 21.5901 20.906 21.7335 20.6421 21.8227C20.3783 21.9119 20.0988 21.9451 19.8214 21.92C16.7442 21.5856 13.7884 20.5342 11.1914 18.85C8.77523 17.3147 6.72673 15.2662 5.1914 12.85C3.50138 10.2412 2.44964 7.271 2.1214 4.18001C2.09641 3.90347 2.12927 3.62477 2.2179 3.36163C2.30652 3.09849 2.44897 2.85669 2.63616 2.65163C2.82336 2.44656 3.0512 2.28271 3.30519 2.17053C3.55917 2.05834 3.83374 2.00027 4.1114 2.00001H7.1114C7.5967 1.99523 8.06719 2.16708 8.43516 2.48354C8.80313 2.79999 9.04348 3.23945 9.1114 3.72001C9.23802 4.68007 9.47285 5.62273 9.8114 6.53001C9.94594 6.88793 9.97506 7.27692 9.8953 7.65089C9.81555 8.02485 9.63026 8.36812 9.3614 8.64001L8.0914 9.91001C9.51495 12.4136 11.5879 14.4865 14.0914 15.91L15.3614 14.64C15.6333 14.3711 15.9766 14.1859 16.3505 14.1061C16.7245 14.0263 17.1135 14.0555 17.4714 14.19C18.3787 14.5286 19.3213 14.7634 20.2814 14.89C20.7672 14.9585 21.2108 15.2032 21.5279 15.5775C21.8451 15.9518 22.0136 16.4296 22.0014 16.92Z" stroke="#000030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                            <div>
                                <span className=' block text-[#000030] text-xl ' > {profileData.phone} </span>
                            </div>
                            <div>
                                <p className=' block text-[#000030] text-xl ml-5 ' > <strong>Age</strong> {profileData.age}  years old </p>
                            </div>
                        </div>
                        <div className=' mt-5 lg:mt-9 flex flex-col items-center md:flex-row lg:flex-row gap-3 lg:mb-0 md:mb-0 mb-7  ' >
                            <div>
                                <Button className=' bg-[#FFC107] w-[182px] h-[44px] hover:bg-amber-400 text-[#FFFFFF] font-bold text-xl ' >Edit profile</Button>

                            </div>
                            <div>
                                <Button className=' w-[182px] h-[44px] bg-white hover:bg-white border border-[#FF0302]  font-bold text-xl text-[#FF0302] ' >Log out</Button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={profileData.img} width={183} height={183} alt='profile img' className='  rounded-full object-cover ' />
                    </div>
                </div>
                {/* profile data  */}
                <div className='lg:mt-7 md:mt-3 mt-2  ' >
                    <h1 className=' text-[#000030] text-xl font-semibold ' >About : </h1>
                    <p className=' text-[#000030] text-xl font-thin mt-2.5 lg:text-start text-justify  ' >{profileData.about}</p>
                </div>
                {/* purchase product  */}
                <div className='lg:mt-12 mt-4 ' >

                    <h1 className=' text-[#000030] font-bold text-xl ' >My Orders</h1>

                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3.5 mt-9  ' >
                        {

                            productList.map((item, i) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        key={i} className='  gap-6 rounded-[10px] shadow shadow-[#00000026] bg-white  ' >
                                        <div className='flex lg:flex-row flex-col gap-x-14 p-4  ' >
                                            <div className='  ' >
                                                <h1 className=' text-[#000030] text-xl font-bold ' > Product: {item.name}  </h1>
                                                <p className='  mt-2 mb-8 lg:text-start text-justify ' > {item.description} </p>

                                            </div>
                                            <div className=' w-full ' >
                                                <Image src={item.img} width={300} height={300} className=' w-full rounded-[10px] ' alt='product' />
                                            </div>

                                        </div>
                                        <div className=' border border-[#D9D9D9] ' ></div>
                                        <div className='px-4 pb-5 ' >
                                            <p className=' text-[#000030] font-bold text-xl mt-2.5 ' >
                                                Price{item.price}$
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })

                        }
                    </div>


                </div>
            </div>
        </motion.div>
    )
}

export default ProfilePage