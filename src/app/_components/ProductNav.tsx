import Link from "next/link";

import products from "../_products";
import ProductThumbnail from "./ProductThumbnail";

type Props = {
    activeSlug: string
}

export default function ProductNav({ activeSlug }: Props) {
    function getClasses(slug: string) {
        let classes = "p-2 text-lg transition ease-in duration-100 hover:bg-secondary hover:text-white rounded-xl";

        if (slug === activeSlug) {
            classes = `${classes} bg-secondary text-white font-bold`;
        }

        return classes;
    }

    return (
        <div className="flex lg:justify-center items-center overflow-x-auto pb-4 gap-4">
            {
                products.map(product => (
                    <Link key={product.slug} href={product.slug} className={getClasses(product.slug)}>
                        <ProductThumbnail product={product} small />
                    </Link>
                ))
            }
        </div>
    )
}