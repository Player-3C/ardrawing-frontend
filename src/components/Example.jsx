import Image from "next/image";

const sketches = [
  { src: "/images/sketches/girl.png", tall: true },
  { src: "/images/sketches/spiderman.png" },
  { src: "/images/sketches/clock.png" },
  { src: "/images/sketches/couple.png" },

  { src: "/images/sketches/vampire.png" },
  { src: "/images/sketches/model.png" },
  { src: "/images/sketches/eye.png" },

  { src: "/images/sketches/castle.png" },
  { src: "/images/sketches/girl2.png" },
  { src: "/images/sketches/food.png" },
  { src: "/images/sketches/couple2.png", tall: true },

  { src: "/images/sketches/lips.png" },
  { src: "/images/sketches/kid.png" },
  { src: "/images/sketches/car.png" },
];

export default function ExploreSketches() {
  return (
    <section className="bg-[#FFF7F5] py-20">
      <div className="MyContainer">
        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-extrabold text-center text-black">
          Explore Stunning AR Sketches
        </h2>

        <p className="mt-4 text-center text-gray-700 text-[20px] max-w-4xl mx-auto">
          Discover immersive augmented reality sketches, creative drawing ideas,
          and interactive visuals directly in the app
        </p>

        <div className="grid gap-6 justify-between">
          {/* Grid */}
          <div className="flex gap-6 pt-16">
            {/* COLUMN 1 */}
            <div className="flex gap-6">
              <div>
                <div className="h-126 w-80 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/girl.png"
                    alt=""
                    width={230}
                    height={400}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-60 w-105 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/lion.png"
                    alt=""
                    width={230}
                    height={230}
                  />
                </div>
                <div className="h-60 w-105 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/spiderman.png"
                    alt=""
                    width={230}
                    height={230}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-60 w-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/panda.png"
                    alt=""
                    width={230}
                    height={120}
                  />
                </div>
                <div className="h-60 w-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/girl2.png"
                    alt=""
                    width={200}
                    height={120}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-75 w-85 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/kids.png"
                    alt=""
                    width={300}
                    height={120}
                  />
                </div>
                <div className="h-45 w-85 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/eyes.png"
                    alt=""
                    width={260}
                    height={120}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="flex gap-6">
            {/* COLUMN 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col gap-6">
                <div className="h-75 w-85 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/castle.png"
                    alt=""
                    width={270}
                    height={120}
                  />
                </div>
                <div className="h-45 w-85 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/lipsh.png"
                    alt=""
                    width={230}
                    height={120}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-60 w-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/flowers.png"
                    alt=""
                    width={200}
                    height={120}
                  />
                </div>
                <div className="h-60 w-60 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/baby.png"
                    alt=""
                    width={230}
                    height={120}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-60 w-105 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/wolf.png"
                    alt=""
                    width={200}
                    height={230}
                  />
                </div>
                <div className="h-60 w-105 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/images/sketches/police.png"
                    alt=""
                    width={350}
                    height={230}
                  />
                </div>
              </div>

              <div>
                <div className="h-126 w-80 bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
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
      </div>
    </section>
  );
}
