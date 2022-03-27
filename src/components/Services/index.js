import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Section example</ServicesH1>
        <ServicesWrapper>

            <ServicesCard>
                <ServicesIcon src={Icon1}></ServicesIcon>
                <ServicesH2>Card1</ServicesH2>
                <ServicesP>Frase 1 di esempio</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}></ServicesIcon>
                <ServicesH2>Card2</ServicesH2>
                <ServicesP>Frase 2 di esempio</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}></ServicesIcon>
                <ServicesH2>Card3</ServicesH2>
                <ServicesP>Frase 3 di esempio</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

