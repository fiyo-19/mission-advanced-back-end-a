import HeroImage from "../assets/images/hero-section.jpg";

export default function HeaderLogin() {
  console.log("berhasil");
  return (
    <>
      <div className="hero-container flex flex-col mx-auto px-4 xl:px-0 2xl:w-7xl 2xl:mx-auto">
        <div className="relative flex flex-col text-center text-white my-14 py-14 px-6 md:px-12 gap-4">
          <div
            className="overlay absolute inset-0 bg-cover bg-center brightness-25 -z-10 rounded-lg"
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></div>
          <div className="flex flex-col md:px-24 gap-6">
            <h1 className="text-2xl font-bold lg:text-5xl xl:text-3xl">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-sm xl:text-xl">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="w-fit mx-auto p-4 px-6 text-sm font-medium text-white bg-[var(--primary-green-button-color)] hover:text-[var(--primary-green-button-color)] hover:bg-[var(--hover-green-button-color)] duration-300 rounded-lg cursor-pointer md:text-lg">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
