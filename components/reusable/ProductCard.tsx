import { Product } from "@/lib/types";
import React from "react";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { id, name, description, price, category, createdAt } = product;
  return (
    <div
      key={product.id}
      className="product-card flex flex-col rounded-[18px] bg-[#181818] overflow-hidden"
    >
      <a
        href="details.html"
        className="thumbnail w-full h-[180px] flex shrink-0 overflow-hidden relative"
      >
        <img
          src="/assets/images/thumbnails/harley-davidson.jpg"
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
        <p className="backdrop-blur bg-black/30 rounded-[4px] p-[4px_8px] absolute top-3 right-[14px] z-5">
          Rp 29,000,000,000
        </p>
      </a>
      <div className="p-[10px_14px_12px] h-full flex flex-col justify-between gap-[14px]">
        <div className="flex flex-col gap-1">
          <a
            href="details.html"
            className="font-semibold line-clamp-2 hover:line-clamp-none"
          >
            SaaS Website Master Template: Streamline Your Digital Solution
          </a>
          <p className="bg-[#2A2A2A] font-semibold text-xs text-belibang-grey rounded-[4px] p-[4px_6px] w-fit">
            Template
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
