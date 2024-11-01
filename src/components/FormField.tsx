import { FormHelperText } from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import { ChangeEvent } from "react";

interface ComponentProps<T extends FieldValues> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  error?: string;
  control?: Control<T>;
}

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  label?: string;
  name: Path<T>;
  type?: string;
  error?: FieldError;
  placeholder?: string;
  Component: React.ComponentType<ComponentProps<T>>;
}

export default function FormField<T extends FieldValues>({
  control,
  label,
  name,
  type,
  error,
  placeholder,
  Component,
}: FormFieldProps<T>) {
  return (
    <div>
      <p className="text-textColor mb-1 text-sm">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              type={type}
              placeholder={placeholder}
              control={control}
              error={error?.message}
            />
          );
        }}
      />
      {error?.message && (
        <FormHelperText error={true}>{error.message}</FormHelperText>
      )}
    </div>
  );
}
