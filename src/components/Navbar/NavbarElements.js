import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import pattern from '../../images/dragon-scales.svg'

export const Nav = styled.nav`
  background: url(${pattern});
  // background: ${({navScroll}) => (navScroll ? 'red' : 'transparent')}
  height: 50px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.nav`
  color: #f5fffa;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left:24px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Play';
  text-shadow: -1px 1px 5px maroon;
  cursor: pointer;

  @media screen and (max-width: 810px) {
    font-size: 22px;
}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 30%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #f5fffa;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 810px) {
    font-size: 20px;
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items:center;

  @media screen and (max-width: 768px) {
      display:none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #7b68ee;
  white-space: nowrap;
  padding: 7.5px 10px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-shadow: -1px 1px 1px oldlace;

  &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
  }
`;