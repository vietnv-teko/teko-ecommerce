import React from 'react';
import styles from './Textarea.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
export type TextareaProps = {
  /**
   * Number of rows to display
   * */
  rows: number | undefined;
  /**
   * Number of cols to display
   * */
  cols: number | undefined;
  /**
   *The short hint displayed in the input before the user enters a value
   * */
  placeholder: string;
  /**
   * The value of the input element
   * */
  value?: any;
  /**
   * Callback fired when the value is changed.
   * */
  onChange?: () => void;
  /**
   * custom style of component
   * */
  className?: string;
};
const Textarea = (props: TextareaProps) => {
  const { rows, cols, placeholder, value, onChange, className } = props;
  return (
    <textarea
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      className={cx(className)}
    >
      {value}
    </textarea>
  );
};

export default Textarea;
