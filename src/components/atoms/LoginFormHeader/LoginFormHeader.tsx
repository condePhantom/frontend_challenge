import { FC } from "react";
import { Typography, Box, Avatar } from "@mui/material";

/**
 * @interface LoginHeaderProps - Type for the LoginHeader component
 * @property { string } logo - The path of the logo that will be displayed
 * @property { string } title - The title that will be displayed in the header
 */
interface LoginHeaderProps {
  logo: string;
  title: string;
}

/**
 * Functional Component LoginHeader - Component that display the header for a form including a title and a logo
 * @property {string} title - The title of the header
 * @property {string} logo - The logo that will be displayed
 */
const LoginHeader: FC<LoginHeaderProps> = ({ logo, title }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar
          src={logo}
          alt="FinSphera Logo"
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
