import React from 'react';
import styles from './Button.module.css';

function Button({ children, onClick, variant = 'primary', type = 'button', ...rest }) {
  return (
    <button type={type} onClick={onClick} className={`${styles.btn} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
export default React.memo(Button);
