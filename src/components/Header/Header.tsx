import React, {Component} from 'react';
import styles from './Header.module.css';
import {AppBar, Box, Button, IconButton, Modal, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../Login/Login";

interface HeaderProps {
    setIsAuthenticated: (text: boolean) => void,
    isAuthenticated: boolean
}
interface HeaderState {
    open: boolean,
    user: string
}

class Header extends Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            open: false,
            user: ''
        }
        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleLoginClose = this.handleLoginClose.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(user: string) {
        this.props.setIsAuthenticated(true);
        this.setState({ user });
    }

    handleLoginOpen() {
        this.setState({open: true});
    }

    handleLoginClose() {
        this.setState({open: false});
    }


    render() {
        let login;
        if (this.props.isAuthenticated) {
            login = <div>{this.state.user}</div>
        } else {
            login = <Button color="inherit" onClick={this.handleLoginOpen}>Login</Button>
        }

        return (
            <div>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Awesome Library of Books and Things
                            </Typography>
                            {login}
                        </Toolbar>
                    </AppBar>
                </Box>
                <Login open={this.state.open} onClose={this.handleLoginClose} register={this.handleLogin} />
            </div>
        )
    }
}

export default Header;
