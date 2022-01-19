import styled from 'styled-components';
import pattern from '../../images/dragon-scales.svg'

export const FooterContainer = styled.footer`
    background: url(${pattern});
`;

export const FooterWrap = styled.div`
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    position: sticky;
    height: 80px;

    @media screen and (max-width: 960px) {
        height: 120px;
    }

`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weigth: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
