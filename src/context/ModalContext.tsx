"use client";

import { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  serviceTitle: string | null;
  openModal: (title?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceTitle, setServiceTitle] = useState<string | null>(null);

  const openModal = useCallback((title: string = '') => {
    setServiceTitle(title);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setServiceTitle(null);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, serviceTitle, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
