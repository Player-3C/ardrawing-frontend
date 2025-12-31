import { div } from "framer-motion/client";

export default function HowItWorks() {
  return (
    <div className="bg-[#FFF7F5] py-8 md:py-16">
      {/* Desktop version: 1440px and above */}
      <section
        className="hidden xl:block MyContainer relative overflow-hidden min-h-180"
        style={{
          backgroundImage: "url('/images/hiw-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 0px bottom 190px",
          backgroundSize: "1200px",
        }}
      >
        <div className="mx-auto grid grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="relative pr-50">
            <h2 className="text-[42px] font-bold text-gray-900 mb-6">
              How AR Drawing
              <br />
              Works
            </h2>

            <p className="text-[#1E1E1E] text-[18px] max-w-100 leading-relaxed mb-16">
              Learn to create sketches with AR Drawing. Upload or select images,
              choose a feature, and start sketching directly on your mobile.
            </p>

            {/* STEP 1 */}
            <div className="absolute left-42 top-79">
              <div className="relative grid items-start justify-end gap-4 mt-30">
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

      {/* Tablet & Mobile version: below 1440px */}
      <section className="block xl:hidden MyContainer">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 text-center">
            How AR Drawing Works
          </h2>

          <p className="text-[#1E1E1E] text-[16px] sm:text-[28px] text-center leading-relaxed max-w-full sm:max-w- mx-auto">
            Learn to create sketches with AR Drawing. Upload or select images,
            choose a feature, and start sketching directly on your mobile.
          </p>

          {/* Steps stacked vertically */}
          <StepMobile
            number={1}
            title="Upload or Select Sketch"
            desc="Upload any image from your gallery, capture a photo with your camera, or select a sketch from the app."
          />
          <StepMobile
            number={2}
            title="Choose Feature"
            desc="Select whether you want to trace the sketch or draw it using AR mode for real-time guidance."
          />
          <StepMobile
            number={3}
            title="Start Drawing or Tracing"
            desc="Begin sketching or tracing directly on your mobile screen to create accurate, professional-quality artwork."
          />
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
      <h4 className="font-semibold text-gray-900 text-[22px] mb-1">{title}</h4>
      <p className="text-sm text-[#6B6B6B] max-w-60 text-[18px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

/* Mobile / Tablet Step (no dots for mobile/tablet) */
function StepMobile({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-[48px] sm:text-[56px] font-extrabold text-black/10">
        {number}
      </span>
      <h4 className="font-semibold text-gray-900 text-[18px] sm:text-[20px]">{title}</h4>
      <p className="text-[#6B6B6B] text-[16px] sm:text-[18px] leading-relaxed max-w-full sm:max-w-lg">
        {desc}
      </p>
    </div>
  );
}
