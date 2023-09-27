import React from "react";
import { Dot } from "./style";
import { LineContent } from "./style";
interface DotsProperties {
  backGroundColor: boolean;
  onClick: () => void;
  indexNumber: number;
  content: string;
}

const DotContainer: React.FC<DotsProperties> = ({ backGroundColor, onClick, indexNumber, content}) => {

  return(
    <>
      <Dot toggle={backGroundColor} onClick={onClick}>
        {indexNumber}
      </Dot>
      <LineContent>
        {content}
      </LineContent>
    </>
  )
}

export {DotContainer};