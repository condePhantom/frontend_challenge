import { FC } from "react";
import { TextField, Button, CardActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { styled } from "@mui/system";

interface FormInputProps {
  email: string;
  password: string;
}

const STextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(64,11,7)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(81, 38, 34)",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "rgb(64,11,7)",
    },
  },
});

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>();

  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <STextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        {...register("email", {
          required: "This Email field is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        FormHelperTextProps={{ style: { height: "1.5em" } }}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : " "}
      />
      <STextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        {...register("password", {
          required: "This Password field is required",
        })}
        FormHelperTextProps={{ style: { height: "1.5em" } }}
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : " "}
      />
      <CardActions sx={{ mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "rgb(64,11,7)",
            "&:hover": {
              backgroundColor: "rgb(81, 38, 34)",
            },
            "&:focus": {
              backgroundColor: "rgb(64,11,7)",
            },
          }}
        >
          Login
        </Button>
      </CardActions>
    </form>
  );
};

export default LoginForm;
