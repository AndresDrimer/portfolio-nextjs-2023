import React from "react";
import {
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineWhatsApp
  } from "react-icons/ai";


function Main(props){
  
    return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {" "}
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello, my name is
          </p>
          <h1 className="text-[#22c4c7] py-4">{props.data.name}</h1>
          <h1 className="py-2 text-gray-700">I´m a {props.data.workTitle}</h1>
          <p className="py-4 text-gray-600 max-w-[75%] m-auto">{props.data.moto}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
                <AiOutlineLinkedin />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
              <AiOutlineGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
            <AiOutlineMail />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineWhatsApp />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
