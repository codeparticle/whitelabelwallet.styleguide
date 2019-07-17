import colors from 'styles/colors.scss';

const {
  blue,
  green,
  slate,
  white,
  cloud,
  'dark-bg': darkBg,
  'tint-blue': tintBlue,
  dark,
} = colors;

export const themes = {
  light: {
    name: 'light',
    demo: {
      background: tintBlue,
      border: blue,
      color: slate,
    },
    toggle: {
      button: white,
      fontColor: white,
      offBackground: slate,
      onBackground: green,
    },
    tooltip: {
      bg: white,
      message: blue,
    },
  },
  dark: {
    name: 'dark',
    demo: {
      background: darkBg,
      border: slate,
      color: cloud,
    },
    toggle: {
      button: white,
      fontColor: white,
      offBackground: dark,
      onBackground: green,
    },
  },
};
