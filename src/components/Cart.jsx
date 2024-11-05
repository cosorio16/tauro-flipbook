import useStore from "../global/store";
import { utils, writeFile } from "xlsx";

function Cart() {
  const { cart, toggleShowCart, showCart } = useStore();

  const downloadCartAsExcel = () => {
    const cartData = cart.map((item) => ({
      Imagen: item.image,
      Título: item.title,
      Cantidad: item.quantity,
      Precio: item.price,
    }));

    const worksheet = utils.json_to_sheet(cartData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Carrito");
    utils.sheet_add_aoa(
      worksheet,
      [["Imagen", "Título", "Cantidad", "Precio"]],
      { origin: "A1" }
    );
    worksheet["!cols"] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 15 }];
    writeFile(workbook, "carrito.xlsx");
  };

  cart.map((c) => console.log(c.image));
  return (
    <div className="fixed w-96 h-screen right-0 bottom-0 bg-white p-4 flex flex-col gap-6 z-50">
      <button
        onClick={() => toggleShowCart()}
        className="absolute top-10 right-5 border rounded-full text-white bg-red-500 hover:scale-105 p-2 transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="m12.96 4.46l-1.42-1.42L8 6.59L4.46 3.04L3.04 4.46L6.59 8l-3.55 3.54l1.42 1.42L8 9.41l3.54 3.55l1.42-1.42L9.41 8z"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-4 pt-20 grow ">
        {cart.length > 0 &&
          cart.map((c, index) => (
            <div
              key={index}
              className="border flex gap-1 items-center rounded border-gray-100 hover:scale-105 transition-all"
            >
              <img src={c.image} alt="" className="w-36" />
              <div className="flex flex-col gap-2 text-sm font-medium p-1 ">
                <p>{c.title}</p>
                <p>{`Cantidad: ${c.quantity}`}</p>
                <p>{`Precio: ${c.price}`}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={downloadCartAsExcel}
        className="border px-4 py-2 rounded font-medium bg-slate-800 text-white hover:scale-105 transition-all"
      >
        Descagar
      </button>
    </div>
  );
}

export default Cart;
