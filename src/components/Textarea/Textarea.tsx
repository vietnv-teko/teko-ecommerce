import React from 'react';

interface TextareaProps {
  rows: number | undefined;
  cols: number | undefined;
  placeholder: string;
  value?: any;
  onChange?: () => void;
  className?: string;
}
const Textarea: React.FC<TextareaProps> = props => {
  const { rows, cols, placeholder, value, onChange, className } = props;
  return (
    <textarea
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      className={className ? className : ''}
    >
      {value}
    </textarea>
  );
};

export default Textarea;
