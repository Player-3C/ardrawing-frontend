"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does DEVSRANK offer?",
    answer:
      "DEVSRANK offers a wide range of digital solutions, including mobile app development, website development, UI/UX design, and digital strategy to help businesses grow and innovate.",
  },
  {
    question: "What services does DEVSRANK offer?",
    answer:
      "DEVSRANK offers a wide range of digital solutions, including mobile app development, website development, UI/UX design, and digital strategy to help businesses grow and innovate.",
  },
  {
    question: "What services does DEVSRANK offer?",
    answer:
      "DEVSRANK offers a wide range of digital solutions, including mobile app development, website development, UI/UX design, and digital strategy to help businesses grow and innovate.",
  },
  {
    question: "What services does DEVSRANK offer?",
    answer:
      "DEVSRANK offers a wide range of digital solutions, including mobile app development, website development, UI/UX design, and digital strategy to help businesses grow and innovate.",
  },
  {
    question: "What services does DEVSRANK offer?",
    answer:
      "DEVSRANK offers a wide range of digital solutions, including mobile app development, website development, UI/UX design, and digital strategy to help businesses grow and innovate.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null); // ✅ remove :number
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#FFF7F5] md:py-16 py-8">
      <div className="MyContainer">
        <h2 className="text-[32px] md:text-[42px] md:font-extrabold font-bold text-center text-black">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-[#1e1e1e] text-[16px] md:text-[18px] max-w-4xl mx-auto">
          Everything you need to know about using our AR drawing app to sketch,
          trace, and create art easily.
        </p>

        <div className="md:mt-14 mt-8 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#FFA3A229] overflow-hidden transition-all duration-300 ${
                  isOpen ? "rounded-3xl" : "rounded-full"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-8
                    py-5
                    text-left
                    font-medium
                    text-gray-900
                    text-[16px]
                    md:text-[20px]
                  "
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 translate-y-0 pb-6"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                  }}
                >
                  <p className="text-gray-600 md:text-[18px] text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
