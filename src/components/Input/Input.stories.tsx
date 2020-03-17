import React from 'react';
import Input from './Input';
import Icon from '../Icon';
export default {
  title: 'Input',
  component: Input,
};

export const Default = () => (
  <div style={{ width: '50%' }}>
    <Input
      prefix={
        <Icon size={20} color="green">
          icon vns-Account-Active
        </Icon>
      }
      suffix={
        <Icon size={20} color="green">
          icon vns-Check
        </Icon>
      }
      placeHolder="User Name"
    />
    <div style={{ height: '10px' }}></div>
    <Input
      prefix={
        <Icon size={20} color="green">
          icon vns-Guarantee-Checked
        </Icon>
      }
      placeHolder="Password"
      type="password"
    />
  </div>
);
