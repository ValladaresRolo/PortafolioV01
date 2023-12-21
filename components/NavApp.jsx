"use client"

import React from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenu, Link } from '@nextui-org/react';
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavApp() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    const links = [
        {
            nombre: "Acerca de mi",
            href: "#about",
        },
        {
            nombre: "Proyectos",
            href: "#proyectos",
        },
        {
            nombre: "Contacto",
            href: "#seccion1",
        },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link color="foreground" href="#about" >
                        <AcmeLogo />
                        <p className="font-bold text-inherit ml-3"> RAVM</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {links.map((link, i) => (
                    <NavbarItem key={i}>
                        <Link color="foreground" href={link.href} onClick={handleLinkClick}>
                            {link.nombre}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {links.map((link, i) => (
                    <NavbarItem key={i}>
                        <Link color="foreground" href={link.href} aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden" onClick={handleLinkClick}>
                            {link.nombre}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
