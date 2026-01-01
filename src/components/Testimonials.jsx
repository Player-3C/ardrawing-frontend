import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    text: "This AR drawing app made sketching so simple. I can trace and draw with much better accuracy.",
    image: "/images/review1.png",
  },
  {
    name: "Emma Wilson",
    text: "This AR drawing app makes sketching much easier than I expected. Tracing helps me draw more cleanly and confidently.",
    image: "/images/review2.png",
  },
  {
    name: "Alex Carter",
    text: "Using this AR drawing app improved my accuracy a lot. Tracing guides make sketching smoother and more enjoyable.",
    image: "/images/review3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FFF7F5] py-8 md:py-12">
      <div className="MyContainer">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[42px] md:font-extrabold font-bold text-center text-black">
          User Reviews of AR Drawing
        </h2>

        <p className="mt-4 text-center text-[#1e1e1e] text-[16px] md:text-[18px] max-w-6xl mx-auto">
          Real feedback from artists, beginners, and creators using our AR drawing
          and sketching tools.
        </p>

        {/* Reviews */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                bg-[#FFA3A229]
                border border-[#FFB3AA]
                rounded-[22px]
                p-4
                md:p-6
                lg:p-8
                flex flex-col
                gap-4
                shadow-sm
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image
                  src={r.image} // updated image
                  alt={r.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />

                <div>
                  <h4 className="text-black font-semibold text-lg">
                    {r.name}
                  </h4>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#FF6B5E] text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
