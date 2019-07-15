import colors from 'styles/colors.scss';

const {
  blue,
  white,
} = colors;

export const themes = {
  light: {
    name: 'light',
    demo: {
      background: colors['tint-blue'],
      border: colors.blue,
      color: colors.slate,
    },
    tooltip: {
      bg: white,
      message: blue,
    },
  },
  dark: {
    name: 'dark',
    demo: {
      background: colors['dark-bg'],
      border: colors.slate,
      color: colors.cloud,
    },
  },
};
