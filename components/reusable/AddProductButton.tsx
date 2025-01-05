"use client";

import { trpc } from "@/app/_trpc/client";
import React, { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";

const AddProductButton: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const getProducts = trpc.product.getAllProducts.useQuery();
  const addProduct = trpc.product.addProduct.useMutation({
    onSuccess: () => {
      console.log("Product added successfully");
      (
        document.getElementById("add_product_modal") as HTMLDialogElement
      )?.close();
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
    onSettled: () => {
      getProducts.refetch();
    },
  });

  const openModal = () => {
    const modal = document.getElementById(
      "add_product_modal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-white text-[#181818] font-bold p-2 rounded-md"
      >
        Add Product
      </button>
      <dialog id="add_product_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl space-y-2">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);

              const data = {
                name: formData.get("name")?.toString() || "",
                description: formData.get("description")?.toString() || "",
                price: parseFloat(formData.get("price")?.toString() || "0"),
                category: formData.get("category")?.toString() || "",
                image: imageUrl || "",
              };

              if (
                !data.name ||
                !data.category ||
                isNaN(data.price) ||
                data.price <= 0
              ) {
                console.error("Invalid form data", data);
                return;
              }

              console.log(data);

              addProduct.mutate(data);
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="py-2 block text-sm font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="py-2 block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div>
              <label htmlFor="price" className="py-2 block text-sm font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="0"
                step="0.01"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="py-2 block text-sm font-medium"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="select select-bordered w-full"
              >
                <option value="" disabled defaultValue={"baru"}>
                  Select a category
                </option>
                <option value="baru">Baru</option>
                <option value="bekas">Bekas</option>
              </select>
            </div>
            <div>
              <label className="py-2 block text-sm font-medium">
                Upload Image
              </label>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    setImageUrl(res[0].url);
                  }
                }}
                onUploadError={(error) => {
                  console.error("Upload failed:", error);
                  alert("Failed to upload image!");
                }}
              />
              {imageUrl && (
                <p className="text-sm text-green-600 mt-2">
                  Image uploaded: {imageUrl}
                </p>
              )}
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={() =>
                  (
                    document.getElementById(
                      "add_product_modal"
                    ) as HTMLDialogElement
                  )?.close()
                }
                className="btn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddProductButton;
