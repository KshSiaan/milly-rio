"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const AllProductPage = () => {
    interface Product {
        id: number,
        image: string,
        name: string,
        price: number,
    };

    const products: Product[] = [
        {
            id: 1,
            image: '/product1.png',
            name: 'Milly & Rio Hoodies',
            price: 4820.00,
        },
        {
            id: 2,
            image: '/product1.png',
            name: 'Shocks for children',
            price: 6150.00,
        },
        {
            id: 3,
            image: '/product1.png',
            name: 'SmartSphere',
            price: 3990.00,
        },
        {
            id: 4,
            image: '/product1.png',
            name: 'InnovaGear',
            price: 7500.00,
        },
        {
            id: 5,
            image: '/product1.png',
            name: 'T-shirts for children',
            price: 9100.00,
        },
        {
            id: 6,
            image: '/product1.png',
            name: 'Visionary Hub',
            price: 5400.00,
        },
        {
            id: 7,
            image: '/product1.png',
            name: 'QuantumLeap',
            price: 8300.00,
        },
        {
            id: 8,
            image: '/product1.png',
            name: 'EcoFusi2675',
            price: 2675.00,
        }
    ];

    return (
        <div className='bg-[#f5f8fc] pb-14 pt-10'>
            <div className='max-w-[1216px] mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <h1 className='text-[#000030] font-semibold text-3xl mb-3'>Milly & Rio’s Shop</h1>
                    <p className='text-[#000030] mb-10'>
                        Step into the world of Milly & Rio with our exclusive collection of fun and vibrant merchandise! From stylish apparel to must-have accessories, each item is designed to bring joy, adventure, and a touch of Milly & Rio magic into your everyday life. Explore our shop and find the perfect gear to showcase your love for learning, friendship, and Type 1 Diabetes awareness!
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className='w-[286px] p-4 bg-white rounded-3xl hover:border border-amber-300'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <Link href={`${product.id}/`}>
                                <Image
                                    width={254}
                                    height={216}
                                    src={product.image}
                                    alt={product.name}
                                    className='object-contain rounded-lg'
                                />
                                <h2 className='mt-4 text-[#000030] font-semibold text-[16px]'>{product.name}</h2>
                                <p className='mt-2 hover:text-yellow-300 text-[#6D6D6D]'>
                                    $ {product.price.toFixed(2)}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProductPage;
