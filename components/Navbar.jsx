"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { useState } from "react";
import Model from "./Model";
import Link from "next/link";
import "../app/AboutUs/AboutUS.css"
const Navbar = () => {

  const [modelOpen, setModelOpen] = useState(false)
  console.log("render")

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, scale: 1, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        // variants={navVariants}
        // initial="hidden"
        // whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
        viewport={{ once: false }}
      >
        <div
          className="absolute inset-0 w-[50%] gradient-01"
        />
        <div className={`${styles.innerWidth} mx-auto flex justify-between
  gap-8 nav-main`}>

          <img
            src="/sggs.svg"
            alt="search"
            className=" sm:w-[75px] w-[60px] sm:h-[75px] h-[60px] object-contain hover:cursor-pointer fill-white shadow"
          />
          <Link href="/" className="cursor-pointer z-20 bg-transparent no-underline">
            <h2 className="font-extrabold md:text-[40px] lg:text-[55px] text-[30px] leading-[25px]
  text-white hover:cursor-pointer mt-[20px]">S<span
                className="text-white md:text-[10px] lg:text-[15px] text-[8px]"
              >ggs{"\u00A0\u00A0\u00A0\u00A0"}</span>W<span
                className="text-white md:text-[10px] lg:text-[15px] text-[8px]"
              >eb{"\u00A0\u00A0\u00A0\u00A0"}</span>A<span
                className="text-white md:text-[10px] lg:text-[15px] text-[8px]"
              >pp{"\u00A0\u00A0\u00A0\u00A0"}</span>G<span
                className="text-white md:text-[10px] lg:text-[15px] text-[8px]"
              >raphics{"\u00A0\u00A0\u00A0\u00A0"}</span>
            </h2>
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 1, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`
   rounded-[10px] lg:flex flex-row z-30 p-2 hidden items-center`}
          >
            {/* options={["Projects","Events","About","ContactUs"]} */}
            <div className=" absolute bg-red-600 h-6 w-18 top-[35px] rounded-xl px-2 text-white opacity-80">Comming soon</div>
            <div className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] ml-2
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}>
              <Link href="/Hackfusion2"
                className="text-green-500 font-medium p-[8px] px-5 cursor-pointer no-underline"
              >
                HackFusion2.O
              </Link>
            </div>
            <div
              className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] ml-2
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96] `}
            >
              <Link href="/Projects" className="text-white font-medium p-[10px] px-5 cursor-pointer no-underline">
                Projects
              </Link>
            </div>

            <div
              className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] ml-2
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
            >
              <Link href="/Events"
                className="text-white font-medium p-[10px] px-5 cursor-pointer no-underline"
              >
                Events
              </Link>
            </div>
            <div
              className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] ml-2
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
            >
              <Link href="/AboutUs"
                className="text-white font-medium p-[10px] px-5 cursor-pointer no-underline"
              >
                AboutUs
              </Link>
            </div>
            <div
              className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] ml-2
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
            >
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=swag@sggs.ac.in&su=Contact%20Us"
                className="text-white font-medium p-[10px] px-5 cursor-pointer no-underline"
              >
                ContactUs
              </Link>
            </div>
          </motion.div>
          <img
            src="/menu.svg"
            alt="menu"
            className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] object-contain hover:cursor-pointer mt-[20px] lg:hidden"
            onClick={() => setModelOpen(!modelOpen)}
          />
        </div>
      </motion.nav>
      {modelOpen && <Model />}
    </>)
};

export default Navbar;
