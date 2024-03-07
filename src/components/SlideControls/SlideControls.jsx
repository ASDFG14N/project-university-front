import "./SlideControlsStyles.css";

function SlideControls() {
  const handleLoginClick = () => {
    document.querySelector("form.form-login").style.marginLeft = "0%";
  };

  const handleSignupClick = () => {
    document.querySelector("form.form-login").style.marginLeft = "-50%";
  };

  return (
    <div className="slide-controls my-[10px] bg-white relative flex justify-between h-[50px] rounded-md overflow-hidden">
      <input type="radio" name="slider" id="login" defaultChecked className="hidden"/>
      <input type="radio" name="slider" id="signup" className="hidden"/>

      <label
        htmlFor="login"
        className="slide login text-center h-full w-full cursor-pointer text-[18px] z-10 leading-[50px]"
        onClick={handleLoginClick}
      >
        Iniciar Sesión
      </label>
      <label
        htmlFor="signup"
        className="slide signup  text-center h-full w-full cursor-pointer text-[18px] z-10 leading-[50px]"
        onClick={handleSignupClick}
      >
        Crear Cuenta
      </label>
      <div className="slide-tab absolute h-full w-[50%] left-0 rounded-md bg-[#DA0040]"></div>
    </div>
  );
}

export default SlideControls;
