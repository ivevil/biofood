import Link from 'next/link';
import Image from 'next/image';
import MainNavigationItem from './UI/MainNavigationItem';
import { useEffect, useState } from 'react';

function MainNavigation(props: any) {

    const [stickyClass, setStickyClass] = useState('bg-transparent');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 0 ? setStickyClass('bg-white fixed top-0 left-0 z-50') : setStickyClass('bg-transparent');
        }
      };

    const navItems = [
        {
            "name": "HOME",
            "href": "#intro"
        },
        {
            "name": "ABOUT",
            "href": "#about"
        },
        {
            "name": "SERVICES",
            "href": "#services"
        },
        {
            "name": "BLOG",
            "href": "#blog"
        },
        {
            "name": "CONTACT",
            "href": "#contact"
        },
    ]

    return (
        <header>
            <nav className={`border-gray-200 fixed w-full z-50 ${stickyClass}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 lg:px-24">
                    <ul className="flex flex-row items-center font-medium mt-0 mr-6 space-x-8 text-sm">
                        <MainNavigationItem href="#intro">
                            <Image src="/bio-logo.png" className="mr-3" alt="Flowbite Logo" width="130" height="80" />
                        </MainNavigationItem>
                        {navItems.map(navItem => (
                            <MainNavigationItem key={navItem.name} href={navItem.href}>{navItem.name}</MainNavigationItem>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default MainNavigation;
