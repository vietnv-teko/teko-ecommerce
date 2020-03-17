import React from 'react';
import classNames from 'classnames/bind';
import styles from './DiscountTag.module.scss';
import { cleanObject } from 'helpers';

let cx = classNames.bind(styles);

interface IDiscountTag {
  value?: string;
  className?: string;
  theme?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const DiscountTag: React.FC<IDiscountTag> = props => {
  let {
    value,
    className,
    theme = 1,
    children,
    top = '0px',
    right = '0px',
    bottom,
    left,
  } = props;
  return (
    <span className={cx('discount-tag')}>
      {children}
      {!!value && (
        <span className={cx('tag-wrapper')}>
          <span
            style={cleanObject({
              top: top ? top : '',
              right: right ? right : '',
              left: left ? left : '',
              bottom: bottom ? bottom : '',
            })}
            className={cx(
              'tag',
              {
                'theme-1': theme === 1,
                'theme-2': theme === 2,
                'theme-3': theme === 3,
              },
              className,
            )}
          >
            {`-${value}`}
          </span>
        </span>
      )}
    </span>
  );
};

export default DiscountTag;
