import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-primary">
            <div className="container grid grid-cols-1 md:grid-cols-4 p-8 gap-4 text-center">
                <div className="flex justify-center">
                    <Image src="/img/logo.png" alt="logo" style={{objectFit: 'contain'}} width={150} height={150} quality={80} priority={true} />
                </div>
                
                <div className="flex- flex-col gap-4 items-center">
                    <h4 className="text-lg font-medium">Contact Us</h4>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-lg font-medium">Products</h4>
                    <div className="flex flex-col gap-1 items-center">
                        <Link href="/products" className="hover:underline">Combination Spanners</Link>
                        <Link href="/products" className="hover:underline">Bill Hooks</Link>
                        <Link href="/products" className="hover:underline">Digging Tools</Link>
                        <Link href="/products" className="hover:underline">Hoes</Link>
                        <Link href="/products" className="hover:underline">Rakes</Link>
                        <Link href="/products" className="hover:underline">Scrapers</Link>
                        <Link href="/products" className="hover:underline">Slashers</Link>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-lg font-medium">Useful Links</h4>
                    <div className="flex flex-col gap-1 items-center">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/" className="hover:underline">About</Link>
                        <Link href="/" className="hover:underline">Products</Link>
                        <Link href="/" className="hover:underline">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}