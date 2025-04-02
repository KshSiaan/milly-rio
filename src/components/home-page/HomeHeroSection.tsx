import Image from 'next/image';
// import { motion } from "framer-motion";

export const HomeHeroSection = () => {
  interface ImageData {
    img: string;
  }

  const imageArray: ImageData[] = [
    { img: 'img-1.png' },
    { img: 'img-2.png' },
    { img: 'img-3.png' },
    { img: 'img-4.png' },
    { img: 'img-5.png' },
  ];

  interface BlogData {
    img: string;
    title: string;
    description: string;
  }

  const blogData: BlogData[] = [
    {
      img: "blogImg1.png",
      title: "A Day in Milly’s Shoes: Life with Type 1 Dia...",
      description: "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    },
    {
      img: "blogImg2.png",
      title: "Milly’s Magical CGM: A Superpower For Ty...",
      description: "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    },
    {
      img: "blogImg3.png",
      title: "How Friends Can Help: Being A Great Frie...",
      description: "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    }
  ];

  return (
    <div className="bg-[url('/bannerBgImg.png')] py-20 bg-cover bg-center mx-auto relative flex flex-col items-center">
      
      {/* Image Grid */}
      <div className="max-w-[964px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {imageArray.map((item, i) => (
          <div key={i} className="flex justify-center">
            <Image
              className="rounded-3xl object-cover"
              src={`/${item.img}`}
              alt={`Illustration ${i + 1}`}
              width={132}
              height={132}
            />
          </div>
        ))}
      </div>

      {/* Special Message Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">A Special Message from Milly & Rio</h1>

      {/* Hero Message Section */}
      <div className="bg-[#eaf9f6] max-w-[1216px] mx-auto p-6 rounded-3xl border-2 border-black">
        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* Left Side - Text Content */}
          <div className="max-w-lg">
            <p className="text-lg font-semibold">Hey there, friends!</p>
            <p className="mt-4">
              It’s Milly & Rio, and we’re so excited to welcome you to our world—a place where learning about Type 1 Diabetes is fun, easy, and filled with adventure!
            </p>
            <p className="mt-4">
              We know that having Type 1 Diabetes can sometimes feel like a big journey, but guess what? You’re never alone. Whether you’re just learning about T1D or you’ve been living with it for a while, we’re here to help with stories, games, and tips that make understanding diabetes SUPER cool!
            </p>
            <p className="mt-4">
              Rio’s super sniffer helps him detect when something’s not quite right, and Milly knows just how to handle it with confidence and care. And you? You’re part of our brave, strong, and amazing Milly & Rio crew!
            </p>
            <p className="mt-4">
              So, whether you’re here for fun adventures, helpful tips, or just to say hi, we can’t wait to share this journey with you. Always remember—you’ve got this, and we’ve got you!
            </p>
            <p className="mt-6 font-semibold">
              With love and high-fives, <br /> Milly & Rio 🐶💙
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-auto">
            <Image
              src="/img-6.png"
              className="object-cover rounded-3xl"
              width={500}
              height={500}
              alt="Milly & Rio illustration"
            />
          </div>

        </div>
      </div>

      {/* Latest Blogs */}
      <div className="max-w-[1216px] mx-auto mt-12">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Blogs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, i) => (
          <div
            key={i}
            
            className="w-full sm:w-[389px] bg-white border hover:border-amber-300 p-4 rounded-3xl shadow-md"
          >
            <Image
              src={`/${blog.img}`}
              alt={`Blog ${i + 1}`}
              width={357}
              height={242}
              className="rounded-2xl"
            />
            <h2 className="text-[#000030] font-semibold text-[16px] mt-4">
              {blog.title}
            </h2>
            <p className="mt-2 text-[#6D6D6D] text-[14px] leading-7">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

