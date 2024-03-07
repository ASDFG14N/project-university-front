/* eslint-disable react/prop-types */

function SelectForm(props) {
  const { label, name, options } = props;

  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-xl text-white">
        {label}
      </label>
      <select
        className="border text-xl rounded-md block w-full p-2.5 bg-[#DA0040] border-none text-white"
        name={name}
      >
        <option disabled>
          Seleccionar
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectForm;
