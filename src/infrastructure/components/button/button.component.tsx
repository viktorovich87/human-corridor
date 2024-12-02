import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled: boolean;
  backBtn: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  backBtn,
}) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.backButton]: backBtn,
        [styles.disabled]: disabled
      })}
      type="button"
      {...{ disabled }}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <label className={cn({
        [styles.label]: true,
        [styles.backButtonLabel]: backBtn,
        [styles.disabled]: disabled
      })}>
        {label}
      </label>
    </button>
  );
}

export default Button;