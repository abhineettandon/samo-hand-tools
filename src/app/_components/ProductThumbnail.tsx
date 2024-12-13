import Image from "next/image"
import Link from "next/link"

import type { Product } from "../types/Product"

export default function ProductThumbnail({ product }: { product: Product }) {
    return (
        <Link href={`/products/${product.slug}`} className="flex flex-col justify-between p-4 bg-white rounded-3xl hover:cursor-pointer hover:scale-105 transition ease-in duration-75">
            <div className="w-56 h-60 relative">
                <Image src={product.img} alt={product.slug} fill={true} style={{objectFit: 'contain'}} />
            </div>
            <span className="font-bold text-xl mt-6 text-secondary">{product.name}</span>
        </Link>
    )
}