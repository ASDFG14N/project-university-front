import SlideControls from "../components/SlideControls/SlideControls";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  const { signUp, signIn, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  //Validaciones para inicio de session
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const { emailUsername, password } = event.target;
    const jsonData = JSON.stringify({
      emailUsername: emailUsername.value,
      password: password.value,
    });
    signIn(jsonData);
  };
  //Validaciones para registro
  const onSubmitSignUp = async (event) => {
    event.preventDefault();
    const { username, email, password } = event.target;
    const jsonData = JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    signUp(jsonData);
  };

  return (
    <div
      className="bg-[url('/src/assets/img/fondo.jpg')] bg-cover bg-center bg-no-repeat 
      h-[100vh] w-full before:content-[''] before:absolute before:top-0 before:w-full 
      before:h-full before:bg-[#00000080]"
    >
      <div
        className="translate-y-[-50%] translate-x-[-50%] w-[36rem] absolute top-[50%] left-[50%] 
      bg-[#000b31] overflow-hidden p-[30px] rounded-md"
        style={{ boxShadow: "0px 10px 20px 2px rgba(0, 153, 255, 0.842)" }}
      >
        <div className="overflow-hidden">
          {/* Controles para intercambiar de signin a signup */}
          <SlideControls />
          <div className="form-inner flex w-[200%]">
            {/*Formulario de signin */}
            <Form className="form-login" onSubmit={onSubmitLogin}>
              <div className="h-[50px] w-full mt-10">
                <TextInput
                  type="text"
                  placeholder="Correo electrónico o usuario"
                  name="emailUsername"
                />
              </div>
              <div className="h-[50px] w-full mt-10">
                <TextInput
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>
              <div className="mt-2">
                <a className="text-[#DA0040] text-[15px]" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="mt-9 w-full h-20">
                <SubmitButton>Iniciar Sessión</SubmitButton>
              </div>
              <div className="text-center mt-[28px]">
                ¿Aún no eres parte de Ninja Otaku?
                <a className="text-[#DA0040] text-[16px]" href="#">
                  Crear cuenta
                </a>
              </div>
            </Form>

            {/*Formulario de signUp */}
            <Form className="form-signup" onSubmit={onSubmitSignUp}>
              <div className="h-[50px] w-full mt-10">
                <TextInput
                  type="text"
                  placeholder="Nombre de usuario"
                  name="username"
                />
              </div>
              <div className="h-[50px] w-full mt-10">
                <TextInput
                  type="text"
                  placeholder="Correo electrónico"
                  name="email"
                />
              </div>
              <div className="h-[50px] w-full mt-10">
                <TextInput
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>
              <div className="mt-9 w-full h-20">
                <SubmitButton>Crear Cuenta</SubmitButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
