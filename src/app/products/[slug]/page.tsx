"use client";

import { Fragment, useEffect, useState } from "react"

import Hero from "../../_components/Hero"
import ProductNav from "../../_components/ProductNav";
import ProductDetailsCard from "../../_components/ProductDetailsCard";

import type { Product } from "../../types/Product"
import products from "../../_products"
import ProductThumbnail from "@/app/_components/ProductThumbnail";

type Params = {
    slug: string
}

type Props = {
    params: Params
}


export default function Page({ params: { slug } }: Props) {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const product = products.filter(product => product.slug === slug)[0];

        setProduct(product)
    }, [slug])

    return (
        <Fragment>
            <Hero heading="Products" subheading="Explore our wide range of hand tools designed to meet your specific needs"></Hero>

            <div className="container">
                { product && <ProductNav activeSlug={product.slug} /> }
            
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    {product && product.varients.map((product, i) => <ProductDetailsCard product={product} key={i} />)}
                </div>
            </div>
        </Fragment>
    )
}