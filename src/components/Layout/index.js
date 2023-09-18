import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Img, H1, LayoutWrapper } from './LayoutStyles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
                <H1>
                    React <Img /> App
                </H1>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout;