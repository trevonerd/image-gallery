import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const ButtonPrimary = styled('button')<ButtonProps>`
    ${({ theme }) => `
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        padding: 6px 18px;
        border-radius: 4px;

        &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border-color:${theme.colors.primary};
        }

        &:disabled {
            color: ${theme.colors.white};
            border-color:${theme.colors.disabled};
            background-color: ${theme.colors.disabled};
        }

        &:focus {
             outline-color: ${theme.colors.primary};
        }
    `}
`;

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
    return <ButtonPrimary disabled={disabled}>{children}</ButtonPrimary>;
};
export default Button;
