import colors from 'styles/colors.scss';

const {
  blue,
  cloud,
  dark,
  grey,
  slate,
  white,
  'off-white': offWhite,
  'cool-grey-dark': coolGreyDark,
  'dark-bg': darkBg,
  'tint-blue': tintBlue,
} = colors;

const lightTheme = {
  name: 'light',
  demo: {
    background: tintBlue,
    border: blue,
    color: slate,
  },
  search: {
    bgBlur: tintBlue,
    bgFocus: tintBlue,
    borderFocus: slate,
    colorBlur: grey,
    iconFocus: blue,
    textPlaceholder: grey,
    textValue: dark,
  },
  input: {
    label: slate,
    bg: tintBlue,
    textValue: dark,
  },
  select: {
    bg: offWhite,
    textValue: slate,
  },
};

const darkTheme = {
  name: 'dark',
  demo: {
    background: darkBg,
    border: slate,
    color: cloud,
  },
  search: {
    bgBlur: darkBg,
    bgFocus: dark,
    borderFocus: dark,
    colorBlur: coolGreyDark,
    iconFocus: darkBg,
    textPlaceholder: grey,
    textValue: white,
  },
  input: {
    bg: dark,
    label: grey,
    textValue: white,
  },
  select: {
    bg: dark,
    textValue: offWhite,
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
