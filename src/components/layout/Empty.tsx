import { FC, PropsWithChildren, useState } from "react";
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

import { Movie, Tv, Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = ["Movies", "TV Series"];
const navIcons = [<Movie />, <Tv />];

const EmptyLayout: FC<PropsWithChildren> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Finsphera Challenge
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon>{navIcons[index]}</ListItemIcon>
              <ListItemText primary={item} />
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
        <Toolbar sx={{ justifyContent: "space-between", mx: 8 }}>
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
            {navItems.map((item) => (
              <Button key={item} variant="text" sx={{ color: "#FFF" }}>
                {item}
              </Button>
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
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
