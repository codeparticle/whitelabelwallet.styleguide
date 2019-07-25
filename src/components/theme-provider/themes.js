import colors from 'styles/colors.scss';

const {
  blue,
  green,
  slate,
  white,
  cloud,
  grey,
  'cool-grey-dark': coolGreyDark,
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
    search: {
      bgBlur: tintBlue,
      bgFocus: tintBlue,
      colorBlur: grey,
      iconFocus: blue,
      textPlaceholder: grey,
      textValue: dark,
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
    search: {
      bgBlur: darkBg,
      bgFocus: dark,
      colorBlur: coolGreyDark,
      iconFocus: blue,
      textPlaceholder: grey,
      textValue: white,
    },
  },
};
