import { FC, PropsWithChildren, ReactNode, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
  Typography,
  Toolbar,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Movie, Menu as MenuIcon, Login } from "@mui/icons-material";

const drawerWidth = 240;
const navItems: { name: string; icon: ReactNode; url: string }[] = [
  { name: "Movies", icon: <Movie />, url: "/" },
  { name: "Login", icon: <Login />, url: "/login" },
];

const EmptyLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawer} sx={{ textAlign: "center", color: "white" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Finsphera Challenge
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={item.name + index}
            disablePadding
            sx={{
              "& .MuiListItemIcon-root": {
                color: "white",
              },
            }}
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(item.url)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar component="nav" sx={{ backgroundColor: "rgb(64,11,7)" }}>
        <Toolbar sx={{ justifyContent: "space-between", ml: 1, mr: 8 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
            }}
          >
            Finsphera Challenge
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item, index) => (
              <Link to={item.url} style={{ textDecoration: "none" }}>
                <Button
                  key={item.name + index}
                  variant="text"
                  disableRipple
                  sx={{
                    color: "#FFF",
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            color: "white",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              color: "fff",
              width: drawerWidth,
              backgroundColor: "rgba(64,11,7, 1)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Container fixed sx={{ maxWidth: "100%", mx: "auto" }}>
        <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />
        {children}
      </Container>
    </Box>
  );
};

export default EmptyLayout;
