import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const links = [
        {
            title: 'Products',
            href: '/products'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ];

    return (
        <header className="w-full h-20 bg-white shadow-sm">
            <nav className="container h-full flex justify-between items-center">
                <Link href="/">
                    <Image src="/img/logo.png" alt="logo" width={72} height={72} priority={true} />
                </Link>

                <div className="hidden md:flex gap-2">
                    {
                        links.map((link, i) => (
                            <a className="px-8 py-2 rounded hover:text-white hover:bg-secondary transition ease-in duration-100" href="/" key={i}>{link.title}</a>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}