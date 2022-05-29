import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {AppBar, Box, Button, IconButton, Modal, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Login from "./components/Login/Login.lazy";

function App() {
    const [open, setOpen] = React.useState(false);
    const handleLoginOpen = () => setOpen(true);
    const handleLoginClose = () => setOpen(false);
    return (
    <div className="App">
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
                    <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Modal open={open} onClose={handleLoginClose}>
            <Login />
        </Modal>
    </div>
  );
}

export default App;
