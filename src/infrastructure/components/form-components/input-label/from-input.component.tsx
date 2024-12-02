import React from 'react';
import styles from './form-input.module.scss';

export interface InputLabelProps {
  label: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label = '',
}) => {
  return (
    <div className={styles.labelWrapper}>
      <span className={styles.label}>
        {label}
      </span>
    </div>
  );
}

export default InputLabel;