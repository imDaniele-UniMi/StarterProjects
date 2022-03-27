import React, {useState} from 'react'
import {
    TutorialContainer,
    TutorialBg,
    VideoBg,
    TutorialContent,
    TutorialH1,
    TutorialVideoWrapper,
    TutorialBtnWrapper,
    TutorialArrowForward,
    TutorialArrowRight,
    BackArrow,
    BackArrowLeft
} from './tutorialElements'
import Video from '../../videos/videoyt.mp4'
import { Button } from '../ButtonElement'

const Tutorial = () => {
    const [hover, setHover]= useState(false)
    const onHover= ()=>{
        setHover(!hover)        
    }

    const [hover2, setHover2]= useState(false)
    const onHover2= ()=>{
        setHover2(!hover2)        
    }
    
    return (
        <>
        <TutorialContainer>
                <TutorialBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </TutorialBg>

                <TutorialContent>
                    <TutorialH1>Video tutorial</TutorialH1>
                    <TutorialVideoWrapper>
                        <iframe src='https://www.youtube.com/embed/Nl54MJDR2p8' controls height={"500"} width={"900"} style={{marginLeft: "-150px"}}/>
                    </TutorialVideoWrapper>
                    <TutorialBtnWrapper>
                        <Button
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            onClick= {()=> {window.open('https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A')}}>
                            Vai al canale! {hover ? <TutorialArrowForward /> : <TutorialArrowRight/>}
                        </Button>
                        <br/>
                        <Button
                            onMouseEnter={onHover2}
                            onMouseLeave={onHover2}
                            primary="true"
                            dark="true"
                            onClick= {()=> {window.location.assign('../')}}>
                            Go Back {hover2 ? <BackArrowLeft /> : <BackArrow/>}
                        </Button>
                    </TutorialBtnWrapper>
                </TutorialContent>        
            </TutorialContainer>
        </>
    )
}

export default Tutorial