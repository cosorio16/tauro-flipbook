import Header from "./Header";
import { useState, useEffect } from "react";
import useStore from "../global/store";


function Product({ image, breadcrumb, title, stock, code, link, price }) {
  const { toggleShowProduct, page, updatePage } = useStore();
  const [quantity, setQuantity] = useState(1);

  const handleUpdateCart = () => {};

  useEffect(() => {
    updatePage(page);
  }, []);

  return (
    <div className="w-screen h-screen fixed inset-0 backdrop-blur bg-gray-100 bg-opacity-80 z-50 flex flex-col text-gray-800 ">
      <Header></Header>
      <div className="pt-24 flex flex-col items-center gap-8 relative px-4">
        <button
          onClick={() => toggleShowProduct()}
          className="absolute top-50 right-10 border rounded-full text-white bg-red-500 hover:scale-105 p-2 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="m12.96 4.46l-1.42-1.42L8 6.59L4.46 3.04L3.04 4.46L6.59 8l-3.55 3.54l1.42 1.42L8 9.41l3.54 3.55l1.42-1.42L9.41 8z"
            />
          </svg>
        </button>
        <img
          src={image}
          alt=""
          className="w-1/2 rounded aspect-auto object-cover mix-blend-multiply"
        />
        <div className="text-start flex flex-col gap-2">
          <h1 className="font-medium text-sm tracking-wide text-gray-600 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 2048 2048">
              <path
                fill="currentColor"
                d="m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z"
              />
            </svg>
            {`${breadcrumb}`}
          </h1>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h1 className="text-2xl font-semibold">{`$${price}`}</h1>
          <p className="font-medium text-lg flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m14.06-3.56a1.5 1.5 0 0 1 0 2.12l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.939l4.44-4.44a1.5 1.5 0 0 1 2.12 0"
              />
            </svg>
            {stock} disponibles
          </p>
          <p className="font-semibold flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 4h2v16H2zm4 0h2v16H6zm3 0h3v16H9zm4 0h2v16h-2zm3 0h2v16h-2zm3 0h3v16h-3z"
              />
            </svg>
            Código: {code}
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-gray-800 hover:scale-105 transition-all text-white text-base font-medium px-4 py-2 rounded">
              Agregar
            </button>
            <input
              type="number"
              name=""
              id=""
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min={1}
              className="bg-transparent w-10 border text-center text-lg font-bold  px-2 py-2"
            />
            <button className="bg-gray-800 hover:scale-105 transition-all text-white text-base font-medium px-4 py-2 rounded">
              Eliminar
            </button>
          </div>
          <button className="bg-gray-800 hover:scale-105 transition-all text-white text-base font-medium px-4 py-2 rounded ">
            Añadir al carrito
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:scale-105 transition-all text-white text-base font-medium px-4 py-2 rounded text-center"
          >
            Ver Producto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
