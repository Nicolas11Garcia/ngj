import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle
} from "@nextui-org/react";
import React from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function ocultarMenuOpen() {
    setIsMenuOpen(false);
  }

  return (
    <Navbar className="z-[400]" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/*Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <img
            className="-ml-4"
            src="/logo-ngj.webp"
            alt="logo-ngj"
            width={90}
          />
        </NavbarBrand>
      </NavbarContent>
      {/*Menu bar */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      {/*LINKS EN EL CENTRO */}
      <NavbarContent className="hidden md:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="#top" className="text-base text-negro font-semibold">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#trabajos" className="text-base text-negro font-semibold">
            Trabajos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#experiancia-laboral"
            className="text-base  text-negro font-semibold"
          >
            Experiencia Laboral
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#educacion"
            className="text-base  text-negro font-semibold"
          >
            Educación
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#contacto"
            className="text-base  text-negro font-semibold"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Links Responsive */}
      <NavbarMenu className="pt-10">
        <NavbarItem>
          <Link onClick={ocultarMenuOpen} href="#top">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={ocultarMenuOpen} href="#trabajos">
            Trabajos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={ocultarMenuOpen} href="#experiancia-laboral">
            Experiencia Laboral
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={ocultarMenuOpen} href="#educacion">
            Educación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={ocultarMenuOpen} href="#contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
