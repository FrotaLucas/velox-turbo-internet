import styled from "styled-components";

const SectionContainer = styled.section`
  background-color:  #e6e7ea;;
`;
export {SectionContainer};

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 5rem 0;
  gap: 10rem;

  @media (max-width: 1024px){
    flex-direction: column;
    gap: unset;
  }
`;
export {DivContainer};

const Title = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 125%;
`;
export {Title};

const TextContainer = styled.div``;
export {TextContainer};

const ItensContainer = styled.div`
  > div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }
`;
export {ItensContainer}

const Image = styled.div`
 > h3{
  margin-bottom: 2rem;
 }
  > img {
    width: unset;
  }
  @media (max-width: 1024px){
    > img {
      width: 100%;
    }
  }
`;
export {Image};
