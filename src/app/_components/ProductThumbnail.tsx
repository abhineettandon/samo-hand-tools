"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Product } from "../types/Product";

type Props = {
  product: Product;
  small?: boolean;
};

export default function ProductThumbnail({ product, small = false }: Props) {
  const router = useRouter();

  function handleClick(product: Product) {
    router.push(`/products/${product.slug}`);
  }

  return (
    <div
      className="text-center cursor-pointer"
      onClick={() => handleClick(product)}
    >
      <div
        className={`flex justify-center items-center bg-white rounded-full border-4 mb-4 ${small ? "w-28 h-28" : "w-52 h-52"}`}
      >
        <div className={`relative ${small ? "w-16 h-16" : "w-36 h-36"}`}>
          <Image
            className="object-contain"
            src={product.img}
            alt={product.slug}
            fill={true}
          />
        </div>
      </div>
      <span
        className={`font-semibold break-normal ${small ? "text-base" : "text-xl"}`}
      >
        {product.name}
      </span>
    </div>
  );
}
