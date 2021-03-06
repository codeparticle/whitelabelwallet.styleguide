import colors from '../../styles/colors.scss';
import { ButtonVariants } from '../button';
import { IconVariants } from '../icon-button';

const {
  blue,
  blueShade,
  boxShadowDark,
  boxShadowLight,
  cloud,
  coolBlue,
  coolGreyDark,
  dark,
  darkBg,
  gradientBlue,
  gradientBlueEnd,
  gradientBlueStart,
  gradientDark,
  gradientTeal,
  green,
  grey,
  mintChip,
  offWhite,
  red,
  rose,
  slate,
  tintBlue,
  white,
} = colors;

const {
  PRIMARY,
  SLATE,
} = ButtonVariants;

const {
  DEFAULT,
} = IconVariants;

const lightTheme = {
  name: 'light',
  carousel: {
    borderColor: slate,
    bgActive: slate,
  },
  circularAddButton: {
    background: coolBlue,
  },
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
    svgButtonVariant: SLATE,
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
    editBtnType: ButtonVariants.SLATE,
    sendBtnType: ButtonVariants.GREEN,
  },
  list: {
    header: slate,
    primary: {
      background: tintBlue,
      border: tintBlue,
      color: slate,
      count: {
        background: white,
        color: slate,
      },
    },
    selected: {
      background: cloud,
      border: cloud,
      color: dark,
      count: {
        background: white,
        color: blue,
      },
    },
    secondary: {
      background: white,
      border: cloud,
      color: slate,
      count: {
        background: slate,
        color: white,
      },
    },
    subItem: {
      background: white,
      border: cloud,
      color: slate,
      icon: grey,
    },
    subItemSelected: {
      background: cloud,
      border: blue,
      color: blue,
      icon: blue,
    },
  },
  mobileList: {
    primary: {
      background: white,
      border: white,
      color: slate,
      subtitle: grey,
    },
    secondary: {
      background: offWhite,
      border: offWhite,
      color: slate,
      subtitle: grey,
    },
  },
  overflow: {
    bg: tintBlue,
    color: slate,
  },
  overlay: {
    color: slate,
    sidepanel: white,
    overlay: blueShade,
    shadow: boxShadowLight,
    footerBackground: tintBlue,
  },
  pageFooter: {
    background: tintBlue,
    color: slate,
  },
  pageHeader: {
    color: slate,
  },
  qrcode: {
    bg: tintBlue,
    bgMobile: cloud,
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
  carousel: {
    borderColor: white,
    bgActive: white,
  },
  circularAddButton: {
    background: coolBlue,
  },
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
    svgButtonVariant: DEFAULT,
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
  list: {
    header: coolGreyDark,
    primary: {
      background: dark,
      border: dark,
      color: grey,
      count: {
        background: darkBg,
        color: white,
      },
    },
    selected: {
      background: coolGreyDark,
      border: coolGreyDark,
      color: white,
      count: {
        background: dark,
        color: white,
      },
    },
    secondary: {
      background: darkBg,
      border: coolGreyDark,
      color: grey,
      count: {
        background: dark,
        color: white,
      },
    },
    subItem: {
      background: darkBg,
      border: coolGreyDark,
      color: grey,
      icon: coolGreyDark,
    },
    subItemSelected: {
      background: coolGreyDark,
      border: white,
      color: white,
      icon: white,
    },
  },
  mobileList: {
    primary: {
      background: dark,
      border: dark,
      color: grey,
      subtitle: coolGreyDark,
    },
    secondary: {
      background: darkBg,
      border: coolGreyDark,
      color: grey,
      subtitle: coolGreyDark,
    },
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
    copyBtnType: ButtonVariants.PRIMARY,
    editBtnType: ButtonVariants.SLATE,
    sendBtnType: ButtonVariants.GREEN,
  },
  overflow: {
    bg: dark,
    color: grey,
  },
  overlay: {
    color: grey,
    sidepanel: darkBg,
    overlay: blueShade,
    shadow: boxShadowDark,
    footerBackground: dark,
  },
  pageFooter: {
    background: dark,
    color: grey,
  },
  pageHeader: {
    color: grey,
  },
  qrcode: {
    bg: dark,
    bgMobile: darkBg,
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

// Some components may have one-off themes.
// They should be placed here, and accessed with
// a boolean prop useAltTheme
const alternateTheme = {
  input: {
    bg: white,
    label: white,
    textValue: dark,
  },
  header: {
    bg: gradientTeal,
    svgFill: white,
    closeBtn: white,
  },
  pageHeader: {
    color: white,
  },
};

export const themes = {
  alt: alternateTheme,
  dark: darkTheme,
  light: lightTheme,
};
