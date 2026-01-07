import Image from "next/image";

export default function AppPreview() {
  return (
    <section id="app" className="bg-[#FFF7F5] py-7 md:py-14">
      <div className="MyContainer grid grid-cols-2 items-center md:grid-cols-2 gap-5 md:gap-16">
        {/* LEFT – PHONE PREVIEW */}
        <div className="flex justify-center col-span-2 md:col-span-1">
          <Image
            src="/images/preview.png"
            alt="AR Drawing App Preview"
            width={700}
            height={500}
            className="drop-shadow-2xl w-full max-w-[700px] h-auto md:-ml-16"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex flex-col justify-center col-span-2 md:col-span-1 md:mt-0 text-center md:text-left">
          <h2 className="md:mb-3 lg:mb-6 mb-2 leading-tight">
            AR Drawing App
            <br />
            Preview
          </h2>

          <p className="text-[#1E1E1E] text-[16px] md:text-[18px] lg:text-[24px] max-w-full md:max-w-150 mx-auto md:mx-0 leading-relaxed md:mb-6 lg:mb-10 mb-5">
            Explore the AR Drawing app interface and see how easy it is to draw
            and trace sketches using your mobile device.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start gap-4 mb-0 md:mb-4 lg:mb-12">
            <div>
              <Image
                src="/images/appstore.png"
                alt="Download on the App Store"
                width={180}
                height={40}
                className="w-[150px] md:w-[180px]"
              />
            </div>

            <div>
              <Image
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                width={190}
                height={40}
                className="w-[150px] md:w-[190px]"
              />
            </div>
          </div>

          {/* STATS – hidden on mobile/tablet */}
          <div className="hidden md:flex gap-12">
            <div>
              <h4 className="text-[48px] font-semibold text-[#1e1e1e]">95%</h4>
              <p className="text-[18px] text-[#1e1e1e]">User Satisfaction</p>
            </div>

            <div>
              <h4 className="text-[48px] font-semibold text-[#1e1e1e]">4.7</h4>
              <p className="text-[18px] text-[#1e1e1e]">Rating out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
