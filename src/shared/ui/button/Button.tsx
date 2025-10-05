import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    onClick: () => void;
    label: string;
};

export const Button = React.memo(({ onClick, label }: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    );
});
