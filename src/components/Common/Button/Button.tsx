import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  size?: string;
  color?: string;
  rippleColor?: string;
  variant?: string;
  rounded?: boolean;
  icon?: boolean;
  round?: boolean;
  flat?: boolean;
  text?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  let {
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
    ...rest
  } = props;

  const handleClick = (event: any) => {
    let button = event.target.parentElement;
    let buttonPos = button.getBoundingClientRect();

    const left = event.clientX - buttonPos.left;
    const top = event.clientY - buttonPos.top;

    const node = document.createElement('div');
    node.className = cx('ripple');
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.backgroundColor = `${rippleColor}`;

    let rippleContainer = button.querySelector(`.${cx('ripple_container')}`);
    rippleContainer.appendChild(node);

    setTimeout(() => {
      rippleContainer.removeChild(node);
    }, 600);

    if (onClick) onClick();
  };

  let style = variant === 'contained' ? { backgroundColor: color } : { color };

  return (
    <button
      onClick={handleClick}
      className={cx(
        'button',
        size,
        variant,
        className,
        { rounded },
        { round: round || icon },
        { flat: flat || icon || text },
      )}
      style={style}
      {...rest}
    >
      {children}
      <div className={cx('ripple_container')} />
    </button>
  );
};

export default Button;
