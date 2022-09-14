import { useState } from "react";

const useSideBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  return {
    isOpened,
    setIsOpened,
  };
};

export default useSideBar;
