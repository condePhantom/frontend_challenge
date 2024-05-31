import { FC } from "react";

import { Card, CardContent, Box } from "@mui/material";
import LoginForm from "../molecules/LoginForm";
import LoginHeader from "../atoms/LoginFormHeader";

import finspheraLogo from "../../assets/finsphera_logo.jpeg";

const LoginCard: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Card
        sx={{
          minWidth: 275,
          width: { xs: 300, sm: 600 },
          height: 560,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <CardContent sx={{ margin: { xs: 1, sm: 10 } }}>
          <LoginHeader logo={finspheraLogo} title="Finsphera Challenge" />
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginCard;
