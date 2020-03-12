import React from 'react';

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
      className={className}
    >
      {value}
    </textarea>
  );
};

export default Textarea;
