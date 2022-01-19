import React from 'react';
import { MerchContainer,MerchConent,MerchRow,Column1,TextWrapper,MerchHeadline,MerchParagraph,BtnWrap,Column2,ImgWrapper,Img } from './MerchElements';
import { Button } from '../ButtonElement'; 
import merch from '../../images/shirt.jpg'

const Merch = () => {
    return (
        <MerchContainer id='merch'>
            <MerchConent>
                <MerchRow imgStart={true}>
                    <Column1>
                        <TextWrapper>
                            <MerchHeadline>💯GRG MERCH💯</MerchHeadline>
                            <MerchParagraph>Visit our website to buy the latest GRG merch! We offer shirts with tasty design.</MerchParagraph>
                            <BtnWrap>
                                <Button>get our merch</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={merch}/>
                        </ImgWrapper>
                    </Column2>
                </MerchRow>
            </MerchConent>
        </MerchContainer>
    );
};

export default Merch;
