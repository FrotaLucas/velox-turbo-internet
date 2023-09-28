import styled from "styled-components";

const SectionContainer = styled.section``;
export {SectionContainer};

const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
`;
export {DivContainer};

const Title = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 125%;
`;
export {Title};

const QuestionItem = styled.div<{trigger: boolean}>`
  width: 100%;
  position: relative;

  > div:nth-child(1){
    position: relative;
    padding: 24px 8px;

  }
  span {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: gray;
  }
  > div:nth-child(3) {
    padding-top: 24px;
    color: #000000b2;
    height: ${({trigger}) => ( trigger && '300px')};
    display: ${({trigger})=>(trigger ? 'none' : 'block' )};
  }
`;
export {QuestionItem};