import { Fragment } from "react";
import Link from "next/link";

import ProductCard from "./components/ProductCard";

import products from "./products";

export default function Home() {
  return (
    <Fragment>
      <div className="container h-60 md:h-80 flex justify-center flex-col gap-6 md:gap-10 items-center">
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-secondary">Discover the Perfect Hand Tool for Every Job</h1>
        <h2 className="text-lg md:text-3xl text-center font-extralight">Explore our wide range of hand tools designed to meet your specific needs</h2>
      </div>

      <div className="text-center">

      </div>

      <div className="bg-secondary text-white py-4 shadow-lg">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl font-bold">Our Products</h1>
          <div className="flex flex-row gap-8 px-4 py-8 max-w-full overflow-x-scroll">
            { products.map(product => (<ProductCard key={product.slug} product={product} />)) }
          </div>
          <Link className="bg-primary text-black py-2 px-8 rounded-full font-bold text-lg mt-4" href="/">View All</Link>
        </div>
      </div>
      
      <div className="container py-8 text-center">
        <h1 className="text-4xl font-bold">About US</h1>
        <p className="mt-4 text-lg">Welcome to SAMO Hand Tools, your trusted partner in high-quality hand tools, proudly based in Jalandhar, Punjab, India. With a steadfast commitment to excellence, we specialize in the 100% export of premium hand tools, catering to a global clientele with precision and reliability. Our mission is to provide tools that not only meet but exceed the expectations of our customers worldwide.</p>

        <h2 className="text-4xl mt-8 font-bold">Why Choose US</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
          <div>
            <h2 className="font-bold">Uncompromising Quality</h2>
            <p className="text-lg mt-2">We ensure the highest standards of quality in every tool we produce, from the initial design to the final product.</p>
          </div>

          <div>
            <h2 className="font-bold">Global Expertise</h2>
            <p className="text-lg mt-2">With a focus on 100% exports, our tools are trusted by professionals around the world.</p>
          </div>

          <div>
            <h2 className="font-bold">Customer-Centric Approach</h2>
            <p className="text-lg mt-2">We prioritize our customers’ needs, offering exceptional service and support to build lasting relationships.</p>
          </div>

          <div>
            <h2 className="font-bold">Reliability and Trust</h2>
            <p className="text-lg mt-2">We stand by the reliability of our tools, ensuring they perform consistently in all conditions.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}