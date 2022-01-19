import styled from 'styled-components';
import pattern from '../../images/sunset.svg';

export const GRGContainer = styled.div`
    background: url(${pattern});

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const GRGContent = styled.div`
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

export const GRGRow = styled.div`
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
    padding: 0 10px;
    grid-area: col1;
    padding-top: 80px;

    @media screen and (max-width: 768px) {
        padding-top: 0px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    // padding: 0 20px;
    // margin-left: 20px;
    // padding-right: 200px;
    // // padding
    grid-area: col2;

    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    justify-content: center;
    
`;

export const GRGHeadline = styled.h1`
    color: #fffaf0;
    font-size: 32px;
    justify-content: center;
    text-align: center;
    font-family: 'Play';
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 1000px) {
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const GRGParagraph = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    padding-top: 20px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #fffaf0;
    font-family: 'Play';
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
    justify-content: center;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    padding-right: 30px;
    justify-content: center;
`;

export const LiveDataParagraph = styled.p`
    max-width: 300px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #fffaf0;
    font-family: 'Play';
    margin-top: -15px;
    margin-bottom: -15px;
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
`;

export const LiveData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        padding-right: 20px;
    }

    @media screen and (max-width: 480px) {
        padding-right: 20px;
    }
`;
