import Image from "next/image"

import Table from "./Table"

import type { ProductVariant } from "../types/Product"

type Props = {
    product: ProductVariant
}

export default function ProductDetailsCard({ product }: Props) {
    return (
        <div className="bg-white p-4 shadow-sm drop-shadow-sm hover:shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-6">{product.name}</h3>

            <div className="flex flex-col">
                <div className="border-4 p-2 rounded-lg">
                    <div className="w-full h-60 relative">
                        <Image src={product.img} alt={product.name} fill={true} style={{objectFit: 'contain'}} />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="mb-6">{ product.description }</p>
                    <p>Product Details:</p>
                    <Table data={ product.specs } />
                </div>
            </div>
        </div>
    )
}