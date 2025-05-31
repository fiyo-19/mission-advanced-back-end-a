import { useState } from "react";
import { Link } from "react-router-dom";
import HidePass from "../../assets/images/pass-hide.svg";
import ShowPass from "../../assets/images/pass-show.svg";
import Flag from "../../assets/images/Indonesia(ID).png";

export default function HeaderLogin() {
  console.log("berhasil");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <form className="flex flex-col w-full py-6">
          <div className="nama-user">
            <label className="font-medium" htmlFor="name">
              Nama Lengkap<small className="text-red-500">*</small>
            </label>
            <input
              className="flex w-full p-2 border border-neutral-200 rounded-md"
              type="text"
              id="name"
              name="name"
            ></input>
          </div>
          <br></br>
          <div className="email-user">
            <label className="font-medium" htmlFor="email">
              E-Mail<small className="text-red-500">*</small>
            </label>
            <input
              className="flex w-full p-2 border border-neutral-200 rounded-md"
              type="text"
              id="email"
              name="email"
            ></input>
          </div>
          <br></br>
          <div className="phone-user">
            <label className="font-medium" htmlFor="phone">
              No.Hp<small className="text-red-500">*</small>
            </label>
            <div className="phone-grid grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="phone-region h-10 flex border border-neutral-300 rounded-sm">
                <div className="p-2 w-[20%] bg-neutral-200 rounded-l-sm">
                  <img src={Flag} />
                </div>
                <input
                  placeholder="+62"
                  className="rounded-r-sm ps-1 w-[80%]"
                ></input>
              </div>
              <input
                className="flex w-full p-2 border border-neutral-200 rounded-md"
                type="text"
                id="phone"
                name="phone"
              ></input>
            </div>
          </div>
          <br></br>
          <div className="password-user">
            <div className="password relative">
              <label className="font-medium" htmlFor="email">
                Password<small className="text-red-500">*</small>
              </label>
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
                  className="w-8 absolute right-3 bottom-8"
                  src={showPassword ? HidePass : ShowPass}
                />
              </button>
            </div>
          </div>
          <div className="confirmpassword relative">
            <label className="font-medium" htmlFor="confirmpassword">
              Confirm Password<small className="text-red-500">*</small>
            </label>
            <input
              className="flex w-full p-2 border border-neutral-200 rounded-md"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
            ></input>
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 bottom-2"
            >
              <img
                className="w-8"
                src={showConfirmPassword ? HidePass : ShowPass}
                alt="toggle confirm password"
              />
            </button>
          </div>
          <Link
            to="/login"
            className="ml-auto font-medium hover:text-neutral-500 py-2"
          >
            Sudah punya akun?
          </Link>
        </form>
      </div>
    </>
  );
}
