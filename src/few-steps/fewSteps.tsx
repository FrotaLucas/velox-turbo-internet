import React from "react";
import { DivContainer, ItensContainer, SectionContainer, TextContainer, Title } from "./style";
import stepsContent from "./stepsContent";

const FewSteps: React.FC = () => {
const [step, setStep] = React.useState(stepsContent[0])
function handleClick(index){
  setStep[index]
}
  return(
    <SectionContainer>
      <DivContainer>
        <TextContainer>
          <Title>
            Open your account in few steps
          </Title>

          <ItensContainer>
            {stepsContent.map( (item, index)=> 
            <div key={index}> 
              <span onClick={()=> handleClick(index)}>{index +1}</span>
              <p>{item.content}</p>
            </div> )}
          </ItensContainer>
         
        </TextContainer>

      </DivContainer>
    </SectionContainer>
  )
}

export default FewSteps;