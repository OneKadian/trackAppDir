"use client";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "../Section/SectionContainer";
import { Nav } from "../Nav/Nav";
import { ButtonGroup } from "../Button/ButtonGroup";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";
import Logo from "../../public/nutritrack.svg";

export const Header = () => {
  return (
    <header
      id="header"
      // className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
      className="header fixed left-0 w-full top-0 z-30 bg-white"
    >
      <SectionContainer className="header--container wrap wrap-px bg-white">
        <div className="header-logo--container">
          <h1 className="logo mb-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="h-6 w-auto"
                height="24"
                width="100"
              />
            </Link>
          </h1>
        </div>
        <SectionContainer className="flex items-center ml-auto">
          <Nav />
          <ButtonGroup className="hidden md:block">
            <a
              role="button"
              href="https://github.com/onekadian"
              className="btn btn--secondary ml-4"
            >
              Login
              <Icon icon="material-symbols:arrow-forward-rounded" />
            </a>
          </ButtonGroup>
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};
