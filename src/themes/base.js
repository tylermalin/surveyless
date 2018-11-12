// https://rebassjs.org/theming

const active = '#519EF7';
const black = '#000000';
const white = '#FFFFFF';

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    active,
    inactive: '#A2A9AF',
    primaryText: '#4F565D',
    secondaryText: '#a0afba',
    background: white,
    tooltipText: white,
    tooltipBackground: black,
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    regular: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [
    '1.0em',
    '1.1em',
    '1.2em',
    '1.3em',
    '1.4em',
    '1.5em',
    '1.75em',
    '2em',
  ],
  buttons: {
    primary: {
      color: white,
      backgroundColor: active,
    },
    outline: {
      color: active,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
};