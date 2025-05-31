import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import HeroImage from "../assets/images/hero-section.jpg";
import Profile from "../assets/images/profile.jpeg";

export default function Product({ title, price }) {
  console.log("berhasil");
  return (
    <>
      <Link className="w-fit hover:scale-105 duration-500">
        <div className="flex flex-col md:w-96 gap-4 p-4 rounded-lg border border-neutral-300">
          <img className="w-full" src={HeroImage} />
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-base text-neutral-500">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
          <div className="flex flex-col gap-4">
            <div className="mentor-profile flex gap-4">
              <img className="rounded-md w-16 md:w-11" src={Profile} />
              <div className="flex flex-col gap-1">
                <h1 className="font-medium">Jenna Ortega</h1>
                <p className="text-neutral-500">
                  Senior Accountant di{" "}
                  <span className="font-medium">Gojek</span>
                </p>
              </div>
            </div>
            <div className="class-star flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="underline text-neutral-500">3.5 (86)</p>
              </div>
              <h1 className="font-semibold text-2xl text-[var(--primary-green-button-color)]">
                {price}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
