import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

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

  function removeAllMessages() {
    setToastMessages([]);
  }

  useEscapeKey(removeAllMessages);

  return <ToastContext value={toastContext}>{children}</ToastContext>;
}

export default ToastProvider;
