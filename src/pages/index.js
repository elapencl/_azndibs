import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import GRG from '../components/GRG';
import Merch from '../components/Merch';
import ParkourTag from '../components/ParkourTag';

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>    
            <MainSection />
            <GRG />
            <Merch/>
            <ParkourTag/>
            <Footer/>
        </>
    );
};

export default Home;