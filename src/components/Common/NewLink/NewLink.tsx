import React from 'react';
import classname from 'classnames/bind';
import styles from './NewLink.module.css';
import { browserHistory } from 'helpers';

let cx = classname.bind(styles);

export type NewLinkProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * The URL of the page the link goes to
   * */
  href?: string;
  /**
   * The URL or Object to push history
   * */
  to?: any;
  /**
   *The color of the component
   */
  color?: string;
  /**
   * Underline style of component. Include: Alway, hover, none
   */
  underline?: string;
  /**
   * Callback fired when click component
   * */
  onClick?: () => void;
};
const NewLink: React.FC<NewLinkProps> = props => {
  const {
    className,
    href,
    to,
    underline = 'none',
    children,
    color = '#047fff',
    onClick,
  } = props;

  const handleClick = () => {
    if (onClick) onClick();
    if (to) browserHistory.push(to);
  };

  return (
    <a
      href={href}
      className={cx(
        'link',
        className,
        { underline: underline === 'always' },
        { linkHover: underline === 'hover' },
        { noneUnderline: underline === 'none' },
      )}
      style={{ color: color }}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default NewLink;
