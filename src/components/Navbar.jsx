import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-[10vh] bg-[#FFF1EE] border-b-2 border-[#FFB3AA]">
      <nav className="h-full flex items-center MyContainer">
        {/* Logo */}
        <div className="mr-14">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={45}
            height={50}
            className="rounded-[14px] border border-[#fdcac8]"
          />
        </div>

        {/* Menu */}
        <ul
          className="
            hidden md:flex items-center gap-10
            text-[18px]
            leading-none
            tracking-[0.02em]
            text-gray-900
            font-semibold
          "
        >
          {["Home", "Features", "Explore", "App", "Contact Us"].map((item) => (
            <li key={item} className="text-center">
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#FF6B5E] transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
