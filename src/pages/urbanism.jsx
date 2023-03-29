import Image from "next/image";
import data from "../../data";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function urbanism() {
  const createTechDetail = data.projects[3].techDetail.map(it=>{
    return(
      <p className="text-gray-600 py-2 flex items-center" key={it}>
      <RiRadioButtonFill className="pr-1" />
      {it}
    </p>
    )
  })
  
  return (
    <div className="w-full">
      <div className="w-screen relative h-[20vh] lg:h-[30vh] ">
        <div className="absolute top-0 left-0 w-full h-[20vh] lg:h-[30vh] bg-black/80 z-10" />
        
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{data.projects[3].title}</h2>
          <h3>{data.projects[3].tech}</h3>
        </div>
      </div>
      <div className="w-screen h-full max-width-[1240px] flex justify-center">
      <Image
        src={data.projects[3].imageInside}
        alt="/"
        
        width="1240"
        height="300"
      /></div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
        
          <p className="uppercase text-xl tracking-widest text-[#22c4c7]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>{data.projects[3].description}</p>
          <button className="px-8 py-2 mt-4 mr-8"><a href={data.projects[3].externalUrl} target="_blank">Demo</a></button>
          <button className="px-8 py-2 mt-4 "><a href={data.projects[3].gitHubUrl} target="_blank">Code</a></button>
        </div>
        
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
            {createTechDetail}
            </div>
          </div>
        </div>
       
        <Link href="/#projects"><p className="cursor-pointer underline">Back</p></Link>
      </div>
    </div>
  );
}
