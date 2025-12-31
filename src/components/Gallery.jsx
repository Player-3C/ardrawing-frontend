import Image from "next/image";

export default function ExploreSketches() {
  return (
    <section className="bg-[#FFF7F5] pt-16 pb-10 overflow-hidden">
      <div className="MyContainer">
        {/* Heading */}
        <h2 className="text-[28px] md:text-[42px] font-bold md:font-extrabold text-center text-black">
          Explore Stunning AR Sketches
        </h2>

        <p className="md:mt-4 text-center text-[#1e1e1e] text-[16px] md:text-[18px] max-w-3xl mx-auto">
          Discover immersive augmented reality sketches, creative drawing ideas,
          and interactive visuals directly in the app
        </p>

        <div className="grid gap-6">
          {/* GRID */}
          <div className="grid grid-cols-12 gap-6 md:pt-16 pt-8">
            {/* Tall Card */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="h-126 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/girl.png"
                  alt=""
                  width={230}
                  height={400}
                />
              </div>
            </div>

            {/* Two Medium */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-6">
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lion.png"
                  alt=""
                  width={230}
                  height={230}
                />
              </div>
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/spiderman.png"
                  alt=""
                  width={230}
                  height={230}
                />
              </div>
            </div>

            {/* Small Stack */}
            <div className="col-span-6 md:col-span-2 flex flex-col gap-6">
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/panda.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/girl2.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
            </div>

            {/* Wide Cards */}
            <div className="col-span-6 md:col-span-4 flex flex-col gap-6">
              <div className="h-75 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/kids.png"
                  alt=""
                  width={300}
                  height={120}
                />
              </div>
              <div className="h-45 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/eyes.png"
                  alt=""
                  width={260}
                  height={120}
                />
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="grid grid-cols-12 gap-6">
            {/* Column A – Wide Top + Short Bottom */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-6">
              <div className="h-75 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/castle.png"
                  alt=""
                  width={270}
                  height={120}
                />
              </div>
              <div className="h-45 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lipsh.png"
                  alt=""
                  width={230}
                  height={120}
                />
              </div>
            </div>

            {/* Column B – Two Square Cards */}
            <div className="col-span-6 sm:col-span-3 md:col-span-2 flex flex-col gap-6">
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/flowers.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/baby.png"
                  alt=""
                  width={230}
                  height={120}
                />
              </div>
            </div>

            {/* Column C – Medium Width Stack */}
            <div className="col-span-6 sm:col-span-3 md:col-span-3 flex flex-col gap-6">
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/wolf.png"
                  alt=""
                  width={200}
                  height={230}
                />
              </div>
              <div className="h-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/police.png"
                  alt=""
                  width={350}
                  height={230}
                />
              </div>
            </div>

            {/* Column D – Tall Card */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <div className="h-126 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/gemini.png"
                  alt=""
                  width={280}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
