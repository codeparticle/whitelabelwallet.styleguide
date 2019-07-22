import colors from '../../styles/colors.scss';
import { ButtonVariants } from '../button';

const {
  blue,
  cloud,
  dark,
  green,
  grey,
  red,
  rose,
  slate,
  white,
  'cool-grey-dark': coolGreyDark,
  'dark-bg': darkBg,
  'gradient-blue': gradientBlue,
  'gradient-dark': gradientDark,
  'off-white': offWhite,
  'tint-blue': tintBlue,
  'mint-chip': mintChip,
  'gradient-blue-start': gradientBlueStart,
  'gradient-blue-end': gradientBlueEnd,
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
  passPhrase: {
    bgBlur: tintBlue,
    bgFocus: cloud,
    error: rose,
    success: mintChip,
    textColor: slate,
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
  transferAmount: {
    bg: cloud,
    conversionAmount: blue,
    currencyAmount: slate,
    icons: grey,
    textAreaBg: tintBlue,
    textTitle: coolGreyDark,
  },
  contact: {
    bg: tintBlue,
    icon: cloud,
    details: slate,
    address: grey,
    copyBtnType: ButtonVariants.PRIMARY,
    sendBtnType: ButtonVariants.GREEN,
  },
  qrcode: {
    bg: tintBlue,
    textTitle: slate,
    messageBg: cloud,
    request: dark,
  },
  wallet: {
    bg: tintBlue,
    textTitle: slate,
    textValue: grey,
    receiveBtnType: ButtonVariants.PRIMARY,
    withdrawBtnType: ButtonVariants.GREEN,
    gradientStart: mintChip,
    gradientEnd: mintChip,
  },
};

const darkTheme = {
  name: 'dark',
  demo: {
    background: darkBg,
    border: slate,
    color: cloud,
  },
  passPhrase: {
    bgBlur: dark,
    bgFocus: slate,
    error: red,
    success: green,
    textColor: white,
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
    bg: dark,
    message: white,
  },
  address: {
    background: dark,
    button: SLATE,
  },
  transferAmount: {
    bg: dark,
    conversionAmount: slate,
    currencyAmount: offWhite,
    icons: coolGreyDark,
    textAreaBg: darkBg,
    textTitle: grey,
  },
  contact: {
    bg: dark,
    icon: coolGreyDark,
    details: white,
    address: grey,
    copyBtnType: ButtonVariants.SLATE,
    sendBtnType: ButtonVariants.GREEN,
  },
  qrcode: {
    bg: dark,
    textTitle: white,
    messageBg: slate,
    request: white,
  },
  wallet: {
    bg: dark,
    textTitle: white,
    textValue: white,
    receiveBtnType: ButtonVariants.SLATE,
    withdrawBtnType: ButtonVariants.GREEN,
    gradientStart: gradientBlueStart,
    gradientEnd: gradientBlueEnd,
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
