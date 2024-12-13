import Link from "next/link";

import products from "../products";

type Props = {
    activeSlug: string
}

export default function ProductNav({ activeSlug }: Props) {
    function getClasses(slug: string) {
        let classes = "p-4 text-lg transition ease-in duration-100 hover:bg-secondary hover:text-white";

        if (slug === activeSlug) {
            classes = `${classes} bg-secondary text-white font-bold`;
        }

        return classes;
    }

    return (
        <div className="divide-y rounded-md flex flex-col">
            {
                products.map(product => (
                    <Link key={product.slug} href={product.slug} className={getClasses(product.slug)}>{ product.name }</Link>
                ))
            }
        </div>
    )
}