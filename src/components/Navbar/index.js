import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}>AznDibs LLC</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="main" smooth={true} duration={900} spy={true} exact='true'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="grg" smooth={true} duration={900} spy={true} exact='true'>GRG</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="merch" smooth={true} duration={900} spy={true} exact='true'>Merch</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="parkourtag" smooth={true} duration={900} spy={true} exact='true'>Parkour Tag</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href='' target='_blank' aria-label='Discord'>Join our Discord!</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;

