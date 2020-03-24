import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Ripple from '../Ripple';

let cx = classNames.bind(styles);

export type ButtonProps = {
  className?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  size?: string;
  color?: string;
  rippleColor?: string;
  variant?: string;
  rounded?: boolean;
  icon?: boolean;
  round?: boolean;
  flat?: boolean;
  text?: boolean;
  disabled?: boolean;
  style?: Object;
  children: string | React.ReactNode;
};

let time = 0;

const Button: React.FC<ButtonProps> = props => {
  const {
    children,
    className,
    onClick,
    size = 'medium',
    color = '#1669a8',
    rippleColor = 'rgba(255, 255, 255, 0.6)',
    variant = 'contained',
    rounded,
    icon,
    round,
    flat,
    text,
    style: styleProps,
    disabled = false,
    ...rest
  } = props;

  const handleClick = (event: any) => {
    event.stopPropagation();
    const currentTime = new Date().getTime();
    if (onClick)
      setTimeout(() => {
        if (currentTime - time > 200) {
          time = currentTime;
          onClick(event);
        }
      }, 200);
  };

  const style = variant === 'contained' ? { background: color } : { color };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cx(
        'button',
        size,
        variant,
        className,
        { rounded },
        { round: round || icon },
        { flat: flat || icon || text },
      )}
      style={{ ...(!disabled && { ...style, ...styleProps }) }}
      {...rest}
    >
      {children}
      <Ripple color={rippleColor} />
    </button>
  );
};

export default Button;
