import styled from "styled-components";
import { useState } from "react";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalView = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  background-color: #ffffff;
`;
const ModalBtn = styled.button`
  text-decoration: none;
  border: none;
  color: black;
  cursor: pointer;
  position: inline;
`;
const ExitBtn = styled.span`
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const Modal = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{name}</ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={closeModalHandler}>
            <ModalView>
              <ExitBtn onClick={closeModalHandler}>X</ExitBtn>
              {children}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;
