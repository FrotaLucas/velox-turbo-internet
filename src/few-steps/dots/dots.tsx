import React from "react";
import { Dot } from "./style";
import { LineContent } from "./style";
interface DotsProperties {
  backGroundColor: boolean;
  onClick: () => void;
  indexNumber: number;
  content: string;
  style?: React.CSSProperties;
}

const DotContainer: React.FC<DotsProperties> = ({ backGroundColor, onClick, indexNumber, content, style}) => {

  return(
    <div style={{display: 'flex', gap: '1rem'}}>
      <div style={{display: 'flex', marginBottom: '0.5rem'}}>
      <Dot toggle={!!backGroundColor} onClick={onClick}>
        {indexNumber}
      </Dot>
      <span></span>
      </div>

      <LineContent>
        {content}
      </LineContent>
    </div>
  )
}

export {DotContainer};