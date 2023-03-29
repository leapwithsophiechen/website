/* eslint-disable react/no-children-prop */
import {
  Textarea as Component,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

interface Props {
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
  variant?: 'outline' | 'unstyled' | 'filled' | 'flushed';
}

export const TextArea = (props: Props) => {
  //
  const {
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
    variant = 'outline',
  } = props;

  const labelText = error ? (
    <span className="px-4 py-2 -ml-1 text-black text-white bg-red-600 rounded">
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
      </label>
      <InputGroup size={size}>
        {leftAddOnText && <InputLeftAddon children={leftAddOnText} />}
        <Component
          id={name}
          placeholder={placeholder}
          size={size}
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
