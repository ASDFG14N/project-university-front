/* eslint-disable react/prop-types */
function FileInput(props) {
  const { name } = props;
  return (
    <div className="flex h-full items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="px-4 flex flex-col items-center justify-center w-full h-64 border-2  
        border-dashed rounded-md cursor-pointer hover:bg-bray-800 
        bg-[#000b31] border-gray-600 hover:border-gray-500
        hover:bg-[#000b3188]"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-16 h-16 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-xl">
            <span className="font-semibold">Haga clic para cargar</span> o
            arrastra y suelta
          </p>
          <p className="text-lg">PNG or JPG</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" name={name} />
      </label>
    </div>
  );
}

export default FileInput;
