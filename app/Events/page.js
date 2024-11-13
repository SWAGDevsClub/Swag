"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText, TitleText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Link from "next/link";
import '../../styles/globals.css';


const Events = () => {
  return (

    <>
      {/* <section className={`${styles.paddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <TypingText title="| Events" textStyles="text-center" />
          <TitleText title={<>Coming Soon!</>} textStyles="text-center" />
        </div>
      </section> */}
      <section>
        <img class=" relative h-[1200px] w-[100%] opacity-10 drop-shadow-lg m-auto " />
        <div>
          <div>

            <div class=" h-[0px]">

              <div  >
                <img class="relative sm:h-[500px] h-[420px] xl:w-[70%] lg:w-[70%] w-[75%] opacity-90 top-[-1150px] rounded-[50px] drop-shadow-lg m-auto shadow-[0_25px_50px_-12px_rgba(5,5,5,5.3)] blur-[3px]" src="" />
              </div>
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2}}>
              <a href="/Webverse" class="absolute sm:top-[240px] top-[200px] xl:left-[26%] lg:left-[15%] md:left-[30%] sm:left-[30%] left-[10%] cursor-pointer text-center align-middle">  
               <img class="lg:w-[700px] md:-w-[700px] w-[350px] p-2 m-2 rounded-md drop-shadow-lg object-contain self-center z-10" src="/e1.png"/></a> </motion.div>
              <p class="absolute md:text-[25px] sm:text-[22px] text-[18px] text-white lg:top-[380px] md:top-30 sm:top-[350px] top-[280px] left-10 right-10 cursor-pointer lg:w-[55%] w-[63%] text-center m-auto">Unleash the full potential of your website development skills and showcase your ideas in the field of web development at SWAG. Develop interactive and attractive websites.</p>
              <TypingText title=" Web Hackathon 2023" textStyles="absolute lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white xl:top-[600px] lg:top-[550px] md:top-[550px] sm:top-[600px] top-[500px] cursor-pointer text-left lg:ml-[300px] sm:ml-[200px] ml-[100px] " />
              <div className=" absolute md:text-[17px] sm:text-[15px] text-[12px] text-white lg:top-[600px] md:top-[600px] sm:top-[580px] top-[530px] left-10 right-10 cursor-pointer lg:w-[150px] p-1 md:w-[140px] sm:w-[130px] w-[100px] text-center sm:ml-[60%] ml-[25%] bg-slate-800 h-[45px] rounded-full border-2 border-orange-100 px-4 py-2">
                <a href="/Webverse">Know more</a>
              </div>
           
            </div>


          </div>
          <div className="flex justify-center align-middle ">
            <div class=" h-[0px] ">
              <img class="relative sm:h-[500px] h-[420px] xl:w-[1100px] lg:w-[1100px] w-[1100px] opacity-90 top-[-600px] rounded-[50px] drop-shadow-lg m-auto shadow-[0_25px_50px_-12px_rgba(5,5,5,5.3)] blur-[3px]" src="" />
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2}}>
              <a href="/Hackfusion" class="absolute xl:top-[480px] lg:top-[490px] md:top-[620px] top-[600px] xl:left-[27%] lg:left-[15%] md:left-[25%] sm:left-[30%] left-[10%]  cursor-pointer text-center align-middle">   
              <img class=" xl:w-[700px] lg:w-[650px] md:w-[400px] w-[350px] p-2 m-2 rounded-md drop-shadow-lg object-contain self-center z-10" src="/hackfusionlogo.png"/></a> </motion.div>
              <p class="absolute sm:text-[25px] text-[18px] text-white sm:top-30 lg:top-[900px] md:top-[880px] sm:top-[850px] top-[830px] left-10 right-10 cursor-pointer md:w-[55%] sm:w-[60%] w-[80%] text-center m-auto">Embark on a journey of collaboration and knowledge exchange as you seize networking opportunities with fellow enthusiasts and industry experts</p>

              <p class="absolute lg:text-2xl  text-xl text-orange-200 lg:top-[1100px] md:top-[1095px] sm:top-[1060px] top-[1020px] cursor-pointer text-left md:ml-[120px] sm:ml-[80px] ml-[100px] ">February-9-2024</p>
              <TypingText title=" National Level Hackathon" textStyles="absolute text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:top-[1050px] md:top-[1055px] sm:top-[1030px] top-[985px] cursor-pointer text-left sm:ml-[120px] ml-[80px] ml-[100px]" />
             
              <div className="absolute md:text-[17px] sm:text-[15px] text-[12px] text-white lg:top-[1125px] md:top-[1125px] top-[1060px] left-10 right-10 cursor-pointer lg:w-[150px] p-2 md:w-[140px] sm:w-[130px] w-[100px] text-center sm:ml-[60%] ml-[25%] bg-slate-800 h-[45px] rounded-full border-2 border-orange-100 ">
                <a href="/Hackfusion">Know more</a>
              </div>
              <img class="absolute sm:text-2xl mt-2 text-green-300 md:ml-[120px]  sm:ml-[120px] ml-[100px] max-h-20  max-w-15 lg:top-[1125px] md:top-[1125px] top-[1090px]" src="/images/partners/delighteck_horizontal_white1.png"/>
    
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
export default Events;
