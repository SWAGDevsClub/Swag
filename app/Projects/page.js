"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypingText, TitleText } from "../../components";
import MyCarousel from './carousel';
import Carousell from './carousel2';
import '../../styles/globals.css';
import "./Projects.css"
const Projects = () => {
  return (
    <section className=" overflow-scroll" id="project-section">
      <div className="relative h-[2500px]">
        <motion.div  className="relative h-[1800px] w-[100%] top-0 opacity-1">
    
          <Link href="" className="absolute lg:text-9xl  sm:text-7xl text-6xl text-white top-16  md-right-60 right-16 md-left-60 sm:left-12 left-9 cursor-pointer text-center">OUR PROJECTS</Link>
        </motion.div>
        
        <div>
          <img
            className=" absolute md-right-60 sm:ml-[15%] ml-[5%] lg:h-[680px] md:h-[660px] sm:h-[620px] h-[620px] sm:w-[70%] w-[90%] xl:mt-[-1500px] lg:mt-[-1450px] md:mt-[-1600px] mt-[-1550px] border-8 rounded-3xl shadow-2xl border-white  opacity-30 border-opacity-70 " />
          <motion.div>
            <Link href="https://play.google.com/store/apps/details?id=com.sggs.sggs" className="absolute lg:text-7xl  text-5xl text-white xl:top-[350px] lg:top-[400px] md:top-[250px] sm:top-[290px] top-[280px]  md-right-60 right-20 md-left-60 left-20 cursor-pointer text-center font-semibold">SGGS APP</Link>
          </motion.div>

          <TypingText title=" Android App for College Information System" textStyles="md:text-[25px] lg:text-[30px] sm:text-[17px] text-[15px] absolute text-2xl text-white xl:top-[430px] lg:top-[480px] md:top-[300px] top-[370px] xl:ml-[35%] lg:ml-[22%] md:ml-[15%] sm:ml-[30%] ml-[13%] text-center " className="type-text"/>
          <motion.div>
            <div className="absolute sm:w-[50%] w-[70%]  md:text-[15px]  text-[10px] text-white xl:mt-[-1310px] lg:mt-[-1260px] md:mt-[-1450px] sm:mt-[-1390px] mt-[-1390px]  sm:ml-[25%] ml-[15%] cursor-pointer text-center y">Developed an Android application for college that provides access to important information such as Admit Cards, Results and other useful resources by Scanning students ID cards.
            </div>
          </motion.div>
          <motion.div>
            <div className="absolute w-[60%] lg:text-[15px]  text-[10px] text-white xl:mt-[-900px] lg:mt-[-850px] md:mt-[-1000px] sm:mt-[-985px] mt-[-990px] ml-[22%] cursor-pointer text-center">Successfully launched the app on the Playstore, which is currently used by all the faculties and students at the college.
            <div className='gradient-02 z-0 '/>
            </div>
            
          </motion.div>
          
        </div>
        
        <MyCarousel />
        
      </div>
      
      <div className="relative ">
        <div>
          <img
            className=" absolute top-[-50px] md-right-60 sm:ml-[15%] ml-[5%] lg:h-[620px] md:h-[600px] sm:h-[590px] h-[620px] sm:w-[70%] w-[90%] lg:mt-[-1325px] md:mt-[-1525px] sm:mt-[-1325px] mt-[-1420px] border-8 rounded-3xl shadow-2xl border-white  opacity-30 border-opacity-70 "  />
          <motion.div>
            <Link href="https://play.google.com/store/apps/details?id=com.sggs.sggs" className="absolute lg:text-7xl  text-5xl text-white lg:top-[-1320px] md:top-[-1520px] sm:top-[-1320px] top-[-1420px]  md-right-60 right-20 md-left-60 left-20 cursor-pointer text-center font-semibold">DAILY BITES</Link>
          
          </motion.div>
          <TypingText title=" Monthly Food Subscription" textStyles="md:text-[25px] lg:text-[30px] sm:text-[17px] text-[15px] absolute text-2xl text-white lg:top-[-1230px] md:top-[-1440px] sm:top-[-1240px] top-[-1300px] xl:ml-[40%] lg:ml-[50%] md:ml-[22%] sm:ml-[25%] ml-[28%] text-center " className="type-text"/>
          <motion.div>
            <div className="absolute sm:w-[50%] w-[75%]  md:text-[15px]  text-[10px] sm:top-[0px] top-[-80px] text-white lg:mt-[-1180px] md:mt-[-1400px] mt-[-1190px]  sm:ml-[25%] ml-[10%] cursor-pointer text-center y">Implemented features such as one-tap food ordering and customized meal subscriptions to enhance user convenience.</div>
          </motion.div>
          <motion.div>
            <div className="absolute w-[50%] lg:text-[15px]  text-[10px] text-white lg:mt-[-830px] md:mt-[-1030px] sm:mt-[-830px] mt-[-920px] ml-[25%] cursor-pointer text-center">Successfully launched the app on the Playstore, which is currently used by all the faculties and students at the college.</div>
          </motion.div>

          
        </div>
        <Carousell />
        
        <motion.div>
            <div className="absolute lg:text-7xl  text-5xl text-yellow-100 lg:top-[-620px] md:top-[-820px] sm:top-[-620px] top-[-780px] md-right-60 right-20 md-left-60 left-20 cursor-pointer text-center font-semibold" id="current-head">CURRENT WORKING ON..
            <div className='gradient-03'/>
            </div>
        </motion.div>
        <motion.div className="flex justify-center items-center border-0 p-4 content-center xl:mt-[-760px] lg:mt-[-860px] md:mt-[-1200px] sm:mt-[-930px] mt-[-1290px]">
        <motion.div className="w-[25%] h-[300px] ">
            <div className="absolute p-2 sm:w-[25%] w-[70%] xl:h-[270px] lg:h-[360px] md:h-[470px] sm:h-[370px]  lg:text-[15px]  md:text-[15px] text-[10px] text-white border-white border-4 rounded-2xl shadow-[0_25px_50px_-12px_rgba(5,5,5,5.3)] cursor-pointer text-center xl:mt-[30px] lg:mt-[200px] md:mt-[200px] sm:mt-[200px] mt-[400px] " id="project-1">
              <h1 className="text-2xl p-3 text-center text-yellow-200">Doctors Appointment</h1>
              <p>A web for doctors to handle their appointments at different locations. Projects consists of an admin panel for doctors showing all details about appointment patient has and a special page for patients to register their appointment according to that doctor's speciality, location, available time slots,etc</p></div>
          </motion.div>
          <motion.div className="w-[25%] h-[300px] ml-10 ">
            <div className="absolute p-2 sm:w-[25%] w-[70%] xl:h-[270px] lg:h-[360px] md:h-[470px] sm:h-[370px]  lg:text-[15px]  md:text-[15px] text-[10px] text-white sm:ml-[0] ml-[-25%] border-white border-4 rounded-2xl shadow-[0_25px_50px_-12px_rgba(5,5,5,5.3)] cursor-pointer text-center  xl:mt-[30px] lg:mt-[200px] md:mt-[200px] sm:mt-[200px] mt-[650px]" id="project-2">
            <h1 className="text-2xl p-3 text-center text-yellow-200">SWAG Exam App</h1>
            <p>A personalized and secure app for a club to conduct MCQ-based exams enables students to take exams online in a user-friendly and controlled environment. Students log in securely, ensuring only authorized users can access the platform. The app updates the student's scores in a secure database</p></div>
          </motion.div>
          
          <motion.div className="w-[25%] md:h-[300px] h-0 ml-10">
            <div className="absolute p-2 sm:w-[25%] w-[70%] xl:h-[270px] lg:h-[360px] md:h-[470px] sm:h-[370px] lg:text-[15px]  md:text-[15px] text-[10px] text-white  border-white border-4 rounded-2xl sm:ml-[0] ml-[-50%] shadow-[0_25px_50px_-12px_rgba(5,5,5,5.3)] cursor-pointer text-center  xl:mt-[30px] lg:mt-[200px] md:mt-[200px] sm:mt-[50px] mt-[730px] " id="project-3">
            <h1 className="text-2xl p-3 text-center text-yellow-200">ID Card Web</h1>
            <p>A web application in Python using the Flask framework to generate ID cards for students at SGGSIE&T college by entering their registration number. The application would retrieve student data from a database, render the ID card and allow the user to either convert it to a PDF or print it directly.</p></div>
          </motion.div>
          </motion.div>
      </div>
      
    </section >
  );
};
export default Projects;