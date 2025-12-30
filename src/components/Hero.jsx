import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FFF7F5] h-[90vh] flex items-center">
  <div
    className="MyContainer grid md:grid-cols-2 gap-12 items-center w-full"
    style={{
      backgroundImage: "url('/images/hero-bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
    }}
  >
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
        <span
          className="
            bg-linear-to-r
            from-[#FF6B6B]
            to-[#FF9F80]
            bg-clip-text
            text-transparent
          "
        >
          AR
        </span>{" "}
        Drawing – <br />
        Draw & Trace Sketches Easily
      </h1>

      <p className="mt-6 text-black text-[24px] leading-9 tracking-[0.02em]">
        Transform your phone into a powerful AR drawing and sketching app.
        Draw with precision, trace images perfectly on paper using your
        camera, and create professional-quality sketches quickly and
        effortlessly.
      </p>

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

    <div className="flex justify-end">
      <Image
        src="/images/hero.png"
        alt="AR Drawing"
        width={700}
        height={500}
        className="rounded-3xl"
      />
    </div>
  </div>
</section>

  );
}
