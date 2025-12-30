"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#FFF7F5] pt-16 pb-28">
      <div className="MyContainer">
        <div className="bg-[#FFE9E6] rounded-4xl p-6 md:p-3 grid grid-cols-1 lg:grid-cols-3 gap-8 border border-[#FFB1AC]">
          
          {/* LEFT INFO */}
          <div className="bg-[#FFF4F2] rounded-[28px] p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-[36px] font-extrabold text-black">
                Contact Us
              </h2>

              <p className="mt-3 text-gray-700 text-[18px] leading-relaxed">
                Contact us for help with AR drawing,
                tracing, and sketching.
              </p>
            </div>

            <div className="mt-6 space-y-6 text-gray-800">
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span>+92 (300) 1234 968</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span>akash@devsrank.com</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1" />
                <span className="leading-relaxed">
                  Office #112, 2nd Floor Kohinoor Plaza 1,
                  Faisalabad, Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="lg:col-span-2 px-4 md:px-6 py-4">

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email" />
              <Input label="Phone" />
            </div>

            {/* SUBJECT */}
            <div className="mt-10 grid gap-5">
              <p className="text-[16px] font-medium text-gray-800 mb-3">
                Select Subject?
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-3 text-gray-700 text-[16px]">
                <Radio label="General Inquiry" />
                <Radio label="Feedback" />
                <Radio label="Other" />
                <Radio label="General Inquiry" />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-8">
              <label className="text-[16px] font-medium text-gray-800">
                Message
              </label>

              <textarea
                placeholder="Write your message.."
                className="
                  mt-2
                  w-full
                  bg-transparent
                  border-b
                  border-gray-400
                  focus:outline-none
                  focus:border-black
                  resize-none
                  h-24
                  text-[15px]
                "
              />
            </div>

            {/* BUTTON */}
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="
                  bg-[#FF7F73]
                  hover:bg-[#ff6a5c]
                  text-white
                  px-9
                  py-3
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

/* REUSABLES */

function Input({ label }) {
  return (
    <div>
      <label className="text-[16px] font-medium text-gray-800">
        {label}
      </label>
      <input
        className="
          mt-2
          w-full
          bg-transparent
          border-b
          border-gray-400
          focus:outline-none
          focus:border-black
          text-[16px]
        "
      />
    </div>
  );
}

function Radio({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="subject" className="accent-black" />
      <span>{label}</span>
    </label>
  );
}
