import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = (props) => {
  console.log(props.data.aboutPhoto)
    return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#22c4c7]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 italic">// {props.data.about.subtitle}</p>
          <p className="py-2 text-gray-600 pr-4">{props.data.about.paragraph1} </p>
          <p className="py-2 text-gray-600 pr-4">{props.data.about.paragraph2}</p>
          <p className="py-2 text-gray-600 pr-4">{props.data.about.paragraph3}</p>
          <Link href="/#projects"><p className="py-2 text-gray-600 underline cursor-pointer">Check out my latest projects</p></Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={props.data.aboutPhoto} alt="photo" width="350" height="60" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
