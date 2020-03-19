import React, { useState, useEffect } from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames/bind';

let cs = classNames.bind(styles);

type TextFieldProps = {
  /**
   * value of input
   */
  value: string;
  /**
   * input type
   */
  type: string;
  /**
   * validate type
   */
  validator?: string;
  /**
   * placeholder
   */
  placeholder: string;
  /**
   * has bottom border or not
   */
  hasBorderBottom: boolean;
  /**
   * error content text
   */
  errorContent?: string;
  /**
   * what to do on validate
   */
  onValidate?: (valid: boolean) => void;
  /**
   * what to do on change value
   */
  onChangeValue: (value: string) => void;
  /**
   * on blur action
   */
  onBlur?: () => void;
  /**
   * input max length
   */
  maxLength?: number;
};
const TextField = (props: TextFieldProps) => {
  const {
    placeholder,
    value,
    type,
    validator,
    hasBorderBottom,
    errorContent,
    onChangeValue,
    onValidate = () => {},
    onBlur = () => {},
    maxLength = 524288,
  } = props;

  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const [stringInput, setStringInput] = useState('');

  useEffect(() => {
    setStringInput(value);
    handleTextField(value);
    // eslint-disable-next-line
  }, [value]);

  const isValidPhone = (phone: any) => {
    let re = /^(84|0)(1\d{9}|(3|5|7|8|9)\d{8})$/;
    return re.test(phone);
  };

  const isValidEmail = (email: any) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const isNumberOnly = (text: any) => {
    let re = /^[0-9]*$/;
    return re.test(text);
  };

  const validateData = (value: any) => {
    switch (validator) {
      case 'email':
        return isValidEmail(value);
      case 'telephone':
        return isValidPhone(value);
      case 'onlynumber':
        return isNumberOnly(value);
      default:
        return true;
    }
  };

  const handleTextField = (userInput: string) => {
    setStringInput(userInput);

    if (userInput === '') {
      setFilled(false);
      setError(false);
      onValidate(false);
    } else if (!validateData(userInput)) {
      setFilled(true);
      setError(true);
      onValidate(false);
    } else {
      setFilled(true);
      setError(false);
      onChangeValue(userInput);
      onValidate(true);
    }
  };

  return (
    <div className={cs('text-field')}>
      <div className={cs('root')}>
        <label
          className={cs(
            `label`,
            `animated`,
            `${focus === true || isFilled || value ? 'shrink' : ''}`,
            `${(isFilled || value) && 'filled'}`,
          )}
        >
          {placeholder}
        </label>
        <div
          className={cs(
            `input`,
            `underline`,
            `${
              clicked && error
                ? 'border-botom-invalid'
                : hasBorderBottom
                ? 'border-bottom'
                : ''
            }`,
            `${focus && 'focused'}`,
          )}
        >
          <input
            className={cs('base', 'MuiInput-input')}
            onChange={e => {
              if (e.target.value.length === maxLength - 1) e.preventDefault();
              else handleTextField(e.target.value);
            }}
            onClick={() => {
              setFocus(true);
              setClicked(true);
            }}
            onBlur={() => {
              if (onBlur) onBlur();
              setFocus(false);
              setClicked(true);
            }}
            value={stringInput}
            type={type}
          ></input>
        </div>
        {clicked && error && <div className={cs('error')}>{errorContent}</div>}
      </div>
    </div>
  );
};
export default TextField;
