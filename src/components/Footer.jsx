import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-video-belajar.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerLinkStyle =
    "text-neutral-600 hover:text-[var(--primary-green-button-color)]";

  return (
    <>
      <div className="footer-container max-w-7xl xl:mx-auto">
        <div className="max-w-7xl grid grid-cols-1 p-4 md:grid-cols-2 2xl:mx-auto">
          <div className="footer-info flex flex-col gap-4 pe-4">
            <img className="w-36" src={Logo} />
            <h1 className="font-medium">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h1>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div className="footer-sitemap grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-4 py-4 md:py-0">
              <h2 className="font-medium">Kategori</h2>
              <Link className={footerLinkStyle} to="">
                Digital & Teknologi
              </Link>
              <Link className={footerLinkStyle} to="">
                Pemasaran
              </Link>
              <Link className={footerLinkStyle} to="">
                Manajemen Bisnis
              </Link>
              <Link className={footerLinkStyle} to="">
                Pengembangan Diri
              </Link>
              <Link className={footerLinkStyle} to="">
                Desain
              </Link>
            </div>
            <div className="flex flex-col gap-4 py-4 md:py-0">
              <h2 className="font-medium">Perusahaan</h2>
              <Link className={footerLinkStyle} to="">
                Tentang Kami
              </Link>
              <Link className={footerLinkStyle} to="">
                FAQ
              </Link>
              <Link className={footerLinkStyle} to="">
                Kebijakan Privasi
              </Link>
              <Link className={footerLinkStyle} to="">
                Ketentuan Layanan
              </Link>
              <Link className={footerLinkStyle} to="">
                Bantuan
              </Link>
            </div>
            <div className="flex flex-col gap-4 py-4 md:py-0">
              <h2 className="font-medium">Komunitas</h2>
              <Link className={footerLinkStyle} to="">
                Tips Sukses
              </Link>
              <Link className={footerLinkStyle} to="">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <hr></hr>
          <div className="footer-copyright flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="order-1 md:order-0">
              <p className="text-neutral-600">
                &#64; 2023 Gerobak Sayur All Rights Reserved.
              </p>
            </div>
            <div className="order-0 flex justify-evenly gap-8 md:order-1">
              <a className="border border-neutral-500 rounded-full p-2" href="">
                <FaLinkedinIn className="text-black hover:text-[var(--primary-green-button-color)] duration-300" />
              </a>
              <a className="border border-neutral-500 rounded-full p-2" href="">
                <FaFacebookF className="text-black hover:text-[var(--primary-green-button-color)] duration-300" />
              </a>
              <a className="border border-neutral-500 rounded-full p-2" href="">
                <FaInstagram className="text-black hover:text-[var(--primary-green-button-color)] duration-300" />
              </a>
              <a className="border border-neutral-500 rounded-full p-2" href="">
                <FaTwitter className="text-black hover:text-[var(--primary-green-button-color)] duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
