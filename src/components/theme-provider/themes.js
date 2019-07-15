import colors from 'styles/colors.scss';

export const themes = {
  light: {
    name: 'light',
    demo: {
      background: colors['tint-blue'],
      border: colors.blue,
      color: colors.slate,
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
