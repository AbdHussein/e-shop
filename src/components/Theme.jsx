import {createTheme} from '@mui/material'

export const theme = createTheme({
    typography: {
     fontFamily: 'mulish',
      h3: {
        fontSize: 20,
        fontWeight: 700,
      },
      h2:{
        fontSize: 32,
        fontWeight: 600,
      },
      h4:{
        fontSize: 24,
        fontWeight: 400,
      },
      body1:{
        fontSize: 30,
        fontWeight: 600,
      }
    },
    components:{
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                  ...(ownerState.variant === 'contained' &&
                    ownerState.color === 'primary' && {
                      backgroundColor: '#FCDD06',
                      color: '#000',
                      textTransform: 'uppercase',
                      '&:hover': {
                        backgroundColor: 'red',
                      }
                    }),
                }),
            },
        }
    }
  });
  