export default function Skills() {
  return (
    <div className="bg-[#FFF7F5] py-8 md:py-16">
      <section className="MyContainer">
        <div className=" bg-[#FFE9E5] border border-[#FFB3AA] rounded-[50px] md:shadow-2xl shadow-xl md:px-9 md:py-12 p-6">
          <div className="grid items-center md:gap-3">
            <h2 className="text-[28px] md:text-[42px] font-bold md:font-extrabold text-center text-black tracking-wide">
              Boost Your Drawing Skills
            </h2>

            <p className="md:mt-4 text-center text-gray-700 text-[16px] md:text-[18px] max-w-6xl mx-auto">
              Practice drawing regularly using AR guidance and smart tracing
              features that help you improve accuracy and control. AR Drawing
              makes learning easier by guiding your hand, helping you build
              confidence, and turn simple ideas into clean, professional-quality
              sketches.
            </p>

            <div className="flex justify-center">
              <button className="flex mt-6 items-center gap-3 px-10 py-3 rounded-full text-white shadow-lg bg-gradient-to-r from-[#FF6B6B] to-[#FF9F80] hover:opacity-90 transition text-[16px] md:text-[18px] font-medium">
              {" "}
              <span>Start Drawing</span> {/* Pencil Icon */}{" "}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3 21l3.75-.75L20.5 6.5a2.12 2.12 0 0 0-3-3L3.75 17.25 3 21z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
