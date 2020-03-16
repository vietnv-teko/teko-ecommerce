import React from 'react';
import TextField from './TextField';
import Icon from './../Icon';
export default {
  title: 'TextField',
  component: TextField,
};

export const Default = () => (
  <div style={{ width: '50%' }}>
    <TextField
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
    <TextField
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
