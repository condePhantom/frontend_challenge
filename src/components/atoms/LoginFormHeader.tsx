import { FC } from "react";
import { Typography, Box, Avatar } from "@mui/material";

interface LoginHeaderProps {
  logo: string;
  title: string;
}
const LoginHeader: FC<LoginHeaderProps> = ({ logo, title }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar
          src={logo}
          alt="Finsphera Logo"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Typography variant="h5" component="div" gutterBottom>
        {title}
      </Typography>
    </>
  );
};

export default LoginHeader;
