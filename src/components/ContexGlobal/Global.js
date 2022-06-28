import { createContext, useState } from "react";
export const GlobalState = createContext();

export const MainGlobal = ({ children }) => {
  const [mobDisplay, setMobDisplay] = useState(false);
  const mobHandler = () => {
    setMobDisplay(!mobDisplay);
  };

  const [openModal, setOpenModal] = useState(false);
  const modalSwitch = () => {
    setOpenModal(!openModal);
  };

  const [addStuModal, setAddStuModal] = useState(false);
  const stuModalSwitch = () => {
    setAddStuModal(!addStuModal);
  };

  return (
    <GlobalState.Provider
      value={{
        mobDisplay,
        setMobDisplay,
        mobHandler,
        modalSwitch,
        openModal,
        addStuModal,
        stuModalSwitch,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
