import React from "react";
import ContactIcons from "./ContactIcons";

function Main(props) {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {" "}
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello, my name is
          </p>
          <h1 className="text-[#22c4c7] py-4">{props.data.name}</h1>
          <h1 className="py-2 text-gray-700">I´m a {props.data.workTitle}</h1>
          <p className="py-4 text-gray-600 max-w-[75%] m-auto">
            {props.data.moto}
          </p>
          
<ContactIcons />

        </div>
      </div>
    </div>
  );
}

export default Main;
