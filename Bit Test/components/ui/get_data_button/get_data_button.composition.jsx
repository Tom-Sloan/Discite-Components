import React, { useState } from "react";
import { GetDataButton } from "./get_data_button";

export const BasicGetDataButton = () => {
  const [btnClick, setBtnClick] = useState(false);
  const handleClick = (e) => {
    console.log(btnClick);
    setBtnClick((prev) => !prev);
  };
  return (
    <GetDataButton
      text="hello from GetDataButton"
      hasLoadingAnimation={true}
      isLoading={btnClick}
      onButtonClick={handleClick}
    />
  );
};
