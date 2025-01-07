import { trpc } from "@/app/_trpc/server";
import { Product } from "@/lib/types";
import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type pageProps = {
  params: {
    id: string;
  };
};

async function page({ params }: pageProps) {
  const { id } = params;
  const product = await trpc.product.getProductById(id);
  if (!product) {
    redirect("/");
  }
  const { name, price, description, category, image } = product;
  const message =
    `Halo, saya tertarik untuk membeli motor berikut:%0A%0A` +
    `- *Nama: ${name}*%0A` +
    `- *Deskripsi: ${description}*%0A` +
    `- *Kategori: ${category}*%0A` +
    `- *Harga: Rp ${price}*%0A%0A` +
    `Apakah motor ini masih tersedia? Mohon informasi lebih lanjut. Terima kasih!`;

  return (
    <section
      id="NewProduct"
      className="container pt-[74px] max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8 px-5"
    >
      <h2 className="font-semibold text-[24px] md:text-[36px] mt-5 px-2">
        Detail Produk
      </h2>
      <div className="flex flex-col md:flex-row gap-9 p-9">
        <Image
          src={image || ""}
          height={500}
          width={500}
          alt="product-image"
          className="bg-contain object-cover rounded-lg h-[500px] w-full md:max-w-xl"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h3 className="text-lg text-gray-300 font-semibold">
            {formatToRupiah(price)}
          </h3>
          <p className="text-base pt-5 text-gray-400">{description}</p>
          <div className="pt-5 flex justify-end md:justify-start">
            <a
              target="_blank"
              href={`https://wa.me/6283837331647?text=${message}`}
            >
              <button className="rounded-lg py-2 px-10 text-black bg-white">
                Beli
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
