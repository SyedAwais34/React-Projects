import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("Awais");
  const [email, setEmail] = useState("awais123@gmail.com");
  const [text, setText] = useState("How are you?");

  const onViaCallSubmit = () => {
    console.log("I am form call");
  }

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    console.log({
      name,
      email,
      text
    });
    

  }


  return (
    <div className="max-w-[1400px] mx-auto flex gap-20 items-center">
      <div className="">
        <div className="flex gap-8 mb-4 max-w-[472px] mt-8">
          <button 
            className="flex items-center w-[220px] cursor-pointer gap-2 justify-center h-[44px] rounded-lg text-[16px] font-medium bg-black text-white">
            <MdMessage className="text-2xl" />
            VIA SUPPORT CHAT
          </button>
          <button onClick={onViaCallSubmit}
            className="flex items-center w-[220px] h-[44px] cursor-pointer justify-center gap-2 rounded-lg text-[16px] font-medium bg-black text-white">
            <IoMdCall className="text-2xl" />
            VIA CALL
          </button>
        </div>

        <button className="flex items-center justify-center cursor-pointer w-[472px] py-2 gap-2 mb-4 rounded-lg text-lg font-medium bg-transparent text-black border-2">
          <MdMessage className="text-2xl" />
          VIA EMAIL FORM
        </button>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col relative">
            <label
              htmlFor="name"
              className="absolute top-[-10px] left-[14px] bg-white px-2 text-[18px] font-medium"
            >
              Name
            </label>
            <input
              className="border-gray-400 border-2 h-[40px] px-2 py-5"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="email"
              className="absolute top-[-10px] left-[14px] bg-white px-2 text-[18px] font-medium"
            >
              Email
            </label>
            <input
              className="border-gray-400 border-2 h-[40px] px-2 py-5"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="text"
              className="absolute top-[-10px] left-[14px] bg-white px-2 text-[18px] font-medium"
            >
              Text
            </label>
            <textarea
              className="border-gray-400 border-2 h-[40px] px-2 py-5"
              name="name" rows={20}
            />
          </div>
          <div className="flex justify-end">
          <button className="flex items-center w-[220px] h-[44px] cursor-pointer justify-center gap-2 rounded-lg text-[16px] font-medium bg-black text-white">
            SUBMIT
          </button>
          </div>

          <div>
            {
              name + " " + email + " " + text 
            }
          </div>

        </form>
      </div>

      <div>
        <img className="w-[650px]" src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
