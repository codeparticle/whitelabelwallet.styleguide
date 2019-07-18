import colors from '../../styles/colors.scss';
import { ButtonVariants } from '../button';

const {
  blue,
  cloud,
  dark,
  grey,
  'gradient-blue': gradientBlue,
  'gradient-dark': gradientDark,
  slate,
  white,
  'off-white': offWhite,
  green,
  'cool-grey-dark': coolGreyDark,
  'dark-bg': darkBg,
  'tint-blue': tintBlue,
} = colors;

const {
  PRIMARY,
  SLATE,
} = ButtonVariants;

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
  header: {
    bg: gradientBlue,
    svgFill: offWhite,
    closeBtn: cloud,
  },
  select: {
    bg: offWhite,
    bgFocused: white,
    selectText: slate,
    selectFocus: blue,
    selectedOption: blue,
    optionText: coolGreyDark,
    shadow: '0px 3px 8px rgba(0, 0, 0, 0.15)',
  },
  toggle: {
    offBackground: slate,
    onBackground: green,
    button: white,
    fontColor: white,
  },
  tooltip: {
    bg: white,
    message: blue,
  },
  address: {
    background: tintBlue,
    button: PRIMARY,
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
  header: {
    bg: gradientDark,
    svgFill: offWhite,
    closeBtn: coolGreyDark,
  },
  select: {
    bg: dark,
    bgFocused: darkBg,
    selectText: offWhite,
    selectFocus: slate,
    selectedOption: offWhite,
    optionText: grey,
    shadow: '0px 3px 8px rgba(0, 0, 0, 0.6)',
  },
  toggle: {
    offBackground: dark,
    onBackground: slate,
    button: white,
    fontColor: white,
  },
  tooltip: {
    bg: darkBg,
    message: white,
  },
  address: {
    background: dark,
    button: SLATE,
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
