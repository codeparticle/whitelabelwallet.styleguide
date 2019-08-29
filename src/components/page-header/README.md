# PageHeader

A PageHeader pattern to be used across most pages in WLW.

### Usage

Note: The title, NavigationButton, and PrimaryAction all receive a prop `collapsed`. This prop can be useful for:
a. Showing a navbar trigger only on the collapsed view
b. Rendering an Icon button rather than a full button on the collapsed view

Every component passed as a PageHeader prop will also receive `iconProps`, an object that provides a height and width for the icons.

When the screen width is lower than landscape (768px), the PageHeader renders a collapsed view that will only display the NavigationButton, title, and PrimaryButton.

Minimum usage:
```jsx
import { PageHeader } from '@codeparticle/whitelabelwallet.styleguide';

const Header = () => (
  <PageHeader
    title="Page Header"
    NavigationButton={NavButton}
    PrimaryAction={PrimaryAction}
    SecondaryAction={SecondaryAction}
    IconButtons={IconButtons}
  />
);
```

Full usage w/ setup:
```jsx
import {
  PageHeader,
  Button,
  Icon,
  svgs
} from '@codeparticle/whitelabelwallet.styleguide';

const {
  SvgAdd,
  SvgMenu,
  SvgSettings,
  SvgUserAccount,
} = svgs.icons;

const iconProps = {
  height: 24,
  width: 24,
};

const doNothing = () => {};

const IconWrapper = ({ Svg, variant = '', iconProps }) => (
  <>
    <Icon className="wrapper" variant={variant} onClick={doNothing} icon={<Svg {...iconProps} />} />
    <style jsx>
      {`
        :global(.wrapper) {
          padding: 0;
        }
      `}
    </style>
  </>
);


const NavButton = ({ collapsed, ...iconProps }) => (
  <IconWrapper Svg={SvgMenu} {...iconProps} />
);

const Settings = ({ iconProps }) => (<IconWrapper variant="slate" Svg={SvgSettings} iconProps={iconProps} />);
const Account = ({ iconProps }) => (<IconWrapper variant="slate" Svg={SvgUserAccount} iconProps={iconProps} />);

const IconButtons = [
  Settings,
  Account,
];

const PrimaryAction = ({ collapsed, iconProps }) => {
  if (collapsed) {
    return (
      <IconWrapper variant="slate" Svg={SvgAdd} iconProps={iconProps} />
    );
  }

  return (
    <Button size="sm" onClick={doNothing} variant="primary">
      <p>Primary</p>
    </Button>
  );
};

const SecondaryAction = () => (
  <Button size="sm" onClick={doNothing} variant="secondary">
    <p>Secondary</p>
  </Button>
);

const Header = ({ intl, titleKey }) => {
  const title = intl.formatMessage(titleKey);

  return (
    <PageHeader
      title={title}
      NavigationButton={NavButton}
      PrimaryAction={PrimaryAction}
      SecondaryAction={SecondaryAction}
      IconButtons={IconButtons}
    />
  );
};

```

----
### Props

#### title

title is the only required prop. Just pass an intl'd string, and the PageHeader will render it.

----
#### NavigationButton

The navigation button appears to the left of the title, if you choose to pass it. You can leverage the collapsed prop to hide the navigation button until you are viewing the collapsed PageHeader.

----
#### PrimaryAction

The PrimaryAction component represents the main action for a page. On tablet widths and above, it is directly to the right of the title. On the collapsed view, it is on the far-right of the PageHeader.

----
#### SecondaryAction

The SecondaryAction component represents a secondary action for a page. A common use for this would be a date filter for a transaction history.

----
#### IconButtons

The IconButtons represent actions that are generally unrelated to a specific page. They are most commonly used in WLW to open the User's settings and account pages. This prop accepts an array of Components, see the example above.

----
#### dataSelector

An optional e2e data-selector attr

### PropTypes


| name | type | default |
| ---- | ---- | ------- |
| dataSelector | string | '' |
| IconButtons | array | null |
| NavigationButton | node | null |
| PrimaryAction | node | null |
| SecondaryAction | node | null |
| title | string | required |
