import ContactIcons from "./ContactIcons";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

import Link from "next/link";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [mailSendedMessage, setMailSendedMessage] = useState("")
  
    const form = useRef();

    
    function handleSubmit(e){
      e.preventDefault();
      emailjs.sendForm('service_q5vhhxh', 'template_x0doc9n', form.current, '6fqjtlkE6QrFFSTzt')
        .then((result) => {
            console.log(result.text);
            setFormData({
              fullName: "",
              phone:"",
              email: "",
              subject: "",
              message: "",
            });
          setMailSendedMessage(">> Your message has been sended OK")
        }, (error) => {
            console.log(error.text);
            const errorMsg = document.getElementById("msg")
            errorMsg.style.color="red"
            setMailSendedMessage(">> Sorry, your message hasn´t been sended correctly. Please consider writing directly to andresdrimer@hotmail.com")

        });
    };
  

    function handleChange(event) {
      setFormData(prev => {
       return {
           ...prev,
           [event.target.name]: event.target.value
       }
      })
       
     }

  return (
    <div  id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1024px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#22c4c7]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-col-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-3xl hover:scale-105 ease-in duration-300 p-4"
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
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    Phone number{" "}
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email </label>
                <input
                  type="email"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
                />
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="text-[#22c4c7] tracking-widest text-center" id="msg">{mailSendedMessage}</div>
      </div>

      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor.pointer hover:scale-100 ease-in duration-300"> <HiOutlineChevronDoubleUp className="text-[#22c4c7]" size={30}/></div>
        </Link>
      </div>
    </div>
  );
}
