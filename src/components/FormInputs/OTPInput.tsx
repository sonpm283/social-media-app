import { MuiOtpInput } from 'mui-one-time-password-input'

interface TextInputProps {
  onChange: (event: string) => void;
  value: string;
}


const OTPInput = ({ value, onChange } : TextInputProps) => {
  return (
    <MuiOtpInput sx={{gap: '12px'}} length={6} value={value} onChange={onChange} />
  )
}

export default OTPInput