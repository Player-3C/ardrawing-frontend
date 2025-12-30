import { div } from "framer-motion/client";

export default function HowItWorks() {
  return (
    <div className="bg-[#FFF7F5] py-16">
      <section
        className="MyContainer relative overflow-hidden  min-h-180"
        style={{
          backgroundImage: "url('/images/hiw-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 0px bottom 190px",
          backgroundSize: "1200px",
        }}
      >
        <div className=" mx-auto grid grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="relative pr-50">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              How AR Drawing
              <br />
              Works
            </h2>

            <p className="text-[#1E1E1E] text-[24px] max-w-100 leading-relaxed mb-16">
              Learn to create sketches with AR Drawing. Upload or select images,
              choose a feature, and start sketching directly on your mobile.
            </p>

            {/* STEP 1 (ALIGNED UNDER HEADING) */}

            <div className="absolute left-42 top-79">
              <div className="relative grid items-start justify-end gap-4  mt-30">
              <span className="absolute right-0 -top-20 text-[170px] font-extrabold text-black/5">
                1
              </span>

              <Dot />

              <Step
                title="Upload or Select Sketch"
                desc="Upload any image from your gallery, capture a photo with your camera, or select a sketch from the app."
              />
            </div>
            </div>
            
          </div>

          {/* RIGHT FLOW */}
          <div className="relative">
            
            {/* STEP 2 */}
            <div className="absolute top-72 grid items-start gap-4">
              <span className="absolute right-0 -top-22 text-[200px] font-extrabold text-black/5">
                2
              </span>

              <Dot />
              <Step
                title="Choose Feature"
                desc="Select whether you want to trace the sketch or draw it using AR mode for real-time guidance."
              />
            </div>

            {/* STEP 3 */}
            <div className="absolute left-82 top-4 grid items-start gap-4">
              <span className="absolute right-0 -top-22 text-[200px] font-extrabold text-black/5">
                3
              </span>

              <Dot />
              <Step
                title="Start Drawing or Tracing"
                desc="Begin sketching or tracing directly on your mobile screen to create accurate, professional-quality artwork."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* HELPERS */

function Dot() {
  return (
    <div className="w-12 h-12 bg-[#FFE9E5] rounded-xl shadow-2xl flex items-center justify-center shrink-0">
      <span className="w-5 h-5 bg-[#ff7a66] rounded-full" />
    </div>
  );
}

function Step({ title, desc }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 text-[26px] mb-1">{title}</h4>
      <p className="text-sm text-[#6B6B6B] max-w-75 text-[22px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
