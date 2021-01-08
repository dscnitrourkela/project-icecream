import React from 'react';

// Libraries
import { TextField } from '@material-ui/core';

interface Props {
  value: string | number | undefined;
  setValue: (value: any) => void;
  label: string;
  type: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const CustomTextField: React.FC<Props> = (props) => {
  const {
    setValue,
    value,
    label,
    className,
    placeholder,
    required,
    type,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      if (value > -1) setValue(parseInt(event.target.value, 10));
    } else setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      label={label}
      className={className}
      placeholder={placeholder}
      required={required ? required : true}
      variant='outlined'
      type={type}
    />
  );
};

export default CustomTextField;
