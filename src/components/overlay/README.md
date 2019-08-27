# Overlay

A simple to use overlay component

----
### Usage

```jsx
import { Overlay } from '@codeparticle/whitelabelwallet.styleguide';

const [show, setShow] = useState(false);
const type = 'sidepanel';

function onClose() {
  setShow(false);
}

return (
  <Overlay
    onClose={onClose}
    show={showValue}
    type={type}
    title="Wallet disclaimer"
    subTitle="Very important stuff!"
    Icon={SvgLogoMark}
  >
    <OverlayContent color={textColor} />
  </Overlay>
);
```

----
### Props

----
#### background

Allows specifying a custom background color. If none is specified, it will default to the color provided by the theme.

----
#### Icon

Renders an Icon above the header title

----
#### isOpen

If true, the sidepanel is visible. If false, the sidepanel is hidden.

----
#### onClose

A callback for when the sidePanel closes. A common usecase scenario where you may need to use this is if you passed true for clickOffToClose and now need to reset the value of show to false.

----
#### subTitle

Renders a subTitle under the header title

----
#### title

Specifies the title for the Header

----
#### type

'overlay': Slides in from the right, and covers the screen with a transparent blue shade.
'sidepanel': Slides in from the right, min width of 540px, afterwards is 1/3 of screen width, uses the background provided by the theme.

----
#### useAltTheme

If true, uses the header's alternate theme

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| background | string | '' |
| cancelButtonText | `string` | Cancel |
| hasCancelButton | `bool` | true |
| hasFooter | `bool` | true |
| Icon | `node` | null |
| isOpen | `bool` | false |
| footerButtonText | `string` | Continue |
| onCancelClick | func | null |
| onClose | func | null |
| subTitle | `string` | '' |
| title | `string` | *required* |
| type | oneOf 'overlay' 'sidepanel' | 'overlay' |
| useAltTheme | `bool` | `false` |
