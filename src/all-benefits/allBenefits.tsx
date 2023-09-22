import React from "react";
import { CardsContent, DivContainer, SectionContainer, TextContent, TitleFirst, TitleSecond, TitleThird } from "./style";
import { BoxesContent } from "./boxContent";

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
          {BoxesContent.map((item,index) => <>
            <div key={index}>
              <img  src={`svgs/${item.svg}.svg`}/>
              <p>{item.content}</p> 
            </div>
          </>)}

        </CardsContent>
      </DivContainer>
    </SectionContainer>
  )
}


export default AllBenefits;