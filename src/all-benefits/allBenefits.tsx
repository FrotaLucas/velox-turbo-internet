import React from "react";
import { CardsContent, DivContainer, SectionContainer, TextContent, TitleFirst, TitleSecond, TitleThird } from "./style";

const AllBenefits: React.FC = () => {

  return(
    <SectionContainer>
      <DivContainer>
        <TextContent>
          <TitleFirst>
            empowerment with velox gmbh
          </TitleFirst>
          <TitleSecond>
            Find out all benefits with Velox
          </TitleSecond>
          <TitleThird>
            Plans of internet starting from 30 euros per month
          </TitleThird>
        </TextContent>
        <CardsContent>

        </CardsContent>
      </DivContainer>
    </SectionContainer>
  )
}


export default AllBenefits;