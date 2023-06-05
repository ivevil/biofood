import Link from 'next/link';
import Image from 'next/image';
import MainNavigationItem from './UI/MainNavigationItem';
import { useEffect, useState } from 'react';

function MainNavigation(props: any) {

    const [stickyClass, setStickyClass] = useState('bg-transparent');
    const [isActive, setActive] = useState(true);
    let [toggleClass, settoggleClass] = useState('hidden');

    toggleClass = window.innerWidth > 768 ? 'hidden' : '';

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

    const toggleClassf = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 768 ? settoggleClass('md:hidden') : settoggleClass('');
            setActive(!isActive);
        }
    };

    const closeMenu = () => {
        setActive(!isActive);
        toggleClass = "hidden";
    }

    toggleClass = isActive ? 'hidden' : '';

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
            <nav className={`border-gray-200 opacity-80 fixed w-full z-50 ${stickyClass}`}>
                <div className="hidden md:flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 lg:px-24">
                    <ul className="flex flex-row items-center font-medium mt-0 mr-6 space-x-8 text-sm">
                        <MainNavigationItem href="#intro">
                            <Image src="/bio-logo.png" className="mr-3" alt="Biofood Logo" width="130" height="80" />
                        </MainNavigationItem>
                        {navItems.map(navItem => (
                            <MainNavigationItem key={navItem.name} href={navItem.href}>{navItem.name}</MainNavigationItem>
                        ))}
                    </ul>
                </div>
                <div className={`md:hidden flex items-center p-4`} onClick={toggleClassf}>
                    <button className="outline-none mobile-menu-button">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`${toggleClass} mobile-menu`}>
                    <ul className="bg-white p-10">
                        {navItems.map(navItem => (
                             <MainNavigationItem onClick={closeMenu} key={navItem.name} href={navItem.href}>{navItem.name}</MainNavigationItem>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default MainNavigation;
