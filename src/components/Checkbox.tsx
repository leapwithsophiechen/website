import { Checkbox as Component } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

interface Props {
  classes?: string;
  control: any;
  defaultValue?: boolean;
  error?: boolean;
  label: JSX.Element;
  name: string;
  requiredText?: JSX.Element;
  value: boolean;
}

export const Checkbox = (props: Props) => {
  //
  const {
    classes,
    control,
    defaultValue = false,
    error,
    label,
    name,
    requiredText,
    value,
  } = props;

  const isRequired = Boolean(requiredText);
  const labelText = error ? requiredText : label;

  return (
    <div
      className={`relative flex items-center ${classes}`}
      style={{
        outline: `2px solid ${error ? '#dc3545' : 'transparent'}`,
        outlineOffset: '12px',
      }}
    >
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field }) => (
          <Component
            aria-label={name}
            isChecked={!!value}
            size="lg"
            {...field}
          />
        )}
        rules={{ required: isRequired }}
      />
      <div className="ml-6 text-base top-6">{labelText}</div>
    </div>
  );
};
