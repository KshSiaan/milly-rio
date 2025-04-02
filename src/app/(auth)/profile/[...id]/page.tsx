"use client"


import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
    interface profile {
        id: number,
        name: string,
        email: string,
        phone: string,
        age: number,
        about: string,
        img: string,
    };
    const profileData: profile = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '0912345678',
        age: 32,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel ligula fermentum tincidunt.',
        img: '/B.png',
    };

    return (
        <div className='bg-[#f5f8fc] px-4 md:px-8'>
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className='max-w-[1216px] mx-auto pt-12 pb-16'
            >
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col lg:flex-row md:flex-row justify-between items-center'
                >
                    <div className='text-center md:text-left'>
                        <h1 className='text-[#000030] font-bold text-3xl lg:text-6xl'>{profileData.name}</h1>
                        <p className='text-xl text-[#000030] mt-2'>{profileData.email}</p>
                        <p className='text-xl text-[#000030] mt-2'>{profileData.phone}</p>
                        <p className='text-xl text-[#000030] mt-2'><strong>Age:</strong> {profileData.age} years old</p>
                    </div>
                    <Image src={profileData.img} width={183} height={183} alt='profile img' className='rounded-full object-cover mt-6 md:mt-0' />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className='mt-7'
                >
                    <h1 className='text-[#000030] text-xl font-semibold'>About:</h1>
                    <p className='text-[#000030] text-lg mt-2.5'>{profileData.about}</p>
                </motion.div>
                <motion.form 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className='mt-12'
                >
                    <div className='flex flex-col lg:flex-row lg:gap-6 items-center justify-between'>
                        <div className='flex flex-col flex-1'>
                            <label className='text-[#000000] text-xl font-semibold' htmlFor='email'>Email address:</label>
                            <input type='text' defaultValue={profileData.email} className='bg-[#FFFFFF] h-[40px] px-5 rounded-[5px] mt-2.5 border border-[#D1D1D1] focus:outline-none' id='email' name='email' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label className='text-[#000000] text-xl font-semibold' htmlFor='number'>Phone number:</label>
                            <input type='text' defaultValue={profileData.phone} className='bg-[#FFFFFF] h-[40px] px-5 rounded-[5px] mt-2.5 border border-[#D1D1D1] focus:outline-none' id='number' name='number' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label className='text-[#000000] text-xl font-semibold' htmlFor='age'>Age:</label>
                            <input type='text' defaultValue={profileData.age} className='bg-[#FFFFFF] h-[40px] px-5 rounded-[5px] mt-2.5 border border-[#D1D1D1] focus:outline-none' id='age' name='age' />
                        </div>
                    </div>
                    <div className='mt-2.5'>
                        <label className='text-[#000000] text-xl font-semibold' htmlFor='about'>About:</label>
                        <textarea id='about' defaultValue={profileData.about} className='w-full mt-2 bg-white border border-[#D1D1D1] p-4 focus:outline-none' rows={6} />
                    </div>
                    <div>
                        <Button className='block mx-auto mt-12 w-[182px] text-white text-xl font-bold' variant={'gold'}>Done</Button>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Page;
