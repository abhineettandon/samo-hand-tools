"use client";

import { Fragment, useEffect, useState } from "react"

import Hero from "../../_components/Hero"
import ProductNav from "../../_components/ProductNav";
import ProductDetailsCard from "../../_components/ProductDetailsCard";

import type { Product } from "../../types/Product"
import products from "../../products"

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

            <div className="container grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-3">
                    <div className="bg-white shadow-sm drop-shadow-sm rounded-md">
                        <ProductNav activeSlug={slug} />
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-9">
                    {
                        product && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 transition ease-in duration-500">
                                {
                                    product.varients.map((varient, i) => (
                                        <ProductDetailsCard key={i} product={varient} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}