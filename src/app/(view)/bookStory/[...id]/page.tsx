"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
// import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  // const { id } = useParams();
  interface book {
    title: string;
    img: string;
    description: string;
  }

  const bookData: book[] = [
    {
      title: "A is for awarness",
      img: "/B.png",
      description:
        "This is a book about Milly and Rio's journey to the hospital. They have to learn the value of hospitality and the importance of caring for others.",
    },
    {
      title: "B is for blood sugar",
      img: "/C.png",
      description:
        "A doctor showed Milly how to check her blood sugar. “This meter tells you if you need insulin or a snack,” he explained. Milly practiced and wrote: “B is for Blood Sugar.It helps me know what my body needs.”",
    },
    {
      title: "C is for Carbs",
      img: "/D.png",
      description:
        "Milly added: “C is for Carbs. I can eat them, but I need to count them carefully.” “Carbs are in foods like bread and fruit,” a dietitian said. “Count them to know how much insulin to take.” Milly added: “C is for Carbs.I can eat them, but I need to count them carefully.”",
    },
    {
      title: "D is for Diabetes",
      img: "/E.png",
      description:
        "A nurse told Milly, “Diabetes is part of yourlife, but it doesn’t define you.”Milly nodded and wrote: “D is for Diabetes. Itdoesn’t stop me from being me!”",
    },
    {
      title: "E is for Exercise",
      img: "/F.png",
      description:
        "“Running, dancing, or playing outside helps keep blood sugar steady,” said a dog trainer. Milly smiled and wrote: “E is for Exercise. And for playing with Rio!””",
    },
    {
      title: "F is for Friends",
      img: "/G.png",
      description:
        "Milly joined a group of kids her age who talked about how friends supported them. Milly wrote: “F is for Friends. They learn about diabetes so they can help me!””",
    },
    {
      title: "G is for Glucose",
      img: "/H.png",
      description: "“Glucose is the sugar in your blood,” a doctor explained.",
    },
    {
      title: "H is for High Blood Sugar",
      img: "/I.png",
      description:
        "“When your blood sugar goes too high or low, you might feel shaky or tired,” Milly wrote. At one point, Rio’s glowing nose alerted Milly that her blood sugar was low. She checked her glucometer and grabbed a juice box. “Good job, Rio!” she said, giving him a hug.",
    },
    {
      title: "I is for Insulin",
      img: "/J.png",
      description:
        "“Insulin is like a superhero for my body,” Milly wrote. “It helps turn sugar into energy!”",
    },
    {
      title: "J is for Juice Box",
      img: "/K.png",
      description:
        "Milly added: “Juice boxes give me a quick boost when my blood sugar is too low. They’re my emergency power-up!”",
    },
    {
      title: "K is for Kit",
      img: "/L.png",
      description:
        "“My kit has everything I need—my glucometer, insulin, and snacks,” Milly wrote proudly.",
    },
    {
      title: "/L is for Low Blood Sugar",
      img: "/M.png",
      description:
        "“Lows can make me feel shaky or dizzy, but I know how to fix them,” Milly wrote.”",
    },
    {
      title: "T is for Testing",
      img: "",
      description:
        "“Testing my blood sugar helps me decide if I need insulin or a snack,” Milly wrote, drawing a glucometer.",
    },
  ];

  // Motion animation configuration
  const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" bg-[#f5f8fc]">
      <div className="max-w-[1216px] !mx-auto !pt-7 lg:!pt-[63px] !pb-14 lg:!pb-[134px]">
        <div className="flex items-center gap-2.5">
          <div>
            <Link href={"/bookStory"}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_269_793"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="56"
                  height="56"
                >
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
            <h1 className="lg:text-4xl font-semibold text-[#000030]">
              Milly and Rio’s Hospital Adventure: The ABCs of Type 1 Diabetes
            </h1>
          </div>
        </div>

        <div className="mt-7">
          <motion.div
            className="h-[696px]"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/A.png"}
              width={1216}
              height={1}
              className="h-[696px] object-center object-contain"
              alt="Illustration of Milly and Rio’s Hospital Adventure"
            />
          </motion.div>

          <motion.p
            className="!mt-6 text-[#000030] !px-3 lg:px-0 text-[16px]"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            Milly was a bright, curious little girl with long, straight hair,
            and a smile that could light up any room. She had recently been
            diagnosed with Type 1 Diabetes, and though it was a big change, she
            was determined to learn everything she could. Her best friend and
            adventure buddy was her tiny Yorkshire Terrier, Rio. Small but
            mighty, Rio had a glowing nose that could somehow sense when Milly’s
            blood sugar was too high or too low.
            <br />
            <br />
            Today, Milly and Rio were visiting the children’s hospital for a
            special diabetes education program. Clutching her notebook and
            crayons, Milly whispered, “Let’s turn today into an adventure, Rio.
            We’ll learn the ABCs of Type 1 Diabetes!” Rio wagged his tail and
            barked softly, his glowing nose lighting up just enough to reassure
            her.
          </motion.p>
        </div>

        {/* A */}

        <div className="!px-3 lg:!px-0">
          {bookData.map((item, i) => (
            <motion.div
              className="!mt-10"
              key={i}
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.6, delay: i * 0.5 }}
            >
              <h1 className="text-[#000030] text-2xl font-semibold">
                {item.title}
              </h1>
              {item.img && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item?.img}
                    width={596}
                    height={396}
                    className="block !mx-auto h-[396px] !mt-6 rounded-3xl object-cover"
                    alt={item.title}
                  />
                </motion.div>
              )}
              <div>
                <p className="mt-6 text-[#000030] text-[16px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={"/z.png"}
            width={1216}
            height={1}
            className="h-[696px] object-cover "
            alt="Illustration of Milly and Rio’s Hospital Adventure"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
