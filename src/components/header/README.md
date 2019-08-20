# Header

The Header component with support for sub-title

## Usage

```jsx
import { Header } from '@codeparticle/whitelabelwallet.styleguide';
import { IconComponent } from '@codeparticle/whitelabelwallet.styleguide';

<Header
    className={'my-header'}
    Icon={IconComponent}
    onClose={onClose}
    title={'Mock Title'}
    subTitle={'Sub-Title'}
/>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the className for the button element |
| onClose | func | '' | Handles when the close button is clicked |
| Icon | func |  | A required svg component to display within the header|
| minimalStyles | bool | false | If true, hides subTitle and sets background transparent |
| title | string | '' | Large title to diplay in the header|
| subTitle | string | '' | Display additional title information |
| useAltTheme | bool | false | If true, displays alternate theme |


**Note:** Any other properties supplied to this component will be spread to the root element.