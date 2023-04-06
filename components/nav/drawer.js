import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import { useState } from "react";


const drawer = ({openDrawer, handleDrawerToggle, props }) => {
    const  window  = props;
    const navItems = ['Home', 'About', 'Contact'];
    const itemsDrawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Empresa
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: '240px' },
        }}
      >
        {itemsDrawer}
      </Drawer>
    </Box>
  );
};

export default drawer;
