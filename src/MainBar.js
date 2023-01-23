import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { Badge, FormControl, InputLabel, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

//const pages = [{ name: 'Home', url: "/" }, { name: 'Products', url: "/products" }, { name: 'Brand', url: "/brands" }, { name: 'Events', url: "/events" }];
const pages = [{ name: 'Home', url: "/home" }, { name: 'Events', url: "/events" }];

const settings = [{ name: 'Account Settings', url: "/settings/profile" }];
const drawerWidth = 0;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    paddingLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function MainBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const onInputChange = (e) => {
        console.log(e.target.value)
    }
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleChange = (event) => {
        console.log("Handle change")
      };

    const handleCloseNavMenu = () => {
        navigate()
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLinkClick = (pageData) => {
        console.log("Clicked " + pageData.url)
        navigate(pageData.url)
    }
    return (
        <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
            <Container maxWidth="100%">
                <Toolbar disableGutters>
                    <RocketLaunchOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Launch/Showcase/Events
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={() => handleLinkClick(page)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, m: 0, p: 0 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleLinkClick(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}

                    </Box>
                    {/*<Box sx={{  display: { xs: 'none', md: 'flex' } , m: 0, p :0}}>
                       
                            <Select autoWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="10"
                                label="Events"
                                onChange={handleChange}
                                sx={{backgroundColor: "primay.main",height: "40px!important", width: "100px!important" , gap:5, borderRadius: 2, margin:"none", padding:"none", borderTopColor: "primary.main"}}
                            >
                                <MenuItem value={10}>Events</MenuItem>
                                <MenuItem value={20}>Brand</MenuItem>
                                <MenuItem value={30}>Products</MenuItem>
                            </Select>
                         
                     
                    </Box> */}
                    <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                    <Search>
            
            <Select autoWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="10"
                                label="Events"
                                onChange={handleChange}
                                sx={{height: "55px!important",color: "white", width: "100px!important" , borderTopStyle: "hidden!important" , outlineStyle: "none"}}
                            >
                                <MenuItem value={10}>Events</MenuItem>
                                <MenuItem value={20}>Brand</MenuItem>
                                <MenuItem value={30}>Products</MenuItem>
                            </Select>            
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => onInputChange(e)}
              onSubmit={(e) => onInputChange(e)}
            />
          </Search>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Badge badgeContent={4} color="warning">
                            <AddShoppingCartOutlinedIcon fontSize='large' style={{ verticalAlign: "middle" }} onClick={() => navigate("/checkout")} style={{ cursor: "pointer" }} />
                        </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={() => handleLinkClick(setting)}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        &nbsp; Raj
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MainBar;