import React, { useEffect } from 'react';
import {
  BenefitsButton,
  CardsContent,
  DivContainer,
  SectionContainer,
  TextContent,
  TitleFirst,
  TitleSecond,
  TitleThird,
} from './style';
import { BoxesContent } from './boxContent';
import Modal from './modal/modal';

const AllBe: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  //const[isForm, setIsForm] = React.useState(false)
  // useEffect(()=>{
  // ()=>setIsForm(!isForm)
  // }, [isModalOpen])
  // const handleClick = ()=>{
  //   setIsForm(!isForm)
  // }
  return (
    <SectionContainer>
      <DivContainer>
        <TextContent>
          <TitleFirst>empowerment with velox gmbh</TitleFirst>
          <TitleSecond>Find out all benefits with Velox</TitleSecond>
          <TitleThird>
            Plans of internet starting from 30 euros per month
          </TitleThird>
          <BenefitsButton onClick={() => setIsModalOpen(true)}>
            Let's try
          </BenefitsButton>
          {/* PROBLEMA: quando isOpen vira false o component Form desaparece na mesma hora nao dando tempo
          para o FormContent executar o slideOutAnimation - */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </TextContent>
        <CardsContent>
          {BoxesContent.map((item, index) => (
            <div key={`box-${index}`}>
              <img
                key={`img-${item.svg}`}
                src={`svgs/${item.svg}.svg`}
                alt={item.content}
              />
              <p key={`p-${index}`}>{item.content}</p>
            </div>
          ))}
        </CardsContent>
      </DivContainer>
    </SectionContainer>
  );
};

export default AllBe;
