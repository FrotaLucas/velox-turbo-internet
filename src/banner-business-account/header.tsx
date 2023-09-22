import React from 'react'
import { DivContainer, HomeButton, SectionContainer, SubTitle, TitleContent } from './style'

const Banner: React.FC = () => {

  return (
    <SectionContainer>
      <DivContainer>
        <TitleContent>
          Bring more efficiency to your business with the best internet and reach out new customers
        </TitleContent>
        <SubTitle>
        All in a fast and practical way with the best service
        </SubTitle>
        <HomeButton> Check out More</HomeButton>
        </DivContainer>
    </SectionContainer>

  )
}

export default Banner;