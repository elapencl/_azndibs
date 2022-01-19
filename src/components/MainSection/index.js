import React from 'react';
import { MainContainer, MainBackground, VideoBg, MainContent, MainH1, MainP} from './MainElements';
import Video from '../../videos/short.mp4';

const MainSection = () => {

    return (
        <MainContainer id='main'>
            <MainBackground>

                 <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> 
                
            </MainBackground>

            <MainContent>

                <MainH1> This is AznDibs. </MainH1>

                <MainP>
                    A Roblox game developer notable for his games generic roleplay gaem and parkour tag.
                </MainP>

            </MainContent>
            
        </MainContainer>
    );
};

export default MainSection;
