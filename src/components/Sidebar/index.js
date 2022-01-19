import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn, BtnLink} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="main" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="grg" onClick={toggle}>GRG</SidebarLink>
                    <SidebarLink to="merch" onClick={toggle}>Merch</SidebarLink>
                    <SidebarLink to="parkourtag" onClick={toggle}>Parkour Tag</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <BtnLink href='/' target='_blank' aria-label='Discord'>Join our Discord!</BtnLink>
                </SidebarBtn>
            </SidebarWrapper>   
        </SidebarContainer>
    );
};

export default Sidebar;