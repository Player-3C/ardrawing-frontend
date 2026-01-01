import Image from "next/image";

const features = [
  {
    img: "/images/upload.png",
    title: "Upload & Draw",
    desc: "Upload any image from your gallery or take a new photo with your mobile camera, then draw or trace it easily on your phone.",
  },
  {
    img: "/images/draw.png",
    title: "AR Sketch Drawing",
    desc: "Draw sketches in real time using your mobile camera with AR guidance. Capture your ideas & create high-quality sketch instantly on your phone.",
  },
  {
    img: "/images/trace.png",
    title: "Sketch Tracing",
    desc: "Select a sketch, choose the trace feature, and start tracing directly on your mobile screen for a smooth and precise drawing experience.",
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-[#FFF7F5] py-8 md:py-16">
      <section>
        <div className="MyContainer">
          <h2 className="text-[28px] md:text-[42px] font-bold md:font-extrabold text-center text-black">
            Smart Drawing Features
          </h2>

          <p className="mt-4 text-center text-[#1e1e1e] text-[16px] md:text-[18px] max-w-6xl mx-auto">
            Discover smart drawing features that let you sketch freely, trace
            images, and draw real-world objects using your phone camera with
            ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 md:pt-12">
            {features.map((f) => (
              <div
                key={f.title}
                className="
                  min-h-[13rem] md:min-h-[16rem] 
                  bg-[#FFA3A229] border border-[#FFB3AA]
                  rounded-[22px] shadow
                  px-6 py-9 md:px-6 md:py-9 lg:px-6 lg:py-9
                  flex flex-col
                "
              >
                {/* IMAGE */}
                <div className="flex items-center gap-4">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={35}
                    height={35}
                    className="object-contain"
                  />

                  <h3 className="text-black text-[20px] lg:text-[24px] font-bold tracking-wide">
                    {f.title}
                  </h3>
                </div>

                <p className="text-gray-700 mt-6 text-[16px] lg:text-[18px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
