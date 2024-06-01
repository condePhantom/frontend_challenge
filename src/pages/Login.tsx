import { FC } from "react";

import { Box } from "@mui/material";

import LoginCard from "../components/organisms/LoginCard";

/**
 * Functional Component Login - The login page that displays a dummy authentication form
 */
const Login: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <LoginCard />
    </Box>
  );
};

export default Login;
