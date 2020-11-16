import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  message?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, message }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();
    const toast = {
      id,
      type,
      title,
      message
    }
    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter(state => state.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Context must be used inside ToastContext.Provider');
  }
  return context;
};

export { ToastProvider, useToast }
