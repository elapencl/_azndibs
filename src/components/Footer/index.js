import React from 'react';
import { FaGamepad } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'
import { SiFandom } from 'react-icons/si';
import { RiTwitchLine } from 'react-icons/ri';
import { FiYoutube } from 'react-icons/fi';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                  <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>AznDibs LLC</SocialLogo>
                        <WebsiteRights>AznDibs LLC © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.roblox.com/users/28184036/profile/'   target='_blank' aria-label='Roblox'>
                                <FaGamepad/>
                            </SocialIconLink>
                            <SocialIconLink href='https://roblox.fandom.com/wiki/Community:AznDibs' target='_blank' aria-label='Wiki Fandom'>
                                <SiFandom size={20}/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.twitch.tv/azndibs/videos' target='_blank' aria-label='Twitch'>
                                <RiTwitchLine/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com/user/AznDibs' target='_blank' aria-label='Twitch'>
                                <FiYoutube size={22}/>
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com/azndibs?lang=en' target='_blank' aria-label='Twitter'>
                                <AiOutlineTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                  </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
