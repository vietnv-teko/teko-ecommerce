import React from 'react';
import classname from 'classnames/bind';
import styles from './HeaderBlock1.module.scss';
import HeaderBlock from '../HeaderBlock';
import NewLink from 'components/Common/NewLink';
let cx = classname.bind(styles);

interface HeaderBlock1Props {
  action?: {
    text: string;
    onClick: () => void;
  };
  title: string;
}

const HeaderBlock1: React.FC<HeaderBlock1Props> = props => {
  const { title, action } = props;

  return (
    <HeaderBlock className={cx('fs14')} backgroundColor="#f6f6f6">
      <div
        style={{ color: '#848788' }}
        className={cx('title', 'text-uppercase', 'text-one-row')}
      >
        {title}
      </div>
      {action && <NewLink onClick={action.onClick}>{action.text}</NewLink>}
    </HeaderBlock>
  );
};

export default HeaderBlock1;
