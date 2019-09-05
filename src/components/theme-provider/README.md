# theme-provider

This module includes:
- ThemeContext
- useTheme
- withTheme
- themes (light and dark)
- THEME_KEYS (LIGHT and DARK)
- ThemeProvider

## ThemeProvider

### Usage

Leverages the ThemeContext to provide a more out-of-the-box WLW theming experience.

```jsx
import { ThemeProvider, THEME_KEYS } from '@codeparticle/whitelabelwallet.styleguide';

const { DARK } = THEME_KEYS;

export const App = () => {
  return (
    <ThemeProvider themeKey={DARK}>
      <Children />
    </ThemeProvider>
  );
};

```
### Props


| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| themeKey | string | required | Theme key of LIGHT or DARK (provided by THEME_KEYS object) |

## ThemeContext

  ### Usage

```jsx

import { ThemeContext } from '@codeparticle/whitelabelwallet.styleguide';

// Use at top of component tree
export const App = () => {
  return (
    <ThemeContext.Provider value={myTheme}>
      <Children />
    </ThemeContext.Provider>
  );
};
```

  

### Props

  

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| value | object | light | Theme object for the provider |

## useTheme

A react hook pattern to consume the theme

### Usage
The WhiteLabelWallet uses `styled-jsx` to facilitate theming. This example will demonstrate how this library uses it, however you are not required to use `styled-jsx`.

```jsx
// Theme.js
export const theme = {
  myTitle: {
    title: red,
    subTitle: gray,
    background: white,
  },
};


// Component.js
import { useTheme } from '@codeparticle/whitelabelwallet.styleguide';

export const MyTitle = () => {
  // option A
  const theme = useTheme('myTitle');
  // option B
  const { myTitle: theme } = useTheme();
  
  return (
    <>
      <div className="wrapper">
        <h1 className="title">A title</h1>
        <p className="subtitle">A subtitle</p>
      </div>
      <style jsx="true">
        {`
          .wrapper {
            background: ${theme.background};
          }

          .title {
            color: ${theme.title};
          }
	  
          .subtitle {
            color: ${theme.subtitle};
          }
        `}
      </style>
    </>
  );
};
```

### Parameters


| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| componentKey | string | null | Provide a componentKey to destructure your theme before passing to component |

## withTheme

An HOC pattern to Consume the theme

### Usage

```jsx
// Theme.js
export const theme = {
  myTitle: {
    title: red,
    subTitle: gray,
    background: white,
  },
};


// Component.js
import { useTheme } from '@codeparticle/whitelabelwallet.styleguide';

const MyTitleView = (props) => {
  const { theme } = props;

  return (
    <>
      <div className="wrapper">
        <h1 className="title">A title</h1>
        <p className="subtitle">A subtitle</p>
      </div>
      <style jsx="true">
        {`
          .wrapper {
            background: ${theme.background};
          }

          .title {
            color: ${theme.title};
          }
	  
          .subtitle {
            color: ${theme.subtitle};
          }
        `}
      </style>
    </>
  );
};

export const MyTitle = withTheme(MyTitleView, 'myTitle');
```

### Parameters


| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| Component* | component | null | Component that receives theme |
| componentKey | string | null | Provide a componentKey to destructure your theme before passing to component |
