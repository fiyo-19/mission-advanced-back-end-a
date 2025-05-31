import LogoGoogle from "../../assets/images/logo-google.png";

export default function LoginButton() {
  console.log("berhasil");
  return (
    <>
      <div className="flex w-full">
        <button
          className="flex justify-center mx-auto w-full rounded-xl py-3 gap-2 border border-neutral-200 hover:bg-neutral-100
           duration-150 cursor-pointer"
        >
          <img src={LogoGoogle} />
          <span className="font-medium">Masuk dengan Google</span>
        </button>
      </div>
    </>
  );
}
