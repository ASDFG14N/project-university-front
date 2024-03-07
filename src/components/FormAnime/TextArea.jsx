/* eslint-disable react/prop-types */
import { useState } from "react";

function TextArea(props) {
  const { id, name } = props;
  const [enfocado, setEnfocado] = useState(false);

  const handleFocus = () => {
    setEnfocado(true);
  };

  const handleBlur = () => {
    setEnfocado(false);
  };

  return (
    <textarea
      id={id}
      rows="4"
      className="h-[26rem] bg-transparent p-2.5 w-full transition-all duration-300
      ease-in-out outline-none text-[1.6rem] rounded-md border
      pl-[15px] border-white text-white"
      placeholder="Descripcion del anime..."
      name={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ borderColor: enfocado ? "rgb(218, 0, 64)" : "" }}
    ></textarea>
  );
}

export default TextArea;
