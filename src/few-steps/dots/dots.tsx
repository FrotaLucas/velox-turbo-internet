import React from "react";
import { Dot } from "./style";

interface DotsProperties {
  backGroundProperty: boolean;
  onClick: () => void;
}

const DotContainer: React.FC<DotsProperties> = ({backGroundProperty, onClick}) => {

  return(
    <Dot toggle={backGroundProperty}>

    </Dot>
  )
}

export default DotContainer;