import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface TextInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

function TextInput ({ onChange, value, name, type = "text", placeholder, error }: TextInputProps) {
  return (
    <TextField
      fullWidth
      slotProps={{
        input: { className: "h-10 px-3 py-2" },
        htmlInput: { className: "!p-0"},
      }}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={!!error}
    />
  );
};
export default TextInput;
