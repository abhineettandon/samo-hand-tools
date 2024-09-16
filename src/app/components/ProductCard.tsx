import Image from "next/image"

import type { Product } from "../types/Product"

export default function ProductCard({ product }: { product: Product }) {
    return (
        <figure className="flex flex-col justify-between p-8 bg-white rounded-3xl hover:cursor-pointer hover:scale-105 transition ease-in duration-75">
            <div className="w-56 h-60 relative">
                <Image src={product.img} alt={product.slug} fill={true} style={{objectFit: 'contain'}} />
            </div>
            <figcaption className="font-bold text-xl mt-6 text-black">{product.name}</figcaption>
        </figure>
    )
}