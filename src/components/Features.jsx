import { Upload, Camera, Pencil } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload & Draw",
    desc: "Upload any image from your gallery or take a new photo with your mobile camera, then draw or trace it easily on your phone.",
  },
  {
    icon: Camera,
    title: "AR Sketch Drawing",
    desc: "Draw sketches in real time using your mobile camera with AR guidance. Capture your ideas & create high-quality sketch instantly on your phone.",
  },
  {
    icon: Pencil,
    title: "Sketch Tracing",
    desc: "Select a sketch, choose the trace feature, and start tracing directly on your mobile screen for a smooth and precise drawing experience.",
  },
];

export default function Features() {
  return (
    <div className="bg-[#FFF7F5] md:py-16 py-8">
      <section id="features">
        <div className="MyContainer">
          <h2 className="text-[28px] md:text-[42px] font-bold md:font-extrabold text-center text-black">
            Smart Drawing Features
          </h2>

          <p className="mt-4 text-center text-gray-700 text-[16px] md:text-[18px] max-w-6xl mx-auto">
            Discover smart drawing features that let you sketch freely, trace
            images, and draw real-world objects using your phone camera with
            ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 md:pt-12">
            {features.map((f) => (
              <div
                key={f.title}
                className="
                  min-h-[13rem] md:min-h-[16rem] lg:min-h-[16rem] w-full bg-[#FFE9E5] border border-[#FFB3AA] 
                  rounded-[22px] shadow 
                  px-6 py-9 
                  md:px-6 md:py-9
                  lg:px-9 lg:py-12 
                  flex flex-col
                "
              >
                <div className="flex items-center gap-3">
                  <f.icon className="text-[#FF6B5E] w-7 h-7 shrink-0" />
                  <h3 className="text-black text-[20px] md:text-[20px] lg:text-[24px] font-bold tracking-wide">
                    {f.title}
                  </h3>
                </div>

                <p className="text-gray-700 mt-6 text-[16px] md:text-[16px] lg:text-[18px] leading-relaxed">
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
