import HeaderLogin from "../components/HeaderLogin";
import LoginButton from "../components/button/LoginButtonLoginPage.jsx";
import RegisterButton from "../components/button/RegisterButtonLoginPage.jsx";
import GoogleLoginButton from "../components/button/GoogleLoginButton";
import LoginForm from "../components/form/LoginForm.jsx";

export default function Login() {
  console.log("berhasil");
  return (
    <>
      <HeaderLogin />
      <div className="login-container flex flex-col mx-auto bg-[var(--primary-color)] px-4">
        <div className="login-form flex flex-col justify-center mx-auto rounded-md my-10 p-8 bg-white md:w-md lg:w-xl">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-3xl md:text-4xl">Masuk ke Akun</h1>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>
          <LoginForm />
          <div className="button-section flex flex-col items-center gap-4">
            <LoginButton />
            <RegisterButton />
            <p>atau</p>
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </>
  );
}
