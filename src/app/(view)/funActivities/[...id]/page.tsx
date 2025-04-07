"use client"
import { PDFDocument, rgb } from 'pdf-lib';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const Page = () => {
    const { id } = useParams();

    interface image {
        img: string;
    };

    const images: image[] = [
        { img: "/fun/img-1.png" },
        { img: "/fun/img-2.png" },
        { img: "/fun/img-3.png" },
        { img: "/fun/img-4.png" },
        { img: "/fun/img-5.png" }
    ];

    const generatePDF = async (index: number) => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);

        const { width, height } = page.getSize();
        page.drawText(`This is PDF #${index + 1}`, {
            x: 50,
            y: height / 2,
            size: 24,
            color: rgb(0, 0.53, 0.71),
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `pdf-${index + 1}.pdf`;
        link.click();

        URL.revokeObjectURL(url); // cleanup
    };

    return (
        <div className='bg-[#f5f8fc]'>
            <div className="max-w-[1216px] mx-auto pt-7 lg:pt-[63px] pb-14 lg:pb-[134px] px-4 sm:px-6 lg:px-0">
                <div className="flex items-center gap-2.5">
                    <div className=''>
                        <Link href={"/funActivities"}>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_269_793" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
                                    <rect width="56" height="56" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_269_793)">
                                    <path d="M37.3333 51.3333L14 28L37.3333 4.66666L41.475 8.80832L22.2833 28L41.475 47.1917L37.3333 51.3333Z" fill="#000030" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div>
                        <motion.h1
                            className="lg:text-4xl font-semibold text-[#000030]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Coloring pages
                        </motion.h1>
                    </div>
                </div>

                <div>
                    <motion.h1
                        className="mt-10 text-[#000030] text-xl font-semibold mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Milly & Rio Coloring Fun! 🖍️
                    </motion.h1>

                    <motion.h1
                        className="text-[16px] text-[#000030]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Milly and Rio are excited for you to bring their world to life with your creativity! Grab your favorite crayons, colored pencils, or markers and get ready for some coloring fun!🖍️
                    </motion.h1>

                    <motion.h1
                        className="mt-6 text-[#000030] text-xl font-semibold"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        How to play?
                    </motion.h1>

                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <ul className="list-decimal ml-4">
                            <motion.li
                                className="text-[#000030] text-[16px] mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                Ask a Parent or Guardian to Print the Page! 🖨️ Before you start, make sure an adult helps you print the coloring page.
                            </motion.li>

                            <motion.li
                                className="text-[#000030] text-[16px] mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 1 }}
                            >
                                Pick Your Favorite Colors! Milly’s world is full of bright and fun colors. You can color her outfit, Rio’s fur, and even the background however you like! 🌈
                            </motion.li>

                            <motion.li
                                className="text-[#000030] text-[16px] mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 1.2 }}
                            >
                                Use Your Imagination! Want to add extra details? Maybe a rainbow, a park, or some diabetes-friendly snacks for Milly? Get creative! ✨
                            </motion.li>

                            <motion.li
                                className="text-[#000030] text-[16px] mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 1.4 }}
                            >
                                Show Off Your Work! Ask an adult to take a picture of your finished artwork and share it with us on Facebook 🎉
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.6 }}
                    >
                        <motion.h1
                            className="text-[#000030] text-xl font-semibold"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.8 }}
                        >
                            🎨 Fun Idea: Print a few copies and see how many different versions of Milly & Rio you can create!
                        </motion.h1>
                        <motion.h1
                            className="text-[#000030] text-xl font-semibold mt-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 2 }}
                        >
                            Milly & Rio love your creativity—have fun coloring! 🖍️💕
                        </motion.h1>
                    </motion.div>
                </div>

                {/* image list */}
                <div className='w-full'>
                    {images.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-white rounded-2xl mt-10 py-6 px-4 md:px-6'
                        >
                            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                                <h1 className='text-[#000030] text-lg md:text-2xl font-semibold'>
                                    Page {i + 1}
                                </h1>
                                <Button
                                    className='border border-[#FFC107] bg-white text-[#000030] hover:bg-white'
                                    onClick={() => generatePDF(i)}
                                >
                                    <span className='mr-2'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id={`mask${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask={`url(#mask${i})`}>
                                                <path d="M9 12.5H10V10.5H11C11.2833 10.5 11.5208 10.4042 11.7125 10.2125C11.9042 10.0208 12 9.78333 12 9.5V8.5C12 8.21667 11.9042 7.97917 11.7125 7.7875C11.5208 7.59583 11.2833 7.5 11 7.5H9V12.5ZM10 9.5V8.5H11V9.5H10ZM13 12.5H15C15.2833 12.5 15.5208 12.4042 15.7125 12.2125C15.9042 12.0208 16 11.7833 16 11.5V8.5C16 8.21667 15.9042 7.97917 15.7125 7.7875C15.5208 7.59583 15.2833 7.5 15 7.5H13V12.5ZM14 11.5V8.5H15V11.5H14ZM17 12.5H18V10.5H19V9.5H18V8.5H19V7.5H17V12.5ZM8 18C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H8ZM8 16H20V4H8V16ZM4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V6H4V20H18V22H4Z" fill="#000030" />
                                            </g>
                                        </svg>
                                    </span>
                                    Download PDF
                                </Button>
                            </div>
                            <div className='mt-6'>
                                <Image
                                    src={image.img}
                                    width={600}
                                    height={600}
                                    className='w-full max-w-[600px] h-auto mx-auto object-contain'
                                    alt={`Page ${i + 1}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
