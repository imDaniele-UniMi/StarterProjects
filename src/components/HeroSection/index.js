import React, {useState} from 'react'
import  Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover]= useState(false)
    const onHover= ()=>{
        setHover(!hover)        
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>My First Website</HeroH1>
                <HeroP>
                    This is my first frontend project realized using React
                    framework, i realized this for 
                    studying purposes.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        onClick= {()=> {alert("Welcome :)")}}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>        
        </HeroContainer>
    )
}

export default HeroSection