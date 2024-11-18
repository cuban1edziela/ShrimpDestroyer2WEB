import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: `"Press Start 2P", sans-serif`,
        fontSize: 10,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    palette: {
        primary: {
            main: "#0c150e",
            light: "#ffffff",
        },
        secondary: {
            main: "#3b6764",
            light: "#ffb242",
        },
        background: {
            default: "#131400", 
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#131400", // Apply the background color globally
                    color: "#ffffff", // Optional: set a default text color to contrast with the background
                },
            },
        },
    },
});
