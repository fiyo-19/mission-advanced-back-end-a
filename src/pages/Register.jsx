import HeaderLogin from "../components/HeaderLogin";
import RegisterButton from "../components/button/RegisterButtonRegisterPage.jsx";
import LoginButton from "../components/button/LoginButtonRegisterPage.jsx";
import GoogleLoginButton from "../components/button/GoogleLoginButton";
import RegisterForm from "../components/form/RegisterForm.jsx";

export default function Register() {
  return (
    <>
      <HeaderLogin />
      <div className="register-container flex flex-col mx-auto bg-[var(--primary-color)] px-4">
        <div className="register-form flex flex-col justify-center mx-auto rounded-md my-10 p-8 bg-white md:w-md lg:w-xl">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-3xl md:text-4xl">Pendaftaran Akun</h1>
            <p>Yuk, daftarkan akunmu sekarang juga!</p>
          </div>
          <RegisterForm />
          <div className="button-section flex flex-col items-center gap-4">
            <RegisterButton />
            <LoginButton />
            <p>atau</p>
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </>
  );
}
