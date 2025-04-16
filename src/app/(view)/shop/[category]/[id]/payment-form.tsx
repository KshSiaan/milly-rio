"use client";

import React, { FormEvent } from "react";

import { paymentSuccessMsg } from "@/components/shared/successMsg";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const stripePromise = loadStripe(
  key
    ? key
    : "pk_test_51R7AneH4E1RWkNRn8fiH8Cu0OSkZVxscWBouwfJfn1rc3rOe5UTW0IZGaNoslfVYc2wSUVeiX8bEwlyl5uUW6j5X00m7ygYtta"
);
// const secret = process.env.NEXT_PUBLIC_SECRET_KEY;

export default function PaymentForm({ formFilled }: { formFilled: boolean }) {
  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    if (formFilled) {
      paymentSuccessMsg();
    } else {
      Swal.fire({
        icon: "error",
        title: "Please fill out the form first",
        confirmButtonText: "Okay",
        confirmButtonColor: "#F6BB09",
        //   imageUrl: '/product/payment-success.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Payment Success",
      });
    }
  };
  return (
    <form onSubmit={handlePayment}>
      <div className=" bg-white !p-4 rounded-2xl !mt-6 ">
        <h1 className=" text-[#000030] font-semibold text-xl ">
          Card Information
        </h1>
      </div>
      <div className="">
        {" "}
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: 1,
            currency: "usd",
            // secret,
          }}
        >
          {" "}
          <PaymentElement />
        </Elements>
      </div>
      <div className="!mt-10 ">
        <Button className=" w-full bg-[#F6BB09] hover:bg-amber-500 pt-2 px-4 rounded-[40px] text-white font-bold text-xl ">
          Pay
        </Button>
      </div>
    </form>
  );
}
