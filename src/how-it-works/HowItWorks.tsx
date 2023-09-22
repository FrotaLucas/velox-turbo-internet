import React from "react";
import { DivContainer, HowWorksButton, SectionContainer, SubTitle, TextContent, Title, Video } from "./style";

const HowItWOrks: React.FC = () => {

  return(
    <SectionContainer>
      <DivContainer>
        <Video>
          <iframe src="https://player.vimeo.com/video/439419726?h=035fa20817&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen ></iframe>  
        
        </Video>
        <TextContent>
          <Title>
            How does it work ?
          </Title>
          <SubTitle>With the support and service of Velox GmbH, you 
            don't have to wait until to get things done.
          </SubTitle>
          <HowWorksButton>
            Let's try
          </HowWorksButton>
        </TextContent>
      </DivContainer>
    </SectionContainer>
  )
}

export default HowItWOrks;