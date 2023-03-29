import Image from "next/image";
import data from "../../data";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function filmakerwebsite() {
  const createTechDetail = data.projects[0].techDetail.map(it=>{
    return(
      <p className="text-gray-600 py-2 flex items-center" key={it}>
      <RiRadioButtonFill className="pr-1" />
      {it}
    </p>
    )
  })
  
  return (
    <div className="w-full">
      <div className="w-screen h-[15vh] lg:h-[20vh] relative">
        <div className="absolute top-0 left-0 w-full h-[15vh] lg:h-[20vh] bg-black/80 z-10" />
        
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{data.projects[0].title}</h2>
          <h3>{data.projects[0].tech}</h3>
        </div>
      </div>
      <div className="w-screen h-full max-width-[1240px]">
      <Image
        src={data.projects[0].imageInside}
        alt="/"
        
        width="1240"
        height="300"
      /></div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
        
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="px-8 py-2 mt-4 mr-8"><a href={data.projects[0].externalUrl} target="_blank">Demo</a></button>
          <button className="px-8 py-2 mt-4 "><a href={data.projects[0].gitHubUrl} target="_blank">Code</a></button>
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
