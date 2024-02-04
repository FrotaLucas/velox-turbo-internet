import styled, { keyframes } from 'styled-components';

const Form = styled.div`
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

  h5 {
    margin: unset;
    margin-bottom: 0.5rem;
    font-size: 24px;
    font-weight: 400;
    //line-height: 150%;
  }

  h6 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 400;
    //line-height: 150%;
  }

  label {
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    background: rgba(10, 10, 10, 0.5);
  }
`;
export { Form };

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);  
  }
  to {
    transform: translateX(100%);
  }
`;
const FormContent = styled.div<{ toggle: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  padding: 2rem;
  max-height: 100vh; /* Adjust as needed */
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  animation: ${({ toggle }) =>
      //console.log('Toggle:', toggle),
      toggle ? slideInAnimation : slideOutAnimation}
    2s ease;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export { FormContent };

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    //background: rgba(10, 10, 10, 0.5);
  }
`;
export { InputField };

const ReturnButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export { ReturnButton };
