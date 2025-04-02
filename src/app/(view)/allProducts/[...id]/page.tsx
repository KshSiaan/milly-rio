"use client"


import { paymentSuccessMsg } from '@/components/shared/successMsg'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'

const Page = () => {
  interface product {
    id: number,
    image: string,
    name: string,
    price: number,
    description: string
  };

  const singleProduct: product = {
    id: 1,
    image: '/product/product2.png',
    name: 'T-shirts for children',
    price: 4820.00,
    description: "Introducing the Gizmo Pro, the ultimate gadget for tech enthusiasts! With its sleek design and cutting-edge features, this device is perfect for anyone looking to enhance their daily routine. The Gizmo Pro boasts a powerful battery life, ensuring you stay connected throughout the day. Its user-friendly interface makes navigation a breeze, while the high-resolution display brings your content to life. Whether you're streaming your favorite shows or tackling work projects, the Gizmo Pro delivers exceptional performance. Upgrade your tech game with the Gizmo Pro today!"
  }

  const handlePayment = (e: any) => {
    console.log(e)
    paymentSuccessMsg()
  }

  return (
    <div className=' bg-[#f5f8fc] ' >
      <div className=' max-w-[1216px] mx-auto pt-5 lg:pt-10 pb-12 lg:pb-24 px-3 lg:px-0 ' >
        <div className="flex items-center gap-2.5">
          <div>
            <Link href={"/allProducts"}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0_269_793" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
                  <rect width="56" height="56" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_269_793)">
                  <path
                    d="M37.3333 51.3333L14 28L37.3333 4.66666L41.475 8.80832L22.2833 28L41.475 47.1917L37.3333 51.3333Z"
                    fill="#000030"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-[#000030]">
              Back
            </h1>
          </div>
        </div>

        {/* product description  */}
        <div className='mt-6 flex flex-col lg:flex-row gap-6   ' >
          {/* left side  */}
          <div className=' max-w-[699px]  ' >
            <Image src={singleProduct.image} width={699} height={424} className=' rounded-3xl h-[424px] object-cover ' alt='' />
            <div className=' flex flex-col lg:flex-row justify-between items-center mt-6 ' >
              <div> <h1 className=' text-[#000030] font-semibold text-[16px] ' > {singleProduct.name} </h1> </div>
              <div> <p className=' text-[#FFC107] font-semibold text-xl ' >${singleProduct.price} </p> </div>
            </div>
            <div className=' mt-4 ' >
              <p className=' text-[#000030] text-[16px] ' >
                {singleProduct.description}
              </p>
            </div>
          </div>
          {/* right side  */}
          <div className=' flex-1  ' >

            <div className=' bg-white p-4 rounded-2xl ' >
              <h1 className=' text-[#000030] font-semibold text-xl ' >Shipping Address</h1>
              <div className='flex flex-col mt-6 ' >
                {/* counter  */}
                <input type='text' className=" p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='Country' />
                {/* State */}
                <input type='text' className=" mt-4 p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='State' />
                {/* City */}
                <input type='text' className=" mt-4 p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='City' />
                {/* ZIP Code */}
                <input type='text' className=" mt-4 p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='ZIP Code' />
              </div>
            </div>


            {/* card information  */}


            <form onSubmit={handlePayment} >
              <div className=' bg-white p-4 rounded-2xl mt-6 ' >
                <h1 className=' text-[#000030] font-semibold text-xl ' >Card Information</h1>
                <div className='flex flex-col mt-6 ' >
                  {/* Card Number  */}
                  <div className=' flex flex-col relative  ' >
                    <label className=' text-[#000030] font-medium text-[16px] ' htmlFor="card">Card Number</label>
                    <input id='card' type='text' className=" p-2 mt-1  rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='123 458 6458' />
                    {/* icon  */}
                    <div className=' flex items-center absolute  right-0 top-[40px] mr-4 gap-1 ' >
                      <span>
                        <FaCcVisa className=' w-[22px] h-[14px] ' />
                      </span>
                      <span>
                        <FaCcMastercard className=' w-[22px] h-[14px] ' />
                      </span>
                    </div>
                  </div>
                  {/* Expiration Date  */}
                  <div className=' flex flex-col relative mt-4  ' >
                    <label className=' text-[#000030] font-medium text-[16px] ' htmlFor="date">Expiration Date</label>
                    <input id='date' type='text' className=" p-2 mt-1  rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='123 458 6458' />

                  </div>
                  {/* Expiration Date  */}
                  <div className=' flex flex-col relative mt-4  ' >
                    <label className=' text-[#000030] font-medium text-[16px] ' htmlFor="code">Security Code</label>
                    <input id='code' type='text' className=" p-2 mt-1  rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D] " placeholder='CVV' />

                  </div>
                </div>
              </div>
              <div className=' mt-10 ' >
                <Button className=' w-full bg-[#F6BB09] hover:bg-amber-500 pt-2 px-4 rounded-[40px] text-white font-bold text-xl ' >Pay</Button>
              </div>
            </form>



          </div>
        </div>


      </div>
    </div>
  )
}

export default Page