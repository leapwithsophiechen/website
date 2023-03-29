/* eslint-disable react/no-children-prop */
import {
  Input as Component,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  autoComplete?: string;
  classes?: string;
  error?: string;
  label: string;
  leftAddOnText?: string;
  name: string;
  patternText?: string;
  patternValue?: any;
  placeholder?: string;
  register: any;
  requiredText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xs';
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'tel'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'url'
    | 'search'
    | 'color'
    | 'file'
    | 'range'
    | 'radio'
    | 'checkbox';
  variant?: 'outline' | 'unstyled' | 'filled' | 'flushed';
}

export const Input = (props: Props) => {
  //
  const {
    autoComplete,
    classes,
    error,
    label,
    leftAddOnText,
    name,
    patternText,
    patternValue,
    placeholder,
    register,
    requiredText,
    size = 'md',
    type = 'text',
    variant = 'outline',
  } = props;

  const labelText = error ? (
    <span className="absolute px-4 py-2 -ml-1 text-white rounded bg-status-error -bottom-6 whitespace-nowrap">
      {error}
    </span>
  ) : (
    label
  );

  return (
    <div className={`relative flex items-center ${classes}`}>
      <label
        className="absolute ml-1 text-sm font-bold text-black -top-7"
        htmlFor={name}
      >
        {labelText}
        {requiredText && !error && (
          <div className="absolute top-0 -right-4">
            <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
          </div>
        )}
      </label>
      <InputGroup size={size}>
        {leftAddOnText && <InputLeftAddon children={leftAddOnText} />}
        <Component
          autoComplete={autoComplete}
          id={name}
          placeholder={placeholder}
          size={size}
          type={type}
          variant={variant}
          {...register(name, {
            pattern: {
              message: patternText,
              value: patternValue,
            },
            required: requiredText ? requiredText : false,
          })}
        />
      </InputGroup>
    </div>
  );
};
