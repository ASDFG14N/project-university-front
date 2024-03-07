/* eslint-disable react/prop-types */
function Form(props) {
  const { className, children, onSubmit } = props;
  return (
    <form
      style={{
        transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }}
      onSubmit={onSubmit}
      action="#"
      className={`${className} w-[50%] duration-[0.6s]`}
    >
      {children}
    </form>
  );
}

export default Form;
