import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props) {
  console.log(props.anchor)
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#22c4c7] to-[#374151]">
    <Image className="rounded-xl group-hover:opacity-10" src={props.imageBck} alt="background project image" width="500" height="500" />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    <h3 className="text-2xl text-white tracking-wider text-center">{props.title}</h3>
    <p className="pb-4 pt-2 text-white text-center">{props.tech.toUpperCase()}</p>
    <Link href={props.anchor}><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More info</p></Link></div>
</div>
  )
}
