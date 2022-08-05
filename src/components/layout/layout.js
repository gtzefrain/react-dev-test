import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function MainAppBar() {
    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Dev
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export function Layout({ children }) {
    return (
        <>
            <MainAppBar />
            <Container>
                {children}
            </Container>
        </>
    );
}

