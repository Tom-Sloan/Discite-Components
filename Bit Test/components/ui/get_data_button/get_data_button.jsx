import React, { useState } from "react";
import styles from "./button.module.css";

export function GetDataButton({
  text,
  hasLoadingAnimation = false,
  isLoading = false,
  onButtonClick,
  defaultText = "Running...",
}) {
  return (
    <button
      className={`${styles.button} ${
        hasLoadingAnimation && isLoading && styles.buttonLoading
      }`}
      onClick={onButtonClick}
    >
      <span className={styles.buttonText}>
        {hasLoadingAnimation && isLoading && styles.buttonLoading
          ? defaultText
          : text}
      </span>
    </button>
  );
}
