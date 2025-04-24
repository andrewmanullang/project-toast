import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastMessages } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastMessages.map((message) => {
        return (
          <li key={message.id} className={styles.toastWrapper}>
            {message.content}
            <Toast variant={message.variant} id={message.id}>
              {message.content}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
