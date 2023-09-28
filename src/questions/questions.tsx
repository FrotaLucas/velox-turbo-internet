import React from "react";
import {DivContainer, QuestionItem, SectionContainer, Title } from "./style";
import QuestionsContent from "./questionsContent";

interface QuestionsProps {
  heightsType: Array<boolean>;
}

const Questions: React.FC<QuestionsProps> = ()=> {
const [heights, setHeights] = React.useState<QuestionsProps["heightsType"]>([false, false,false]);
function handleClick(index: number){
  const collapsed = [...heights];
  collapsed[index] = !collapsed[index];
  setHeights(collapsed);
}
  return(
    <SectionContainer>
      <DivContainer>
        <Title> Questions ?</Title>
        {
          QuestionsContent.map((item,index) => 
            <QuestionItem key={index} trigger={heights[index]} onClick={()=> handleClick(index)}>
              <div>
                <div key={`title-${index}`}>
                  {item.title}
                </div>
                <img src={`./public/svgs/${heights[index] ? 'arrow_up' : 'arrow_down'}.svg`}/>
              </div>
              <span key={`line-style-${index}`}></span>
              <div key={`content-${index}`}>
                {item.content}
              </div>
            </QuestionItem>
          )}
        
      </DivContainer>
    </SectionContainer>
  )
}

export default Questions