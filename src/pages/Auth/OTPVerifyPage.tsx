import FormField from "@/components/FormField";
import OTPInput from "@/components/FormInputs/OTPInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormData {
  otp: string;
}

export default function OTPVerifyPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (formData: IFormData) => {
    console.log(formData);
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-medium text-dark-100">
          Two-Step Verification 💬
        </h2>
        <p className="mt-1 text-sm text-dark-100">
          We sent a verification code to your mobile. Enter the code from the
          mobile in the field below. <br />
          ******9763
        </p>
      </div>
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          name="otp"
          label="Type your 6 digit security code"
          control={control}
          Component={OTPInput}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "none" }}
        >
          Sign in
        </Button>

        <p className="text-center text-sm">
          New on our platform{" "}
          <Link className="text-main" to="/register">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
