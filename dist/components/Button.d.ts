import React from 'react';
export interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    color?: string;
}
declare function Button({ onClick, children, color }: ButtonProps): React.JSX.Element;
export default Button;
