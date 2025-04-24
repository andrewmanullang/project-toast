import React, { useEffect } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const { variantType, setVariantType, toastMessages, setToastMessages } =
    React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    setToastMessages([
      ...toastMessages,
      {
        id: crypto.randomUUID(),
        content: message,
        variant: variantType,
      },
    ]);
    setMessage("");
    setVariantType("notice");
  }

  React.useEffect(() => {
    function handleClose(event) {
      if (event.key === "Escape") {
        setToastMessages([]);
      }
    }

    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toastMessages.length > 0 && (
        <ToastShelf
          messages={toastMessages}
          setToastMessages={setToastMessages}
        />
      )}
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <label key={crypto.randomUUID()} htmlFor={`variant-${variant}`}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === variantType}
                    onChange={(event) => setVariantType(event.target.value)}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button disabled={!message}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
