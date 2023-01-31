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

// export default function Navbar({darkMode, handleClick}) {
//     // const location = useLocation()
//     // const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

//     return (
//         <Box component={'nav'} width={'100%'} position={'fixed'} sx={{backgroundColor:'#f1f2ee', boxShadow:'0px 0px 5px 0px', zIndex:'1'}}>
//             <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
//                  gap={{xs: '2rem', md: '8rem'}}
//                  textTransform={'lowercase'} fontSize={'1rem'} >
//                 {links.map((link, index) => (
//                     <Box key={index} component={'li'} //className={(link.active === active && !link.type) && Style.active}
//                          sx={{borderImageSource: info.gradient}}>
//                         <a //onClick={() => setActive(link.active)} 
//                         href={link.to}> 
//                         {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
//                             {link.type && <h1>{link.name}</h1>}
//                         </a>
//                     </Box>
//                 ))}
//                 <li>
//                     <Toggler darkMode={darkMode} handleClick={handleClick}/>
//                 </li>
//             </Box>
//         </Box>
//     )
// }

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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUIx
            </Typography>
            <Divider />
            <List>
                {links.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', color: 'red' }} href={item.to}>
                            <ListItemText primary={item.name} />
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
                                sx={{color:'black'}}
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