import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        bg-[#FFF7F5]
        flex
        items-start md:items-center
        min-h-[100svh]
      "
    >
      <div
        className="MyContainer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        {/* IMAGE */}
        <div className="relative w-full h-[300px] md:h-[600px] order-1 md:order-2 mt-8 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="AR Drawing"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center items-center md:items-start order-2 md:order-1">
          <h1 className="text-[36px] text-center md:text-left md:text-[48px] font-extrabold leading-tight text-black">
            <span className="bg-linear-to-r from-[#FF6B6B] to-[#FF9F80] bg-clip-text text-transparent">
              AR
            </span>{" "}
            Drawing – <br />
            Draw & Trace Sketches Easily
          </h1>

          <p className="mt-6 text-[#1e1e1e] text-[18px] md:text-[20px] leading-7 tracking-[0.02em] text-center md:text-left">
            Transform your phone into a powerful AR drawing and sketching app.
            Draw with precision, trace images perfectly on paper using your
            camera, and create professional-quality sketches quickly and
            effortlessly.
          </p>

          <div className="flex justify-center md:justify-start mt-8 w-full">
            <button
              className="flex items-center gap-3 px-10 py-3 rounded-full text-white shadow-lg bg-gradient-to-r from-[#FF6B6B] to-[#FF9F80] text-[18px] font-medium transition-transform duration-300 ease-out hover:scale-105 hover:opacity-90"
            >
              {" "}
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
  );
}
