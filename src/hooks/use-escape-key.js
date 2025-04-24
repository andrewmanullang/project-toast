import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleClose(event) {
      if (event.key === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, []);
}
