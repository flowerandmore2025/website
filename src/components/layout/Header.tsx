"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Bars3Icon, XMarkIcon, PhoneIcon} from "@heroicons/react/24/outline";
import {navigation, phoneNumber} from "@/constants";
import * as motion from "motion/react-client";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white relative z-10">
            {/* Top bar with phone number */}
            <div className="hidden sm:flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-end py-2 gap-4">
                <a href="tel:0612394924"
                   className="text-sm leading-6 text-primary-800 font-light hover:text-primary-600 transition-colors duration-200 cursor-pointer flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <PhoneIcon className="h-4 w-4"/>
                        <span>โทร: 0612394924</span>
                    </div>
                </a>
                <a href="tel:0897248956"
                   className="text-sm leading-6 text-primary-800 font-light hover:text-primary-600 transition-colors duration-200 cursor-pointer flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <PhoneIcon className="h-4 w-4"/>
                        <span>โทร: 0897248956</span>
                    </div>
                </a>
            </div>

            {/* Main header with logo */}
            <div
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-row sm:flex-col justify-between sm:justify-center items-center pt-4 sm:pt-8 pb-4">
                {/* Logo */}
                <Link href="/" className="sm:mb-6">
                    <span className="sr-only">Flower & More</span>
                    <Image
                        src="/images/logo.png"
                        alt="Flower & More"
                        width={250}
                        height={250}
                        className="h-auto w-auto max-w-[180px] sm:max-w-[250px]"
                        priority
                    />
                </Link>

                {/* Mobile menu button - only visible on small screens */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-primary-800"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="hidden sm:block py-4">
                {/* Desktop navigation */}
                <div className="hidden lg:flex justify-center gap-x-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg uppercase tracking-wider font-medium text-primary-800 hover:text-primary-600 transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`lg:hidden ${
                    mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
                }`}
            >
                {/* Background overlay */}
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                        aria-hidden="true"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}

                {/* Mobile menu panel */}
                <motion.div
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:px-6 py-4 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-primary-200"
                    initial={{x: "100%"}}
                    animate={{x: mobileMenuOpen ? 0 : "100%"}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Flower & More</span>
                            <Image
                                src="/images/logo.png"
                                alt="Flower & More"
                                width={150}
                                height={150}
                                className="h-8 sm:h-10 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-primary-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 sm:mt-8 flow-root">
                        <div className="-my-4 sm:-my-6 divide-y divide-primary-200">
                            <div className="space-y-2 sm:space-y-3 py-4 sm:py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base tracking-wide text-primary-800 hover:bg-primary-50 transition-colors duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-4 sm:py-6 flex justify-around">
                                <a href="tel:0612394924" className="-mx-3 rounded-lg px-3 py-2.5 text-sm font-light text-primary-800 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 flex items-center gap-2" >
                                    <PhoneIcon className="h-4 w-4"/>
                                    <span>โทร: 0612394924</span>
                                </a>
                                <a href="tel:0897248956" className="-mx-3 rounded-lg px-3 py-2.5 text-sm font-light text-primary-800 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 flex items-center gap-2" >
                                    <PhoneIcon className="h-4 w-4"/>
                                    <span>โทร: 0897248956</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
