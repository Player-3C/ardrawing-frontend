"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFE9E6] py-25">
      <div className="MyContainer">
        <div className="flex flex-col items-center text-center">

          {/* LOGO */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3">
            <Image
              src="/images/logo.png"
              alt="AR Drawing"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-[36px] font-bold text-[#FF7F73] mb-10">
            AR Drawing
          </h3>

          {/* LINKS */}
          <div className="flex items-center gap-14 mb-10">
            <Link
              href="/privacy-policy"
              className="text-[20px] font-bold text-gray-900 hover:opacity-80 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[20px] font-bold text-gray-900 hover:opacity-80 transition"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-[14px] text-gray-600 leading-relaxed">
            © 2025 AR Drawing. Built with{" "}
            <span className="text-red-500">❤</span>{" "}
            by Devsrank Pvt. Ltd.
            <br />
            All rights reserved
          </p>

        </div>
      </div>
    </footer>
  );
}
