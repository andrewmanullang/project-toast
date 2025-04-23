import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messages, setToastMessages }) {
  return (
    <ol className={styles.wrapper}>
      {messages.map((message) => {
        return (
          <li key={message.id} className={styles.toastWrapper}>
            <Toast
              message={message}
              messages={messages}
              setToastMessages={setToastMessages}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
