import {createTheme} from '@mui/material'

export const theme = createTheme({
    typography: {
     fontFamily: 'mulish',
      h3: {
        fontSize: 24,
        fontWeight: 700,
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
  