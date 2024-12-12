"use client";
import { TypingText, TitleText } from "../../components";
import Link from "next/link";
import "../../styles/globals.css";
import "./Event.css"
// import "../../public/index.html"
const Events = () => {
  return (
    <>
      <section className="h-[140vh] flex flex-col  gap-4  items-center " id="event-sec" >
      {/* Second Event Section */}
      <div className="gradient-04 z-0" />
      <div className="w-full flex flex-col justify-center items-center gap-4 h-[550px] xl:w-[1200px] lg:w-[900px]  md:w-[600px] sm:w-[400px]  border-4 rounded-3xl shadow-2xl  mt-[5%]">
          <Link href="/Hackfusion" className="flex justify-center">
            <img className="w-[60%] mt-[-25%] lg:mt-[-20%]" src="/hackfusionlogo.png" />
          </Link>
          <p className="w-[75%] mt-[-22%] md:text-[25px] sm:text-[22px] text-[18px] text-white">
            Embark on a journey of collaboration and knowledge exchange as you
            seize networking opportunities with fellow enthusiasts and industry
            experts.
          </p>
          <p className="lg:text-2xl text-xl text-orange-200 lg:top-[1100px] md:top-[1095px] sm:top-[1060px] top-[1020px] cursor-pointer text-left">
            February-9-2024
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-4 mb-5">
            <TypingText
              title=" National Level Hackthon"
              textStyles="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white xl:top-[600px] lg:top-[550px] md:top-[550px] sm:top-[600px] top-[500px] cursor-pointer text-left"
            />
            <a
              href="/Hackfusion"
              className="px-4 py-2 text-white bg-slate-800 h-[45px] rounded-full border-2 border-orange-100"
            >
              Know more
            </a>
          </div>
        </div>
        

        {/* First Event Section */}
        <div className="w-full flex flex-col justify-center items-center gap-4 h-[550px] xl:w-[1200px] lg:w-[900px] gap-5 md:w-[600px] sm:w-[400px]  border-4 rounded-3xl shadow-2xl  mt-[5%]">
          <Link href="/Webverse" className="flex justify-center">
            <img className="w-[60%] md:w-[50%] sm:w-[70%]" src="/e1.png" />
          </Link>
          <p className="w-[75%] md:text-[25px] sm:text-[22px] text-[18px] text-white lg:top-[380px] md:top-30 sm:top-[350px] top-[280px]  cursor-pointer  ">
            Unleash the full potential of your website development skills and
            showcase your ideas in the field of web development at SWAG. Develop
            interactive and attractive websites.
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-4">
            <TypingText
              title=" Web Hackathon 2023"
              textStyles="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white xl:top-[600px] lg:top-[550px] md:top-[550px] sm:top-[600px] top-[500px] cursor-pointer text-left"
            />
            <a
              href="/Webverse"
              className="px-4 py-2 text-white bg-slate-800 h-[45px] rounded-full border-2 border-orange-100"
            >
              Know more
            </a>
          </div>
        </div>
        

       
        
    
      </section>
    </>
  );
};

export default Events;
