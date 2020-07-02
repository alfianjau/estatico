// font embedding
import 'typeface-oswald'
import 'typeface-quattrocento'

// setup using chakraUI
import { theme as chakraTheme } from '@chakra-ui/core'

const fonts = {
  body: `'Quattrocento'`,
  heading: `'Oswald'`,
  mono: `'Menlo', monospace`,
}

const breakpoints = ['20em', '40em', '52em', '64em', '76em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]
breakpoints.sxl = breakpoints[4]

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    primary: {
      50: '#f1fce2',
      100: '#dbf1bd',
      200: '#c5e697',
      300: '#afdb6f',
      400: '#8ac832',
      500: '#8ac832',
      600: '#628f22',
      700: '#456616',
      800: '#283d0a',
      900: '#0a1500',
    },
    accent: {
      50: '#edf3f8',
      100: '#d5d9dc',
      200: '#bbc0c3',
      300: '#a1a6aa',
      400: '#878d92',
      500: '#222629',
      600: '#545a5f',
      700: '#3c4144',
      800: '#23272a',
      900: '#070e13',
    },
    gray: {
      50: '#f8f0f2',
      100: '#F4F5F7',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#E5E5E5',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#120b0d',
    },
    grey: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
  fonts,
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
    '7xl': '95px',
  },
  breakpoints,
}

export default theme
