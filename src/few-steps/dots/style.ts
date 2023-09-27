import styled from "styled-components";


const Dot = styled.div<{toggle: boolean}>`
  background-color: ${ ({toggle})=>(toggle ? 'black' : 'white')};
  color: ${({toggle})=> (toggle ? 'white' : 'black')};
  border: solid 1px #1c233b;
 width: 2rem; 
 height: 2rem;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;   
`

export {Dot};

