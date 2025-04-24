import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [variantType, setVariantType] = React.useState("notice");
  const [toastMessages, setToastMessages] = React.useState([]);

  const toastContext = {
    variantType,
    setVariantType,
    toastMessages,
    setToastMessages,
  };

  return <ToastContext value={toastContext}>{children}</ToastContext>;
}

export default ToastProvider;
