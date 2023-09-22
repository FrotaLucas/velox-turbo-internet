import styled from "styled-components";


const SectionContainer = styled.section`
  background-color:  #0b2859;;
`;
export {SectionContainer};

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  //padding-top: 5rem;
  //gap: 5rem;

  @media (max-width: 1024px){
  flex-direction: column;
  //gap: 1rem;
  }
`;
export {DivContainer};

const Video = styled.div``;
export {Video};

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export {TextContent};

const Title = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 400;
`;
export {Title};

const SubTitle = styled.p`
  color: white;
`;
export {SubTitle};


const HowWorksButton = styled.button`
    margin: 2rem 0;
    width: 10rem;
    font-family: Moderat,sans-serif;
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
    transition-duration: .15s;
`
export {HowWorksButton};


