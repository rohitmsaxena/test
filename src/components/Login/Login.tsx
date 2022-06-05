import React, {FC, useState} from 'react';
import styles from './Login.module.css';
import {Box, Button, Modal, SxProps, TextField, Theme} from "@mui/material";
import login from "../../services/LoginServices";

interface LoginProps {
    open: any,
    onClose: any,
    register: any
}

interface LoginState {
    username: string,
    password: string
}
const style: SxProps<Theme> = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Login: FC<LoginProps> = (props: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(username,password).then(({data}) => {
            props.register(data.name);
            props.onClose();
        }).catch(console.log);

    }

    return (
        <Modal open={props.open}>
            <div>
                <Box sx={style} component="form" className={styles.Login} onSubmit={handleSubmit}>
                    <TextField required label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} variant="filled"/>
                    <TextField required label="Password" id="username" type="password" onChange={(e) => setPassword(e.target.value)} value={password} variant="filled"/>
                    <Button type="submit" value="Submit">Submit</Button>
                </Box>
            </div>
        </Modal>
    );
};

export default Login;
