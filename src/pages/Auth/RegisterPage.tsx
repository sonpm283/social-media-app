import FormField from "@/components/FormField";
import TextInput from "@/components/FormInputs/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormData {
  fullName: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData: IFormData) => {
    console.log(formData);
  };

  return (
    <div>
      <div>
        <h2 className="text-textColor text-xl font-medium">
          Adventure starts here 🚀
        </h2>
        <p className="text-textColor mt-1 text-sm">
          Make your app management easy and fun!
        </p>
      </div>
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          name="fullName"
          label="Full Name"
          placeholder="john.doe"
          control={control}
          Component={TextInput}
          error={errors["fullName"]}
        />

        <FormField
          name="email"
          label="Email"
          placeholder="sonpm283@gmail.com"
          control={control}
          Component={TextInput}
          error={errors["email"]}
        />

        <FormField
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
          error={errors["password"]}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "none" }}
        >
          Sign up
        </Button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link className="text-main" to="/login">
            Sign in instead
          </Link>
        </p>
      </form>
    </div>
  );
}
