import React, { ReactNode, useState } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);
type TFProps = {
  disabled?: boolean; //Whether the input is disabled.
  maxLength?: number; //max length
  prefix?: string | ReactNode; //The prefix icon/text for the Input.
  suffix?: string | ReactNode; //The suffix icon/text for the Input.
  type?: string; //The type of input
  // value?: string; //The input content value
  onChange?: () => void; //callback when user input
  onPressEnter?: () => void; //The callback function that is triggered when Enter key is pressed.
  allowClear?: boolean; //allow to remove input content with clear icon
  placeHolder?: string; //input place holder
};
export default ({
  disabled,
  maxLength,
  prefix,
  suffix,
  type,
  onPressEnter,
  allowClear,
  onChange,
  placeHolder,
  ...rest
}: TFProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setInputValue] = useState('');
  const pressEnterAction = (e: any) => {
    if (e.key === 'Enter') {
      onPressEnter && onPressEnter();
    }
  };

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange();
  };
  return (
    <span className={cs(prefix && 'input-affix-wrapper')}>
      {prefix && <span className={cs(prefix && 'input-prefix')}>{prefix}</span>}
      <input
        className={cs('input-wrapper')}
        {...rest}
        maxLength={maxLength || 524288}
        type={`${type || 'string'}`}
        disabled={disabled ? disabled : false}
        onChange={onInputChange}
        onKeyPress={pressEnterAction}
        placeholder={placeHolder}
      ></input>
      {suffix && <span className={cs(suffix && 'input-suffix')}>{suffix}</span>}
    </span>
  );
};
