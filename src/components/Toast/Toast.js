import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, messages, setToastMessages }) {
  const VariantIcon = ICONS_BY_VARIANT[message.variant];

  function handleRemoveMessage() {
    const nextArray = messages.filter((m) => m.id !== message.id);
    setToastMessages(nextArray);
  }

  return (
    <div className={`${styles.toast} ${styles[message.variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.content}>{message.message}</p>
      <button className={styles.closeButton} onClick={handleRemoveMessage}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
