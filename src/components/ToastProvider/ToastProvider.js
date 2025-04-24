import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastContext
      value={{
        toasts,
        setToasts,
      }}
    >
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
