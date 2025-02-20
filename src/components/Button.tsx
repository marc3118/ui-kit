import React from 'react';

export interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    color?: string
}

function Button({ onClick, children, color }: ButtonProps) {
    return <button style={{ background: color }} onClick={onClick}>{children}</button>;
}

export default Button;
