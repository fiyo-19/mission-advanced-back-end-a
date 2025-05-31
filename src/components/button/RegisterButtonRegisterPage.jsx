import { Link } from "react-router-dom";

export default function RegisterButton() {
  console.log("berhasil");
  return (
    <>
      <div className="flex w-full">
        <Link
          to="/login"
          className="flex justify-center mx-auto w-full rounded-xl font-medium text-white bg-[var(--primary-green-button-color)] py-3 
          hover:text-[var(--primary-green-button-color)] hover:bg-[var(--hover-green-button-color)] duration-150 cursor-pointer"
        >
          Register
        </Link>
      </div>
    </>
  );
}
