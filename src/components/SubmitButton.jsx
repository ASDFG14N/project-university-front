/* eslint-disable react/prop-types */

function SubmitButton(props) {
  const { children, name } = props;
  return (
    <button
      type="submit"
      className="rounded-md bg-[#DA0040] h-full w-full text-3xl"
      name={name}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
