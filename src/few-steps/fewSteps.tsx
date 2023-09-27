import React from "react";
import { DivContainer, ItensContainer, SectionContainer, TextContainer, Title } from "./style";
import stepsContent from "./stepsContent";
import {DotContainer} from "./dots/dots";

const FewSteps: React.FC = () => {
const [step, setStep] = React.useState(stepsContent[0])
//usar typescript e interface para definir o parametro da funcao
function handleClick(index){
  setStep(stepsContent[index])
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
            <DotContainer key={index} backGroundColor={index == stepsContent.indexOf(step)} onClick={()=> handleClick(index)} indexNumber={index+1} content={item.title} /> 
           )}
          </ItensContainer>
        </TextContainer>
        <div>
          <p>{step.imgTitle}</p>
          <img src={`images/${step.img}.webp`}/>
        </div>
      </DivContainer>
    </SectionContainer>
  )
}

export default FewSteps;