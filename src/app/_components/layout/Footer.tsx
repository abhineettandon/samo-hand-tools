import Image from "next/image"
import Link from "next/link"
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-primary mt-8">
            <div className="container grid grid-cols-1 md:grid-cols-4 p-8 gap-8 text-center">
                <div className="flex justify-center">
                    <Image src="/img/logo.png" alt="logo" style={{objectFit: 'contain'}} width={150} height={150} quality={80} priority={true} />
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                    <h4 className="text-lg font-bold">Contact Us</h4>
                    <div className="flex items-center self-center gap-4">
                        <FaLocationDot size={22} />
                        <div className="text-left">
                            <p>SAMO Hand Tools</p>
                            <p>B-6, New Gobind Nagar</p>
                            <p>Gujja Peer, Jalandhar</p>
                            <p>Punjab</p>
                        </div>
                    </div>
                    <div className="flex items-center self-center gap-4 mr-12">
                        <FaPhone size={20} />
                        <div className="text-left">
                            <p>Call Us</p>
                            <a href="tel:+91 94652 52993" className="hover:underline">+91 94652 52993</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <h4 className="text-lg font-bold">Products</h4>
                    <div className="flex flex-col gap-1">
                        <Link href="/products" className="hover:underline">Combination Spanners</Link>
                        <Link href="/products" className="hover:underline">Bill Hooks</Link>
                        <Link href="/products" className="hover:underline">Digging Tools</Link>
                        <Link href="/products" className="hover:underline">Hoes</Link>
                        <Link href="/products" className="hover:underline">Rakes</Link>
                        <Link href="/products" className="hover:underline">Scrapers</Link>
                        <Link href="/products" className="hover:underline">Slashers</Link>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                    <h4 className="text-lg font-bold">Useful Links</h4>
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/" className="hover:underline">Products</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}