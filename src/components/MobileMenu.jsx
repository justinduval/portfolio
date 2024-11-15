import { useState } from "react";
import { links } from "./NavLinks.astro";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      {/* Menu Desktop - Visible seulement sur les grands écrans */}
      <nav className="hidden md:flex space-x-8 text-white">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            // className="text-xl bg-gradient-to-bl from-white via-white to-primary-light
            className="text-xl bg-white hover:bg-gradient-to-bl from-primary-light to-secondary-dark text-transparent bg-clip-text
            hover:scale-110 transition duration-300 ease-in-out"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Bouton de menu mobile - Visible seulement sur les petits écrans */}
      <button className="text-white p-2 md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Menu Mobile - Visible seulement lorsque `isOpen` est `true` */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 top-32 bg-opacity-100 flex flex-col items-center justify-center z-50 bg-gray-800 md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4 text-white">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
