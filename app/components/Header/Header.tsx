"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => setIsMenu(!isMenu);

  return (
    <header>
      {/* Top contact info */}
      <header className="bg-gray-100 w-full border-b border-gray-900">
        <div className="flex justify-between items-center h-16 px-4 lg:px-8">
          {/* Logo */}
          <div>
            <Image src="/logo.png" width={120} height={40} alt="logo" />
          </div>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex space-x-6">
            {["Home", "Courses", "Services", "Achievements", "About Us", "Testimonial"].map((item) => (
              <Link href={`#${item.toLowerCase().replace(" ", "")}`} key={item}>
                <span className="relative text-lg font-medium text-gray-700 cursor-pointer group">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/loginpage">
              <button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white">
                Login
              </button>
            </Link>
            <Link href="/signuppage">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black border border-black">
                Signup
              </button>
            </Link>
          </div>

      </div>
</header>
      {/* Main navigation bar for deskto


      {/* Logo and Buttons */}
      
      {/* Mobile menu button */}
      <div className="lg:hidden flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image src="/Ddsgnr Library.1.svg" width={120} height={40} alt="Ddsgnr Library.1" />
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={handleMenu} className="text-black">
          {isMenu ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu (visible when isMenu is true) */}
      {isMenu && (
        <div className="lg:hidden flex flex-col items-center space-y-4 p-4 bg-gray-100">
          {["Home", "Courses", "Services", "Achievements", "About Us", "Testimonial"].map((item) => (
            <Link href={`#${item.toLowerCase().replace(" ", "")}`} key={item}>
              <span className="text-lg font-medium text-gray-700 cursor-pointer">
                {item}
              </span>
            </Link>
          ))}
          <Link href="/loginpage">
            <button className="border-2 border-black p-4 px-8 rounded-lg hover:bg-white m-5 text-xl font-semibold">
              Login
            </button>
          </Link>
          <Link href="/signuppage">
            <button className="border-2 border-black p-4 px-8 rounded-lg bg-black m-5 text-white text-xl font-semibold">
              Signup
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
