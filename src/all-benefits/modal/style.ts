import styled, {keyframes} from "styled-components";

const Form = styled.div<{toggle: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  //overflow: hidden; /* NAO TA FUNCIONANDO */
  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
  transition: visibility 0s linear 0.5s;


  @media (max-width: 1024px){
    background: rgba(10, 10, 10, 0.5);
 
  }
`;
export {Form};

const FormContent = styled.div<{toggle: boolean}>`
  position: fixed;
  right: ${({ toggle }) => (toggle ? 0 : '-100%')};
  top: 0;
  width: 50%;
  padding: 2rem;
  max-height: 100vh; /* Adjust as needed */
  overflow-y: auto;
  background-color: rgb(255,255,255);
  border-radius: 10px;
  transition: all 2s;
  @media (max-width: 1024px){
   width: 100%;
   
 
  }
`;
export {FormContent};

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px){
    //background: rgba(10, 10, 10, 0.5);
 
  }
`;
export {InputField};

const ReturnButton = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

export {ReturnButton}