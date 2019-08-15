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
    clickOffToClose
    onClose={onClose}
    type={type}
    show={show}
  >
    <p>I'm a sidepanel!</p>
  </Overlay>
);
```

----
### Props

----
#### background

Allows specifying a custom background color. If none is specified, it will default to the color provided by the theme.

----
#### onClose

A callback for when the sidePanel closes. A common usecase scenario where you may need to use this is if you passed true for clickOffToClose and now need to reset the value of show to false.

----
#### show

If true, the sidepanel is visible. If false, the sidepanel is hidden.

----
#### type

'overlay': Slides in from the right, and covers the screen with a transparent blue shade.
'sidepanel': Slides in from the right, min width of 540px, afterwards is 1/3 of screen width, uses the background provided by the theme.

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| background | string | '' |
| onClose | func | null |
| show | bool | false |
| type | oneOf 'overlay' 'sidepanel' | 'overlay' |
