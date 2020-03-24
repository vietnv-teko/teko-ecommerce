import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tag.module.scss';
import { commonHelper } from 'helpers';

let cx = classNames.bind(styles);

interface ITag {
  value?: string;
  className?: string;
  backgroundColor?: string;
}

const Tag: React.FC<ITag> = props => {
  let { value, className, backgroundColor } = props;
  return (
    <span
      style={commonHelper.cleanObject({
        backgroundColor: backgroundColor ? backgroundColor : '',
      })}
      className={cx('tag', className)}
    >
      {`${value}`}
    </span>
  );
};

export default Tag;
