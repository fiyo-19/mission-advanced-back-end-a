import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <>
      <div className="flex w-full">
        <Link
          to="/register"
          className="flex justify-center mx-auto w-full rounded-xl font-medium text-[var(--primary-green-button-color)] bg-[var(--hover-green-button-color)] py-3 
          hover:text-white hover:bg-[var(--primary-green-button-color)] duration-150"
        >
          Daftar
        </Link>
      </div>
    </>
  );
}
