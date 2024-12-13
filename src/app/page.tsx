import { Fragment } from "react";
import Link from "next/link";

import ProductThumbnail from "./_components/ProductThumbnail";
import Hero from "./_components/Hero";

import products from "./products";

export default function Home() {
  return (
    <Fragment>
      <Hero
        heading="Discover the Perfect Hand Tool for Every Job"
        subheading="Explore our wide range of hand tools designed to meet your specific needs"
      />

      <div className="bg-secondary text-white py-4 shadow-lg">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl font-bold">Our Products</h1>
          <div className="flex flex-row gap-8 py-8 max-w-full overflow-x-scroll">
            { products.map(product => (<ProductThumbnail key={product.slug} product={product} />)) }
          </div>
          <Link className="bg-primary text-black py-2 px-8 rounded-full font-bold text-lg mt-4" href="/products">View All Prodcuts</Link>
        </div>
      </div>
      
      <div className="container py-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Welcome to SAMO Hand Tools, your trusted partner in high-quality hand tools, proudly based in Jalandhar, Punjab, India. With a steadfast commitment to excellence, we specialize in the 100% export of premium hand tools, catering to a global clientele with precision and reliability. Our mission is to provide tools that not only meet but exceed the expectations of our customers worldwide.</p>
      </div>

      <div className="text-center">
        <Link className="bg-secondary text-white py-2 px-8 rounded-full font-bold text-lg mt-4" href="/about">Know more</Link>
      </div>
    </Fragment>
  )
}