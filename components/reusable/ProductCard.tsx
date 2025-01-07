import { Product } from "@/lib/types";
import { formatToRupiah } from "@/lib/utils";
import React from "react";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { id, name, description, price, category, createdAt, image } = product;
  return (
    <div
      key={product.id}
      className="product-card flex flex-col rounded-[18px] bg-[#181818] overflow-hidden"
    >
      <a
        href={`/produk/${id}`}
        className="thumbnail w-full h-[180px] flex shrink-0 overflow-hidden relative"
      >
        <img
          src={image || ""}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
        <p className="backdrop-blur bg-black/30 rounded-[4px] p-[4px_8px] absolute top-3 right-[14px] z-5">
          {formatToRupiah(price)}
        </p>
      </a>
      <div className="p-[10px_14px_12px] h-full flex flex-col justify-between gap-[14px]">
        <div className="flex flex-col gap-1">
          <a
            href="details.html"
            className="font-semibold line-clamp-2 hover:line-clamp-none"
          >
            {name}
          </a>
          <p className="bg-[#2A2A2A] font-semibold text-xs text-belibang-grey rounded-[4px] p-[4px_6px] w-fit">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
