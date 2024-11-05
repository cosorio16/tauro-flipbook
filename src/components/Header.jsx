import { useEffect, useState } from "react";
import useStore from "../global/store";
function Header() {
  const { page, updatePage, limit } = useStore();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    updatePage(pageNumber - 1);
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(page + 1);
  }, [page]);

  return (
    <header className=" w-full h-20 shadow flex items-center justify-between py-4 px-4 fixed z-50 bg-white">
      <div className="flex gap-4 items-center">
        <button className="hover:scale-110 transition">
          <svg width="35" height="35" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
            />
          </svg>
        </button>
        <img src="/logo.png" alt="" className="w-28" />
      </div>
      <div className="flex items-center gap-8">
        <div className="bottom-10 border px-4 py-2 rounded flex gap-2 font-medium left-5">
          Página
          <input
            type="number"
            value={pageNumber}
            min={0}
            className=" w-7 text-center focus:border-none focus:outline-none"
            onChange={(e) => setPageNumber(e.target.value)}
          />
          / {limit}
        </div>
        <button className="hover:scale-110 transition">
          <svg width="30" height="30" viewBox="0 0 32 32">
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

      {/* <div className="fixed w-screen h-screen bg-white bottom-0 left-0 backdrop-blur bg-opacity-50 p-4">
      <h1 className="text-4xl font-medium uppercase text-center">Tauro</h1>
      </div> */}
    </header>
  );
}

export default Header;
