# Modal

A simple and customizable modal using [react-modal](https://github.com/reactjs/react-modal).

Exposes the Modal component and setAppElement function

### Usage

```jsx
import React, { useState } from 'react';
import { Modal } from '@codeparticle/whitelabelwallet.styleguide';


function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);

    console.log('Closed!');
  }

  ...

  return (
    <Modal
      customStyles={{
        bottom: '10%',
        top: '10%',
        width: '50%',
      }}
      Icon={SvgLogoMark}
      isOpen={isOpen}
      onClose={onClose}
      subTitle="Long, but important"
      title="Terms of Service"
      useAltTheme
    >
      <ModalContent />
    </Modal>
  );
}

```

In your root component:
See [here](http://reactcommunity.org/react-modal/accessibility/) to find out more about setAppElement

```jsx
import { setAppElement } from '@codeparticle/whitelabelwallet.styleguilde';

setAppElement('#root');

function App() {
  return (
    <div id="root">
      {children}
    </div>
  );
}

```

### Props

#### customStyles

Passing a customStyles object allows you to customize the content of your modal. Below are the default styles (and all supported properties):

```js
const defaultStyles = {
  background: white,
  borderRadius: '0px',
  bottom: '20%',
  overflow: 'auto',
  top: '25%',
  width: '500px',
};
```

When passing a customStyles object, you do not need to specify each property, if you want to only change the content's background, you can simply pass this...

```js
const customStyles = {
  background: '#fff',
}
```
and the defaultStyles will be filled in!

----
#### Icon

Renders an Icon above the header title

----
#### isOpen

isOpen determines whether or not to render the Modal. If true, the Modal will be visible, if false, the Modal will be hidden.

It defaults to `false`.

----
#### onClose

The onClose prop specifies a function that will be called when the modal is closed.

It defaults to `null`.

----
#### overlayBackground

This prop allows you to specify a background for the overlay (the area outside of your modal content).

It defaults to `shade`.

----
#### subTitle

Renders a subTitle under the header title

----
#### title

Specifies the title for the Header

----
#### useAltTheme

If true, uses the header's alternate theme

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| customStyles | `object` | See above. |
| Icon | `node` | null |
| isOpen | `bool` | `false` |
| onClose | `func` | `null` |
| overlayBackground | `string` | shade (`'#60799840'`) |
| subTitle | `string` | '' |
| title | `string` | *required* |
| useAltTheme | `bool` | `false` |