// ModalContext.js

import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); 
  const [acceptRule, setAcceptRule] = useState(false);

  const openModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeAcceptRule = () => {
    setAcceptRule(true);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalData, changeAcceptRule, acceptRule }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
