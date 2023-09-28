import React from "react";
import {DivContainer, QuestionItem, SectionContainer, Title } from "./style";
import QuestionsContent from "./questionsContent";

interface QuestionsProps {
  heightsType: Array<boolean>;
}

const Questions: React.FC<QuestionsProps> = ()=> {
const [heights, setHeights] = React.useState<QuestionsProps["heightsType"]>([false, false,false]);
function handleClick(index){
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
              <div key={`title-${index}`}>
                {item.title}
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