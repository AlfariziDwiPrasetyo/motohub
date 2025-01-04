"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteProductButton: React.FC = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "add_product_modal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-red-400 text-[#181818]  p-4 rounded-md "
      >
        <FaTrash />
      </button>
      <dialog id="add_product_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteProductButton;
