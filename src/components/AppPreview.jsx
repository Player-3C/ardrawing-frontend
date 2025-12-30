import Image from "next/image";

export default function AppPreview() {
  return (
    <section className="bg-[#FFF7F5] pb-16">
      <div className="MyContainer grid grid-cols-2 items-center">
        {/* LEFT – PHONE PREVIEW */}
        <div className="flex justify-center">

          {/* PHONE IMAGE */}
          <Image
            src="/images/preview.png"
            alt="AR Drawing App Preview"
            width={700}
            height={500}
            className="drop-shadow-2xl"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex justify-end">
          <div>
            <h2 className="text-[42px] font-bold text-gray-900 mb-6">
              AR Drawing App
              <br />
              Preview
            </h2>

            <p className="text-[#1E1E1E] text-[22px] max-w-150 leading-relaxed mb-10">
              Explore the AR Drawing app interface and see how easy it is to
              draw and trace sketches using your mobile device.
            </p>

            {/* STORE BUTTONS */}
            <div className="flex gap-4 mb-12">
              <div>
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={180}
                  height={40}
                />
              </div>

              <div>
                <Image
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  width={190}
                  height={40}
                />
              </div>
            </div>

            {/* STATS */}
            <div className="flex gap-12">
              <div>
                <h4 className="text-[42px] font-semibold text-gray-900">95%</h4>
                <p className="text-[20px] text-gray-600">User Satisfaction</p>
              </div>

              <div>
                <h4 className="text-[42px] font-semibold text-gray-900">4.7</h4>
                <p className="text-[20px] text-gray-600">Rating out of 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
