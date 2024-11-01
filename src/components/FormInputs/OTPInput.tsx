import { MuiOtpInput } from "mui-one-time-password-input";

interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const OTPInput = ({ value, onChange }: TextInputProps) => {
  return <MuiOtpInput length={6} value={value} onChange={onChange} />;
};
export default OTPInput;
