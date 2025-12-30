export default function Skills() {
  return (
    <div className="bg-[#FFF7F5] py-16">
      <section className="MyContainer">
        <div className=" bg-[#FFE9E5] border border-[#FFB3AA] rounded-[50px] shadow-2xl px-9 py-12">
          <div className="grid items-center gap-3">
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-center text-black tracking-wide">
              Boost Your Drawing Skills
            </h2>

            <p className="mt-4 text-center text-gray-700 text-[22px] max-w-6xl mx-auto">
              Practice drawing regularly using AR guidance and smart tracing
              features that help you improve accuracy and control. AR Drawing
              makes learning easier by guiding your hand, helping you build
              confidence, and turn simple ideas into clean, professional-quality
              sketches.
            </p>

            <div className="flex justify-center">
              <button
                className="
            mt-8
            px-10 py-3
            rounded-full
            text-white
            shadow-lg
            bg-linear-to-r
            from-[#FF6B6B]
            to-[#FF9F80]
            hover:opacity-90
            transition
            text-[22px]
          "
              >
                Start Drawing ✏️
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
