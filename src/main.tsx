import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  ThemeProvider,
  createTheme,
  SxProps,
  Theme,
} from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material'

export const colors = {
  primary: {
    main: '#0074C1',
    hover: '#3068AD',
  },
}

const buttonStyles: SxProps<Theme> = {
  minWidth: '0px',
  borderRadius: 0,
  ':hover': {
    backgroundColor: colors.primary.hover,
  },
  ':disabled': {
    backgroundColor: '#CCCCCC',
    color: 'white',
  },
}

const outlinedButtonStyles: SxProps<Theme> = {
  ':hover': {
    backgroundColor: colors.primary.main,
    color: 'white',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0074C1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: buttonStyles,
        outlined: outlinedButtonStyles,
        endIcon: ({ ownerState }) => ({
          ...(ownerState.disabled && { color: '#6A7A8D' }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { borderRadius: '4px' },
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#666666',
          color: 'white',
          borderRadius: '3px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 600,
          fontSize: '1.75rem',
          lineHeight: '36px',
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
