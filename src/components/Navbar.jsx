import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp
} from "react-icons/ai";

const Navbar = (props) => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () =>{
    setNav(prev =>!prev)
    console.log(nav)
  }
  
  useEffect(()=>{
    const handleShadow = () =>{
      if (window.scrollY > 90){
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div className={shadow  ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]" : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={props.data.logo}
          alt="logo"
          width="140"
          height="80"
          className="drop-shadow-3xl"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <VscMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :  "fixed left-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className="flex w-full items-center justify-between">
          <Link href="/">
          <Image
              src={props.data.logo}
              width="130"
              height="70"
              alt="logo"
              className="drop-shadow-3xl"
            /></Link>
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <VscChromeClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let´s build something awesome together
            </p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> handleNav} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#22c4c7]">
                Let´s connect
              </p>
            </div>
            <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineLinkedin />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                {" "}
                <AiOutlineGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                {" "}
                <AiOutlineWhatsApp />
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
