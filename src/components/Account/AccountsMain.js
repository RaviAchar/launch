import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CustomerService from './CustomerService';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function AccountsMain() {
    const open = React.useState(true)
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: 'flex', top: "60",
        }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem key="Profile" disablePadding>
                            <ListItemButton onClick={() => navigate("profile")}>
                                <ListItemIcon>
                                    <Person2OutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile"  />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="Account" disablePadding>
                            <ListItemButton onClick={() => navigate("accounts")}>
                                <ListItemIcon>
                                    <AccountBalanceOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Account"   />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="Orders" disablePadding>
                            <ListItemButton onClick={() => navigate("orders")}>
                                <ListItemIcon>
                                    <Shop2OutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Orders"  />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="Customer Service" disablePadding>
                            <ListItemButton onClick={() => navigate("customerservice")} >
                                <ListItemIcon>
                                    <SupportAgentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Customer Service" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />

            </Box>
        </Box>
    );
}
