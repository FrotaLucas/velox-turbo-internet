import styled, { keyframes } from 'styled-components';

const Overlay = styled.div<{ toggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  transition: visibility 2s, opacity 2s;
  //overflow: hidden; NAO TA FUNCIONANDO
  @media (max-width: 1024px) {
  }
`;
export { Overlay };

const FormContent = styled.div<{ toggle: boolean }>`
  position: fixed;
  right: ${({ toggle }) => (toggle ? 0 : '-100%')};
  top: 0;
  width: 50%;
  padding: 2rem;
  max-height: 100vh; /* Adjust as needed */
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  transition: right 2s;
  z-index: 999;
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

const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export { SelectArea };
const SelectField = styled.select`
  border: 1px solid #ccc;
  padding: 0.8rem;
  border-radius: var(--radius);
  background: #eee;
`;
export { SelectField };
