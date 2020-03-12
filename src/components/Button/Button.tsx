import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  size?: string;
  color?: string;
  variant?: string;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  let { children, className, onClick, size, color, variant } = props;

  const handleClick = (event: any) => {
    let button = event.target.parentElement;
    let buttonPos = button.getBoundingClientRect();

    const left = event.clientX - buttonPos.left;
    const top = event.clientY - buttonPos.top;

    const node = document.createElement('div');
    node.className = cx('ripple');
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;

    let rippleContainer = button.querySelector(`.${cx('ripple_container')}`);
    rippleContainer.appendChild(node);

    setTimeout(() => {
      rippleContainer.removeChild(node);
    }, 600);

    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cx('button', size, color, variant, className)}
    >
      {children}
      <div className={cx('ripple_container')} />
    </button>
  );
};

export default Button;
