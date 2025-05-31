import Logo from "../assets/images/logo-video-belajar.png";

export default function HeaderLogin() {
  console.log("berhasil");
  return (
    <>
      <div className="flex 2xl:w-xl 2xl:mx-auto py-6 ps-4 bg-white">
        <img src={Logo} />
      </div>
    </>
  );
}
