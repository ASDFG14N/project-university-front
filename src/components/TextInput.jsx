/* eslint-disable react/prop-types */
import { useState } from "react";

function TextInput(props) {
  const { type, placeholder, name } = props;
  const [enfocado, setEnfocado] = useState(false);

  const handleFocus = () => {
    setEnfocado(true);
  };

  const handleBlur = () => {
    setEnfocado(false);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      onFocus={handleFocus}
      onBlur={handleBlur}
      name={name}
      style={{ borderColor: enfocado ? "rgb(218, 0, 64)" : "" }}
      className="text-white bg-transparent w-[100%] 
        h-full pl-[15px] transition-all 
        duration-300 ease-in-out outline-none rounded-md border border-white"
    />
  );
}

export default TextInput;
