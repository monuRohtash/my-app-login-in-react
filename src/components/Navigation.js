import {Link} from 'react-router-dom'
import classes from "./Navigation.module.css";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavDropdown} from "react-bootstrap";


function Navigation() {


    return <>


        <Box sx={{flexGrow: 1}} className="sticky-top">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 1}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>

                        <ul className={classes.list}>
                                <Link to="/">Home</Link>
                                <Link to="/Products">Place</Link>
                                <Link to="/post">Post</Link>

                            <div>
                               <NavDropdown  title='user'>
                                   <Link to="/signup">Logout</Link>
                           </NavDropdown>
                            </div>
                        </ul>


                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>

        {/*<h1 className="text-lg-center">Welcome user</h1>*/}

    </>

}

export default Navigation;

