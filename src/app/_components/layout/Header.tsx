"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Header() {
    const pathname = usePathname();

    function getLinkClasses(href: string) {
        const baseClasses = "px-8 py-2 rounded transition ease-in duration-100";

        if (pathname === href) {
            return `${baseClasses} bg-secondary text-white`
        }

        return `${baseClasses} hover:bg-secondary hover:text-white`
    }

    return (
        <header className="w-full h-20 bg-white shadow-sm">
            <nav className="container h-full flex justify-between items-center">
                <Link href="/">
                    <Image src="/img/logo.png" alt="logo" width={72} height={72} priority={true} />
                </Link>

                <div className="hidden md:flex gap-2">
                    {
                        links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className={getLinkClasses(link.href)}
                            >
                                    {link.title}
                            </a>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}