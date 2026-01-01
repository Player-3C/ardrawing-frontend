import Image from "next/image";
export default function Skills() {
  return (
    <div className="bg-[#FFF7F5] py-8 md:py-16">
      <section className="MyContainer">
        <div className=" bg-[#FFA3A229] border border-[#FFB3AA] rounded-[50px] md:shadow-lg shadow-xl md:px-9 md:py-12 p-6">
          <div className="grid items-center md:gap-3">
            <h2 className="text-[28px] md:text-[42px] font-bold md:font-extrabold text-center text-black tracking-wide">
              Boost Your Drawing Skills
            </h2>

            <p className="md:mt-4 text-center text-[#1e1e1e] text-[16px] md:text-[18px] max-w-6xl mx-auto">
              Practice drawing regularly using AR guidance and smart tracing
              features that help you improve accuracy and control. AR Drawing
              makes learning easier by guiding your hand, helping you build
              confidence, and turn simple ideas into clean, professional-quality
              sketches.
            </p>

            <div className="flex justify-center">
              <button
                className="mt-6 flex items-center gap-3 px-10 py-3 rounded-full text-white text-[16px] md:text-[18px] font-medium bg-gradient-to-r from-[#FF6B6B] to-[#FF9F80] shadow-lg transform-gpu transition-transform duration-300 ease-out hover:scale-105 hover:opacity-90"
              >
                <span>Start Drawing</span>
                <Image
                  src="/images/pencil.png"
                  alt="Pencil Icon"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
