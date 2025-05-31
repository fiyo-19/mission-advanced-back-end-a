import { useState } from "react";
import { Link } from "react-router-dom";
import HidePass from "../../assets/images/pass-hide.svg";
import ShowPass from "../../assets/images/pass-show.svg";

export default function HeaderLogin() {
  console.log("berhasil");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <form className="flex flex-col w-full py-6">
          <label className="font-medium" htmlFor="email">
            E-Mail<small className="text-red-500">*</small>
          </label>
          <input
            className="flex w-full p-2 border border-neutral-200 rounded-md"
            type="text"
            id="email"
            name="email"
          ></input>
          <br></br>
          <label className="font-medium" htmlFor="email">
            Password<small className="text-red-500">*</small>
          </label>
          <div className="relative ">
            <input
              className="flex w-full p-2 border border-neutral-200 rounded-md"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
            ></input>
            <button
              type="button"
              onClick={togglePassword}
              id="show-password"
              className="cursor-pointer"
            >
              <img
                className=" w-8 absolute right-3 bottom-8"
                src={showPassword ? HidePass : ShowPass}
              />
            </button>
          </div>
          <Link
            to="/forgot-password"
            className="ml-auto font-medium hover:text-neutral-500"
          >
            Lupa Password?
          </Link>
        </form>
      </div>
    </>
  );
}
