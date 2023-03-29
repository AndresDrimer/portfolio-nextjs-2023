import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import data from "../../data";

function ContactIcons() {
  console.log(data.contact.linkedin);
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
      <a href={data.contact.linkedin} target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineLinkedin />
        </div>
      </a>
      <a href={data.contact.github} target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineGithub />
        </div>
      </a>
      <a href="mailto:andresdrimer@hotmail.com?subject=Hello Andres!" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineMail />
        </div>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491164930517" target="_blank">
      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
        <AiOutlineWhatsApp />
      </div></a>
    </div>
  );
}

export default ContactIcons;
