import styled from 'styled-components';

const SectionContainer = styled.section``;
export { SectionContainer };

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding-top: 5rem;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export { DivContainer };

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  @media (max-width: 1024px) {
    padding: unset;
  }
`;
export { TextContent };

const TitleFirst = styled.p`
  text-transform: uppercase;
  line-height: 125%;
`;
export { TitleFirst };

const TitleSecond = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 125%;
`;
export { TitleSecond };

const TitleThird = styled.p``;
export { TitleThird };

const CardsContent = styled.div`
  width: 60%;

  > div {
    border: solid 1px #b4b8bf;
    margin-bottom: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;
export { CardsContent };

const BenefitsButton = styled.button`
  margin: 2rem 0;
  width: 10rem;
  font-family: Moderat, sans-serif;
  background-color: #195ab4;
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  padding: 10px;
  line-height: 16px;
  cursor: pointer;
  border: none;
  border-color: transparent;
  border-style: solid;
  border-radius: 4px;
  outline: none;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-duration: 0.15s;
`;
export { BenefitsButton };
