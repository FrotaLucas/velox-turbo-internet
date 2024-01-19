import React from "react";
import { BenefitsButton, CardsContent, DivContainer, SectionContainer, TextContent, TitleFirst, TitleSecond, TitleThird } from "./style";
import { BoxesContent } from "./boxContent";
import Modal from "./modal/modal";

const AllBenefits: React.FC = () => {
const [isModalOpen, setIsModalOpen] = React.useState(false)
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
          <BenefitsButton onClick={()=> setIsModalOpen(true)}>Let's try</BenefitsButton>
          <Modal isOpen = {isModalOpen} onClose={()=>setIsModalOpen(false)}/>
        </TextContent>
        <CardsContent>
          {BoxesContent.map((item,index) => 
            <div key={`box-${index}`}>
              <img key={`img-${item.svg}`} src={`svgs/${item.svg}.svg`}alt={item.content}/>
              <p key={`p-${index}`}>{item.content}</p> 
            </div>
           )}
        </CardsContent>
      </DivContainer>
    </SectionContainer>
  )
}


export default AllBenefits;