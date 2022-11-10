import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import { ReactComponent as MenuCloseIcon } from "../../images/icon-close-menu.svg";
import { Button } from "../button/Button";
import { NavItem } from "../nav-item/NavItem";
import { NavMenu } from "../nav-menu/NavMenu";
import { COMPANY, FEATURES } from "./constants";
import { MobileMenu } from "../mobile-menu/MobileMenu";
export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className=" flex items-center">
      <LogoIcon />
      <nav className=" hidden xl:flex space-x-6 ml-8">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="ml-auto hidden xl:flex space-x-5">
        <Button>Loggin</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
      <div className="flex ml-auto cursor-pointer z-30 xl:hidden"
      onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
       { isMobileMenuOpen ?  <MenuCloseIcon/> : <MenuIcon/>}
      </div>
      <MobileMenu isOpen={isMobileMenuOpen}/>
    </header>
  );
};
