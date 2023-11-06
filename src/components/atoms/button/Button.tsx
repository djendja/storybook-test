import {Button as MUIButton} from '@mui/material';
import classnames from 'classnames';
import React from 'react';
import './button.scss';

export interface ButtonProps {
    type?: 'button' | 'submit';
    variant?: 'text' | 'outlined' | 'contained';
    classes?: object;
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
    disabled?: boolean;
    disableElevation?: boolean;
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onMouseEnter?: (Element?: any) => void;
    onMouseLeave?: () => void;
    fullWidth?: boolean;
    href?: string;
    size?: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
    component?: any;
    onClick?: (Element?: any) => void;
    iconAfter?: React.ReactNode;
    iconBefore?: React.ReactNode;
    text?: string;
}

export const Button: React.FC<ButtonProps> = ({
    type,
    variant,
    classes,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    startIcon,
    endIcon,
    fullWidth,
    component,
    href,
    size,
    children,
    text,
    iconBefore,
    iconAfter,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const className = classnames({'button--disabled': disabled});

    return (
        <MUIButton
            type={type || "button"}
            variant={variant}
            color={color}
            classes={{
                sizeMedium: 'button--medium',
                ...classes,
            }}
            className={className}
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            startIcon={startIcon}
            endIcon={endIcon}
            fullWidth={fullWidth}
            href={href}
            size={size}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            component={component}
        >
            {children ? (
                children
            ) : (
                <>
                    {iconBefore && iconBefore}
                    {text && <span className="button__text">{text}</span>}
                    {iconAfter && iconAfter}
                </>
            )}
        </MUIButton>
    );
};