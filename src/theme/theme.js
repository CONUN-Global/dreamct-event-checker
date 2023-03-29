import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    // Update typography settings here
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Add any other custom theme settings here
})

export default theme
