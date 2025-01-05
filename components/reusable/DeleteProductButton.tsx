"use client";
import { trpc } from "@/app/_trpc/client";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteProductButton = ({ id }: { id: string }) => {
  const openModal = () => {
    const modal = document.getElementById(
      "delete_product_modal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  };

  const closeModal = () => {
    document.getElementById("add_product_modal") as HTMLDialogElement;
  };

  const getProducts = trpc.product.getAllProducts.useQuery();

  const deleteProductMutation = trpc.product.deleteProduct.useMutation({
    onSettled: () => {
      getProducts.refetch();
    },
  });

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await deleteProductMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product!");
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-red-400 text-[#181818]  p-4 rounded-md "
      >
        <FaTrash />
      </button>
      <dialog id="delete_product_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure ?</h3>
          <p className="py-4">
            This action cannot be undone. Are you sure you want to delete this
            product?
          </p>
          <div className="modal-action">
            <form method="dialog" className="space-x-4" onSubmit={handleDelete}>
              <button type="submit" className="btn btn-error">
                Delete
              </button>
              <button
                type="button"
                onClick={() =>
                  (
                    document.getElementById(
                      "delete_product_modal"
                    ) as HTMLDialogElement
                  )?.close()
                }
                className="btn"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteProductButton;
