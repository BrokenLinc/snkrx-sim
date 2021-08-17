import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const UI_SHADOW = '3px 3px 0 rgba(0,0,0,0.25)';

const theme = extendTheme({
  config,
  fonts: {
    heading: 'BigBoldPixel',
    body: 'PixulBrush',
  },
  colors: {
    gray: {
      50: '#dadada', // fg
      100: '#dadada', // fg
      200: '#dadada', // fg
      300: '#dadada', // fg
      400: '#717171',
      500: '#717171',
      600: '#40403E',
      700: '#303030', // bg
      800: '#2A2A2A',
      900: '#242424',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.700',
        color: 'gray.50',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        textShadow: '3px 3px 0 rgba(0,0,0,0.25)',
      },
      sizes: {
        '4xl': {
          lineHeight: '3em',
        },
        '3xl': {
          lineHeight: '3em',
        },
        '2xl': {
          lineHeight: '3em',
        },
        xl: {
          lineHeight: '3em',
        },
        lg: {
          lineHeight: '3em',
        },
        md: { lineHeight: '3em' },
        sm: { lineHeight: '3em' },
        xs: { lineHeight: '3em' },
      },
    },
    Text: {
      baseStyle: {
        position: 'relative',
        textShadow: '3px 3px 0 rgba(0,0,0,0.25)',
        top: '0.25em',
      },
    },
  },
});

export default theme;
