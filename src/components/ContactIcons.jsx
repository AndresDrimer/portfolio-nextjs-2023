import {
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineWhatsApp,
  } from "react-icons/ai";
  
function ContactIcons() {
  return (
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
  )
}

export default ContactIcons