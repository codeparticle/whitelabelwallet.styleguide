import colors from 'styles/colors.scss';

const {
  blue,
  green,
  grey,
  slate,
  white,
  cloud,
  grey,
  'cool-grey-dark': coolGreyDark,
  'dark-bg': darkBg,
  'cool-grey-dark': coolGreyDark,
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
