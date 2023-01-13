import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Google} from '@mui/icons-material';
import {AppBar} from "@mui/material";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const DashboardNavbarRoot = styled(AppBar)(({theme}) => ({
    backgroundColor: "#000034",
    color: "white",
    boxShadow: theme.shadows[3]
}));

export default function Appbar() {
    return (
        <DashboardNavbarRoot
            sx={{
                left: {
                    lg: 0
                },
                width: {
                    lg: 'calc(100%)'
                }
            }}>
        <Toolbar
            disableGutters
            sx={{
                minHeight: 64,}}>
                {/* google icon */}
                <Google sx={{ color: 'white', mr: 1, fontSize: '30px' }} />
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Google Game & Startups Summit
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Ara..."
                        inputProps={{ 'aria-label': 'search' }}
                        // onChange={(e) => searchItem(e.target.value)}
                    />
                </Search>
        </Toolbar>
        </DashboardNavbarRoot>
    )
}