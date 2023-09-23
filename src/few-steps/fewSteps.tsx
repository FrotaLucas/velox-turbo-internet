import React from "react";
import { DivContainer, ItensContainer, SectionContainer, TextContainer, Title } from "./style";
import stepsContent from "./stepsContent";

const FewSteps: React.FC = () => {

  return(
    <SectionContainer>
      <DivContainer>
        <TextContainer>
          <Title>
            Open your account in few steps
          </Title>

          <ItensContainer>
            {stepsContent.map( (item, index)=> 
            <div> 
              <span>{index +1}</span>
              <p>{item.content}</p>
            </div> )}
          </ItensContainer>
         
        </TextContainer>

      </DivContainer>
    </SectionContainer>
  )
}

export default FewSteps;