import React from "react";
import { string, func } from "prop-types";
import styles from "./Button.module.css";

const Button = ({ title, onClick }) => {
  return (
    <button className={styles.layout} data-testid="btn" onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: string,
  onClick: func,
};

Button.defaultProps = {
  title: "Button",
  onClick: () => {},
};

export default Button;