import React, { ReactNode } from 'react';
import className from 'classnames/bind';
import styles from './HeaderBlock2.module.scss';
import HeaderBlock from '../HeaderBlock';
import NewLink from 'components/Common/NewLink';
import Divider from 'components/Common/Divider';
let cx = className.bind(styles);

interface IHeaderBlock {
  onClick?: () => void;
  action?:
    | {
        content?: ReactNode;
        onClick?: () => void;
      }
    | any;
  title: string;
  divider?: boolean;
  className?: any;
  titleClassName?: any;
  trackContentName?: string;
}

const HeaderBlock2: React.FC<IHeaderBlock> = props => {
  const {
    title,
    action,
    divider,
    titleClassName,
    trackContentName,
    className,
    ...rest
  } = props;

  return (
    <>
      <HeaderBlock className={className} {...rest} backgroundColor="#fff">
        <div
          className={cx('title', titleClassName)}
          {...(trackContentName && {
            'data-track-content': true,
            'data-content-name': trackContentName,
            'data-content-target': 'viewAllProduct',
          })}
        >
          {title}
        </div>
        {action && (
          <NewLink
            color="#848788"
            className={cx('fs16', 'flex-center')}
            onClick={action.onClick}
          >
            {action.content}
          </NewLink>
        )}
      </HeaderBlock>
      {divider && <Divider />}
    </>
  );
};

export default HeaderBlock2;
