import styled from "styled-components";


const SectionContainer = styled.section``;
export {SectionContainer};

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding-top: 5rem;

  @media (max-width: 1024px){
  flex-direction: column;
  }
`;
export {DivContainer};

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export {TextContent};

const TitleFirst = styled.p`
  text-transform: uppercase;
`;
export {TitleFirst};

const TitleSecond = styled.h2``;
export {TitleSecond};

const TitleThird = styled.p``;
export {TitleThird};

const CardsContent = styled.div`
  > div {
    border: solid 1px #b4b8bf;
    margin-bottom: 2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1024px){
    flex-direction: column;
  }
`;
export {CardsContent}


