import './Navbar.module.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import Home from './home/Home';
import Toggler from './home/Toggler';


const links = [
    {
        name: 'Inicio',
        to: 'home',
        active: 'home'
    },
    {
        name: 'Acerca de mí',
        to: 'about',
        active: 'about'
    },
    {
        name: 'Tecnologías que uso',
        to: 'technologies',
        active: 'techonologies'
    },
    {
        name: 'Experiencia',
        to: 'experience',
        active: 'experience'
    },
    {
        name: 'Proyectos',
        to: 'portfolio',
        active: 'portfolio'
    }
]

const drawerWidth = 240;
const styles = {
    navBarLight: {
        backgroundColor: '#f1f2ee',
        color: 'black'
    },
    navBarHoverLight: {
        backgroundColor: '#f1f2ee',
        color: 'black',
        transform: 'translateY(-5px)'
    },
    navBarDark: {
        backgroundColor: '#27242F',
        color: 'white'
    },
    navBarHoverDark: {
        backgroundColor: '#27242F',
        color: 'white',
        transform: 'translateY(-5px)'
    }
}

export default function Navbar({ darkMode, handleClick }) {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleClickButtonNavBar = (id) => {
        const aboutPosition = document.getElementById(id).getBoundingClientRect();
        window.scrollTo(0, aboutPosition.top + window.pageYOffset - 70);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height:'100%' }} style={darkMode ? styles.navBarHoverDark : styles.navBarLight}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
            </Typography>
            <Divider />
            <List>
                {links.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center'}} >
                            <ListItemText primary={item.name} style={darkMode?{color:'white'}:{color:'black'}} onClick={() => handleClickButtonNavBar(item.to)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={darkMode ? styles.navBarHoverDark : styles.navBarLight}>
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
                        <Toggler darkMode={darkMode} handleClick={handleClick} />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {links.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: 'black' }}
                                onClick={() => handleClickButtonNavBar(item.to)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Home />
            </Box>
        </Box>
    );
}