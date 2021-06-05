import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ButtonLink from "../Button/ButtonLink";

export type HeaderProps = {
  isMenuOpen: boolean;
  onMenuToggle: React.DOMAttributes<
    HTMLButtonElement | HTMLAnchorElement
  >["onClick"];
};

export default function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
  return (
    <header className="Header">
      <div className="Header_content">
        <nav className="Header_navigation">
          <a href="/">
            <img
              src="/Logo.svg"
              alt="LiveSupp"
              className="Header_navigation_logo"
            />
          </a>
          <div className="Header_aside">
            <button
              className={clsx(
                "Header_burger",
                isMenuOpen && "Header_burger__active"
              )}
              onClick={onMenuToggle}
            >
              ☰
            </button>
            <div
              className={clsx("Header_menu", isMenuOpen && "Header_menu__open")}
            >
              <div className="Header_menu_content">
                <Link
                  onClick={onMenuToggle}
                  to="/"
                  className="Header_menu_link"
                >
                  Úvod
                </Link>
                <a
                  onClick={onMenuToggle}
                  href="/use-case.html"
                  className="Header_menu_link"
                >
                  Použití
                </a>
                <a
                  onClick={onMenuToggle}
                  href="/training.html"
                  className="Header_menu_link"
                >
                  Poradenství
                </a>
                <a
                  onClick={onMenuToggle}
                  href="/features.html"
                  className="Header_menu_link"
                >
                  Ceník
                </a>
                <a
                  onClick={onMenuToggle}
                  href="/contact.html"
                  className="Header_menu_link"
                >
                  Kontakt
                </a>
                <ButtonLink
                  type="secondary"
                  href="https://livesupp.com/administration/login"
                  className="Header_menu_button"
                >
                  Přihlášení
                </ButtonLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
