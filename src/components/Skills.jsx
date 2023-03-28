import Image from "next/image";
import React from "react";

function Skills(props) {
  
    const createSkills = props.data.skills.map( skill => {
        return (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" key={skill.id}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skill.icon}
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase text-gray-600">{skill.tech}</h3>
                
              </div>
            </div>
          </div>

        )
    })


    return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#22c4c7]">
          {" "}
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {createSkills}
       


        </div>
      </div>
    </div>
  );
};

export default Skills;
