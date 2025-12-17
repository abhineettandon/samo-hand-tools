import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

import products from "@/app/_products";

export default function Footer() {
  return (
    <footer className="bg-primary mt-8 w-full">
      <div className="container py-16 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-8">
        <div className="relative w-36 h-32 place-self-center">
          <Image src="/img/logo.png" alt="logo" fill={true} />
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h4 className="text-lg font-bold">Contact Us</h4>

          <div className="flex gap-4 items-center">
            <FaLocationDot size={22} />
            <div className="text-left">
              <p>SAMO Hand Tools</p>
              <p>B-6, New Gobind Nagar</p>
              <p>Gujja Peer, Jalandhar</p>
              <p>Punjab</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaPhone size={20} />
            <div>
              <a href="tel:+91 62399 40093" className="hover:underline block">
                +91 62399 40093
              </a>
              <a href="tel:+91 62399 50093" className="hover:underline block">
                +91 62399 50093
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaEnvelope size={22} />
            <div className="text-left">
              <a href="mailto:contact@samohandtools.com">
                contact@samohantools.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-lg font-bold">Products</h4>
          <div className="flex flex-col gap-1">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-lg font-bold">Useful Links</h4>
          <div className="flex flex-col gap-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white p-1 text-center">
        <small>&copy; SAMO Hand Tools</small>
      </div>
    </footer>
  );
}
