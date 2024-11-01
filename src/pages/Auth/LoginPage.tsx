import FormField from "@/components/FormField";
import TextInput from "@/components/FormInputs/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
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
        <h2 className="text-xl font-medium text-dark-100">
          Welcome to WeConnect! 👋
        </h2>
        <p className="mt-1 text-sm text-dark-100">
          Please sign in to your account and start the adventure
        </p>
      </div>
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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
