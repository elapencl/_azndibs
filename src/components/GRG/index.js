import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElement';
import { GRGContainer,GRGContent,GRGRow,Column1,TextWrapper,GRGHeadline,GRGParagraph, ButtonWrapper, Column2, LiveData, LiveDataParagraph } from './GRGElements';
import axios from 'axios';
import BorderWrapper from 'react-border-wrapper';
import ResponsivePlayer from './ResponsivePlayer';

const GRG = () => {

    // const proxy = require('http-proxy-middleware');

    // module.exports = function () {
    //     app.use(proxy('/games.roblox.com', {
    //         target: 'https://games.roblox.com/v1/games?universeIds=1499870257',
    //         logLevel: 'debug',
    //         changeOrigin: true
    //     }));
    // };
    const url = 'https://games.roblox.com/v1/games?universeIds=1499870257'
    const [players, setPlayers] = useState(null)
    const MINUTE_MS = 60000;

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(url)
            .then(response => {
            console.log(response.data)
            setPlayers(response.data)
        })
        }, MINUTE_MS);

        return () => clearInterval(interval); 
    }, [url])

    if(players){
        return (
            <GRGContainer id='grg'>
                <GRGContent>
                    <GRGRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <GRGHeadline>👾GENERIC ROLEPLAY GAEM.</GRGHeadline>
                                <GRGParagraph>GRG is a roleplay game where you start as a peasnat and make your way up to becoming a leader. Some of the many rules include rioting, violence and paying taxes.</GRGParagraph>
                                <ButtonWrapper>
                                    <Button to='https://www.roblox.com/games/4598019433/generic-roleplay-gaem' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                       play GRG
                                    </Button>
                                    <Button to='https://www.roblox.com/groups/5574524/generic-roleplay-gaem-fanclub#!/about' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                        GRG roblox group
                                    </Button>
                                    <Button to='https://discord.com/invite/grg' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                        GRG discord
                                    </Button>
                                </ButtonWrapper>
                                <LiveData>
                                    <BorderWrapper borderColour='floralwhite' borderType='inset'>
                                        <LiveDataParagraph>active players:</LiveDataParagraph>
                                        <LiveDataParagraph style={{marginTop:'35px', fontSize:'40px'}}>{players.data[0].playing}</LiveDataParagraph>
                                    </BorderWrapper>
                                </LiveData>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ResponsivePlayer/>
                        </Column2>
                    </GRGRow>
                </GRGContent>
            </GRGContainer>
        );  
    }

    return (
        <GRGContainer id='grg'>
            <GRGContent>
                <GRGRow imgStart={true}>
                    <Column1>
                        <TextWrapper>
                            <GRGHeadline>GENERIC ROLEPLAY GAEM👾</GRGHeadline>
                            <GRGParagraph>GRG is a roleplay game where you start as a peasnat and make your way up to becoming a leader. Some of the many rules include rioting, violence and paying taxes.</GRGParagraph>
                            <ButtonWrapper>
                                <Button to='https://www.roblox.com/games/4598019433/generic-roleplay-gaem' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                   play GRG
                                </Button>
                                <Button to='https://www.roblox.com/groups/5574524/generic-roleplay-gaem-fanclub#!/about' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                    GRG roblox group
                                </Button>
                                <Button to='https://discord.com/invite/grg' primary="true" dark="true" style={{ marginLeft: '1.0rem' }}>
                                    GRG discord
                                </Button>
                            </ButtonWrapper>
                            <GRGParagraph>Waiting to Load Players..</GRGParagraph>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ResponsivePlayer/>
                    </Column2>
                </GRGRow>
            </GRGContent>
        </GRGContainer>
    );  

};

export default GRG;
