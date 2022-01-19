import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import pattern from '../../images/dragon-scales.svg'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: url(${pattern});
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #e6e6fa;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-family: 'Play';
    text-shadow: -1px 1px 5px maroon;

    &:hover {
        color: #7b68ee;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtn = styled.nav`
  display: flex;
  align-items:center;
  justify-content: center;
`;

export const BtnLink = styled.a`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #7b68ee;
  white-space: nowrap;
  padding: 10px 10px 10px;
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

