import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center fixed bottom-0 border-t rounded shadow-2xl bg-white">
      <footer className="flex justify-between items-center w-[670px] p-2 px-6">
        <div>
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="select-none border-2 border-gray-400 rounded-md hover:bg-gray-100 trasition duration-200 p-1 px-3  mr-4 capitalize"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="select-none border-2 border-gray-400 rounded-md p-1 px-3 capitalize hover:bg-gray-100 trasition duration-200"
            >
              next
            </button>
          )}
        </div>
        <div className="select-none">
          Page {page} of {totalPages}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
