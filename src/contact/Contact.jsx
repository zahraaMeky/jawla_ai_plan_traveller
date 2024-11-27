import React from "react";
import img from "../assets/travelpng.png";
import Button from "../layout/Button";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10 rtl">
    <h2 className="text-3xl font-bold mb-8 text-center text-[#181E4B]">اتصـــل بنـــا</h2>


      <div className="flex flex-col md:flex-row justify-between w-full">
        <form>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border-b border-[#DF6951] px-4 py-2 focus:outline-none placeholder-black"
              placeholder="الاسم الأول"
            />
            <input
              type="text"
              className="border-b border-[#DF6951] px-4 py-2 focus:outline-none placeholder-black"
              placeholder="الاسم الأخير"
            />
            <input
              type="email"
              className="border-b border-[#DF6951] px-4 py-2 focus:outline-none col-span-2 placeholder-black"
              placeholder="البريد الإلكتروني"
            />
            <input
              type="tel"
              className="border-b border-[#DF6951] px-4 py-2 focus:outline-none col-span-2 placeholder-black"
              placeholder="رقم الهاتف"
            />
            <textarea
              cols="10"
              rows="5"
              className="border-b border-[#DF6951] px-4 py-2 focus:outline-none col-span-2 placeholder-black"
              placeholder="اكتب رسالتك..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="إرسال الرسالة"
            className="focus:outline-none mt-5 bg-[#DF6951] px-4 py-2 text-white font-bold w-full"
          />
        </form>

        <div className="w-full md:w-2/4 md:mt-0 ">
          <img src={img} alt="صورة اتصل بنا" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
