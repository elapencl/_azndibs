import styled from 'styled-components';
import pattern from '../../images/sunset.svg';

export const MerchContainer = styled.div`
    color: #fff;
    background: url(${pattern});

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const MerchConent = styled.div`
    display: grid;
    z-index: 1;
    height: 750px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const MerchRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 60px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    justify-content: center;
`;

export const MerchHeadline = styled.h1`
    color: #fffaf0;
    font-size: 38px;
    text-align: center;
    font-family: 'Play';
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
    justify-content: center;

    @media screen and (max-width: 1000px) {
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const MerchParagraph = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    padding-top: 20px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
    justify-content: center;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const BtnWrap = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;


export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
