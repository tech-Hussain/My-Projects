import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Outlet,NavLink} from "react-router-dom"
const drawerWidth = 240;
const navItems = ['home', 'aboutMe', 'contact','login','register'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <NavLink to="/"><img src="img/logo.png" alt="logo" style={{height:"5rem"}}/></NavLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          (item!=="home")?<ListItem key={item} disablePadding><NavLink to={item}><ListItemButton sx={{ textAlign: 'left' ,textTransform:"capitalize" }}><ListItemText className='activeText' primary={item}/></ListItemButton></NavLink></ListItem>:
          <ListItem key={item} disablePadding><NavLink to={"/"}><ListItemButton sx={{ textAlign: 'left' ,textTransform:"capitalize" }}><ListItemText className='activeText' primary={item}/></ListItemButton></NavLink></ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
    <Box sx={{ display: 'flex'}}>
      <AppBar className="navbar" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NavLink to="/"><img src="img/logo.png" alt="logo" style={{height:"5rem"}}/></NavLink>
          </Typography>
          <Box sx={{width:"35%", display: { xs: 'none', sm: 'flex' },justifyContent:"space-between" }}>
            {navItems.map((item) => (
              (item !== "home")?<NavLink to={item} key={item} ><Button sx={{ color: '#fff',}}>{item}</Button></NavLink>:<NavLink to={"/"} key={item} ><Button sx={{ color: '#fff',}}>{item}</Button></NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          className="navbar"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    <Outlet/>
    </>
  );
}


export default Navbar;
