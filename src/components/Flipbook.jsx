import { useState } from "react";
import useStore from "../global/store";
import Product from "./Product";

function Flipbook({ images, topic, products, onClick }) {
  const { toggleShowProduct, updateProduct } = useStore();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className="p-2 flex flex-col w-[400px] m-auto border border-gray-300 rounded snap-center h-[700px]">
      <header className="h-10 bg-gray-100 flex items-end justify-end p-2 text-gray-500 border border-b-gray-300">
        <h1 className="font-medium text-xs">{topic}</h1>
      </header>
      <div className="bg-gray-100 grid grid-cols-2 grid-rows-3 items-center gap-2 ">
        {images.map((i, index) => (
          <div className="relative productconteiner" key={index}>
            <img
              src={i}
              alt=""
              className=" aspect-square object-cover mix-blend-multiply"
            />
            <button
              className="absolute border p-2 rounded-full bg-white bottom-5 right-5 shopbutton"
              onClick={() => {
                updateProduct(index);
                toggleShowProduct();
                onClick();
              }}
            >
              <svg width="25" height="25" viewBox="0 0 32 32">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 9v20h22V9Zm5 0s0-6 6-6s6 6 6 6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flipbook;
