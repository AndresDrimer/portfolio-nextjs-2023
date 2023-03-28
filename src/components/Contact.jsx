import ContactIcons from "./ContactIcons";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

import Link from "next/link";

export default function Contact(props) {
  return (
    <div  id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1024px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#22c4c7]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-col-5 gap-8">
          {/*lef*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="contact pic"
                />
              </div>
              <div>
                <h2 className="py-2">{props.data.name}</h2>
                <p>{props.data.workTitle}</p>
                <p className="py-4">{props.data.status}</p>
              </div>{" "}
              <p className="uppercase pt-8">Conect with me</p>
              <div>
                <ContactIcons />
              </div>
            </div>
          </div>
        </div>
        {/*right*/}
        <div className="cols-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    Phone number{" "}
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email </label>
                <input
                  type="email"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                />
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor.pointer hover:scale-100 ease-in duration-300"> <HiOutlineChevronDoubleUp className="text-[#22c4c7]" size={30}/></div>
        </Link>
      </div>
    </div>
  );
}
