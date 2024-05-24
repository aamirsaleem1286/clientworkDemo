import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDiamond } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

export default function Home() {
  return (
<section className="text-gray-600 body-font">
<div className="flex items-center justify-between  pl-2">
  <div className="flex items-center">
    <BsThreeDotsVertical size={30} />
    <IoSearch size={30} className="ml-2"  />
    <MdOutlineDiamond size={30} className="text-white bg-green-500 ml-2" />
  </div>
  <h1 className="text-bold text-3xl text-black">مذكراتي</h1>
</div>
<div class="relative ml-12 mt-12 w-[300px] h-[100px] bg-green-500 flex flex-col items-center justify-center">
    <h1 class="text-bold text-2xl text-black">مذكتير3 أيام عادة تحدي</h1>
    <div class="flex flex-wrap items-center">
        <div class="w-4 h-6 rounded-full bg-white text-green-500 ml-4">3</div>
        <div class="h-[2px] mt-3 w-20 bg-black ml-4"></div>
        <div class="w-4 h-6 rounded-full bg-white text-green-500 ml-4">2</div>
        <div class="h-[2px] mt-3 w-20 bg-black ml-4"></div>
        <div class="w-4 h-6 rounded-full bg-white text-green-500 ml-4">1</div>
    </div>
    <div className="absolute top-0 right-0 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/pajamas_close.png"  >
    <IoIosClose  size={30} style={{marginLeft: "-48px"}}/>

      </div>
</div>



  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={"/image 5.png"}
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl  mb-4 font-mediumtext-bold text-3xl text-black">
      كل لحظة مهمة
      </h1>
      <p className="mb-8 leading-relaxed  text-gray-800">
      اكتب دخولك الأول هنا
      </p>
    </div>
  </div>
  <div className="flex ml-3 pl-6">
    <img src={"/flowbite_home-solid.png"}/>
    <img src={"/uil_calender.png"} className="ml-12"/>
    <div className=" ">
  <GoPlus size={40} className="ml-16 mb-4 bg-green-500 text-white rounded-full " />
</div>

<img src={"/majesticons_image-line.png"} className="ml-12"/>
<img src={"/iconamoon_settings.png"} className="ml-8"/>

  </div>
</section>


  );
}
