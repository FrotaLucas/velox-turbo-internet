import React from "react";
import { DivContainer, Image, ItensContainer, SectionContainer, TextContainer, Title } from "./style";
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
            <DotContainer key={index} backGroundColor={index === stepsContent.indexOf(step)} onClick={()=> handleClick(index)} indexNumber={index+1} content={item.title} /> 
           )}
          </ItensContainer>
        </TextContainer>
        <Image>
          <h3>{step.imgTitle}</h3>
          <img src={`images/${step.img}.webp`}/>
        </Image>
      </DivContainer>
    </SectionContainer>
  )
}

export default FewSteps;