/* eslint-disable react/prop-types */
function Slider({ id, children }) {
  const handleLeft = () => {
    const imgList = document.querySelector(`.img-list-${id}`);
    if (imgList) {
      const scrollAmount = imgList.offsetWidth * -0.6;
      imgList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleRight = () => {
    const imgList = document.querySelector(`.img-list-${id}`);
    if (imgList) {
      const scrollAmount = imgList.offsetWidth * 0.6;
      imgList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[35rem] mb-3 py-0 px-2 flex items-center">
      <div
        className="btn-chevron-left w-[3rem] h-[3rem] flex justify-center items-center mr-2"
        onClick={handleLeft}
      >
        <i
          className="fa-solid fa-chevron-left text-gray-400 text-7xl cursor-pointer
      transition-colors hover:text-gray-600"
        ></i>
      </div>
      <div
        className={`img-list-${id} w-full h-full flex overflow-x-auto gap-5`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
      <div
        className="btn-chevron-right w-[3rem] h-[3rem] flex justify-center items-center ml-2"
        onClick={handleRight}
      >
        <i
          className="fa-solid fa-chevron-right text-gray-400 text-7xl cursor-pointer 
    transition-colors hover:text-gray-600"
        ></i>
      </div>
    </div>
  );
}

export default Slider;
