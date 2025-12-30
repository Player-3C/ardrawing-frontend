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
    <section className="bg-[#FFF5F2] py-20">
      <div className="max-w-7xl mx-auto MyContainer">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black">
          Explore Stunning AR Sketches
        </h2>

        <p className="mt-4 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          Discover immersive augmented reality sketches, creative drawing ideas,
          and interactive visuals directly in the app
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[180px]">

          {sketches.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                bg-[#FFE9E5]
                border border-[#FFB3AA]
                rounded-[20px]
                overflow-hidden
                flex items-center justify-center
                ${item.tall ? "row-span-2 p-8" : "p-4"}
              `}
            >
              <Image
                src={item.src}
                alt="AR Sketch"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}







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
    <section className="bg-[#FFF5F2] py-20">
      <div className="max-w-7xl mx-auto MyContainer">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black">
          Explore Stunning AR Sketches
        </h2>

        <p className="mt-4 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          Discover immersive augmented reality sketches, creative drawing ideas,
          and interactive visuals directly in the app
        </p>

        {/* Grid */}
        <div className="flex gap-6 py-16">
          {/* COLUMN 1 */}
          <div className="flex gap-6">
            <div className="w-2.5/10">
              <div className="bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/girl.png"
                  alt=""
                  width={300}
                  height={400}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 w-4/10">
              <div className="bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lion.png"
                  alt=""
                  width={200}
                  height={230}
                />
              </div>
              <div className=" bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lion.png"
                  alt=""
                  width={200}
                  height={230}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 w-1.5/10">
              <div className="bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lips.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
              <div className=" bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lips.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 w-2/10">
              <div className=" bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lips.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
              <div className="bg-[#FFE9E5] border border-[#FFB3AA] rounded-[22px] flex items-center justify-center">
                <Image
                  src="/images/sketches/lips.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

