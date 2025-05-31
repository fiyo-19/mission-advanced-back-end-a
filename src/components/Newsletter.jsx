import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero-section.jpg";

export default function Newsletter() {
  console.log("berhasil");
  return (
    <>
      <div className="newsletter-container flex flex-col md:w- px-4 xl:px-0 2xl:w-7xl 2xl:mx-auto">
        <div className="relative flex flex-col text-center mx-auto text-white my-14 py-14 px-2 md:px-12 gap-4">
          <div
            className="overlay absolute inset-0 bg-cover bg-center brightness-25 -z-10 rounded-lg"
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></div>
          <div className="flex flex-col px-4 gap-2 mx-auto md:px-14 md:w-xl">
            <p className="text-sm font-extralight xl:text-xl">NEWSLETTER</p>
            <h1 className="text-3xl font-medium lg:text-3xl xl:text-3xl">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="text-sm font-extralight mb-6 xl:text-md">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <div className="flex flex-col justify-between bg-neutral-50 p-2 rounded-lg gap-2 md:flex-row">
              <input
                className="p-2 text-neutral-500 text-center md:text-start"
                placeholder="Masukkan Emailmu"
              ></input>
              <button className="px-8 py-2 text-sm rounded-lg bg-[var(--primary-yellow-button-color)] duration-300 cursor-pointer hover:text-[var(--primary-yellow-button-color)] hover:bg-[var(--hover-yellow-button-color)] md:py-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
