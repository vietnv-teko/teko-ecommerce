import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

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
    rippleColor = 'rgba(255, 255, 255, 0.4)',
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
    const button = event.target.parentElement;
    const buttonPos = button.getBoundingClientRect();

    const left = event.clientX - buttonPos.left;
    const top = event.clientY - buttonPos.top;

    const node = document.createElement('div');
    node.className = cx('ripple');
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.backgroundColor = `${rippleColor}`;

    let rippleContainer = button.querySelector(`.${cx('ripple_container')}`);
    rippleContainer.appendChild(node);

    const currentTime = new Date().getTime();
    setTimeout(() => {
      rippleContainer.removeChild(node);
    }, 400);

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
      <div className={cx('ripple_container')} />
    </button>
  );
};

export default Button;
