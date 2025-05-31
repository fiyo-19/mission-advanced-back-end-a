import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-video-belajar.png";
import Profile from "../assets/images/profile.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative border-b border-neutral-200 p-4 md:px-14 flex justify-between items-center 2xl:max-w-7xl 2xl:mx-auto">
      <img src={Logo} alt="Logo" className="w-32" />

      {/* Burger Icon - tampil di mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl z-20"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full right-4 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out z-10 p-4 flex flex-col items-center gap-4 md:hidden ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <img className="w-11 rounded-md" src={Profile} alt="Profile" />
        <p className="text-gray-700">Kategori</p>
        <Link
          to="/login"
          className="text-red-500 p-1 px-2 rounded-md duration-200 hover:text-white hover:bg-red-400"
        >
          Keluar
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <p className="text-gray-700">Kategori</p>
        <img className="w-11 rounded-md" src={Profile} alt="Profile" />
      </div>
    </div>
  );
}
