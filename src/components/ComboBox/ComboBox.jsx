/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ComboBox.css";

function ComboBox(props) {
  const { label, items, name } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([items[0]]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleItemSelection = (item) => {
    const isSelected = selectedItems.includes(item);

    if (isSelected) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const selectItem = (item) => {
    toggleItemSelection(item);
  };

  return (
    <div className="select-none w-80">
      <span
        className="p-2.5 bg-[#DA0040] text-white flex 
        items-center justify-between rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="max-h-[5rem] flex items-center">
          {label}:
          <p className=" ml-2 text-xl text-ellipsis">
            {selectedItems.join(", ")}
          </p>
        </div>
        <i className="fa-solid fa-caret-down text-xl"></i>
      </span>
      <ul className={`gen ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
          <li
            className={`overflow-hidden cursor-pointer text-ellipsis text-xl 
            ${selectedItems.includes(item) ? "select" : ""}`}
            key={index}
            onClick={() => {
              selectItem(item);
            }}
          >
            <input
              className="hidden"
              type="checkbox"
              name={name}
              value={index + 1}
              checked={selectedItems.includes(item)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComboBox;
