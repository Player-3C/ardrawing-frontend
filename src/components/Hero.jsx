import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        bg-[#FFF7F5]
        flex
        items-start md:items-center
        pt-[calc(10vh+14px)]
        md:pt-[12vh]
        md:pb-0
        min-h-[100svh]
      "
    >
      <div
        className="MyContainer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:items-center w-full"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        {/* IMAGE ON TOP FOR MOBILE */}
        <div className="relative w-full h-[300px] md:w-[80%] md:h-[600px] md:ml-auto order-1 md:order-2">
          <Image
            src="/images/hero.png"
            alt="AR Drawing"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start order-2 md:order-1">
          <h1 className="text-[36px] text-center md:text-left md:text-[48px] font-extrabold leading-tight text-black">
            <span className="bg-linear-to-r from-[#FF6B6B] to-[#FF9F80] bg-clip-text text-transparent">
              AR
            </span>{" "}
            Drawing – <br />
            Draw & Trace Sketches Easily
          </h1>

          <p className="mt-6 text-black text-[18px] md:text-[20px] leading-7 tracking-[0.02em] text-center md:text-left">
            Transform your phone into a powerful AR drawing and sketching app.
            Draw with precision, trace images perfectly on paper using your
            camera, and create professional-quality sketches quickly and
            effortlessly.
          </p>

          <div className="flex justify-center md:justify-start mt-8 w-full">
            <button className="flex items-center gap-3 px-10 py-3 rounded-full text-white shadow-lg bg-gradient-to-r from-[#FF6B6B] to-[#FF9F80] hover:opacity-90 transition text-[18px] font-medium">
              <span>Start Drawing</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21l3.75-.75L20.5 6.5a2.12 2.12 0 0 0-3-3L3.75 17.25 3 21z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
