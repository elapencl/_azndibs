import React from 'react';
import { ParkourTagContainer, ParkourTagContent, ParkourTagRow, Column1, TextWrapper, ParkourTagHeadline, ParkourTagParagraph, ButtonWrapper, Column2, Img, ImgWrapper } from './ParkourTagElements';
import { Button } from '../ButtonElement';
import parkourtag from '../../images/game-4.webp';

const ParkourTag = () => {

    return (
        <ParkourTagContainer id='parkourtag'>
            <ParkourTagContent>
                <ParkourTagRow imgStart={true}>
                    <Column1>
                        <TextWrapper>
                            <ParkourTagHeadline>🎉PARKOUR TAG🎉</ParkourTagHeadline>
                            <ParkourTagParagraph>Parkour Tag combines two themes, parkour and tag, to create an interesting gamemode of agility and strategy to win.</ParkourTagParagraph>
                            <ButtonWrapper>
                                <Button>play parkour tag</Button>
                            </ButtonWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={parkourtag}/>
                        </ImgWrapper>
                    </Column2>
                </ParkourTagRow>
            </ParkourTagContent>
        </ParkourTagContainer>
    );
};

export default ParkourTag;
