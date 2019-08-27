# HeaderButton

This component provides a button pattern to be used within the PageHeader component

### Usage

```jsx
import { PageHeader, HeaderButton, svgs } from '@codeparticle/whitelabelwallet.styleguide';

const { SvgAdd } = svgs.icons;

function MyHeaderButton() {
  return (
    <HeaderButton
      onClick={() => {}}
      Icon={SvgAdd}
      label="Add Something"
    />
  )
}

function MyHeader() {

  return (
    <PageHeader
      title="Title"
      PrimaryAction={MyHeaderButton}
    />
  );
}
```

### Props

#### label

Defines the text to be rendered in the button

#### onClick

Defines the function to be called onClick

#### Icon

If given, will render an icon to the left of the label. Icon is styled by the HeaderButton component

#### variant

Determines the button's variant and styles. Follows the same variants as the Button component.

- 'primary',
- 'secondary',
- 'tertiary',
- 'slate-clear',
- 'green',
- 'slate',
- 'alert',
- 'teal',

#### dataSelector

Optional e2e data-selector attribute


### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| dataSelector | string | '' |
| label | string | required |
| onClick | func | required |
| Icon | func | null |
| variant | string | 'primary' |
