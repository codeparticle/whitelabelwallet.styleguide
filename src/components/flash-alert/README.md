# FlashAlert

A component that displays an alert. Uses the CSSTransition component from react-transition-group to animate the notification. 

## Usage

```jsx
import React from 'react';
import { FlashAlert } from '@codeparticle/whitelabelwallet.styleguide';

const message = 'Success! Password has been changed!';
const type = 'success';
const show = false;
const duration = 3000;

const handleOnClose = () => {
  alert('FlashAlert Closed');
};

return (
  <FlashAlert
    message={message}
    type={type}
    show={show}
    duration={duration}
    onClose={handleOnClose}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the class name of the flash alert component |
| duration | number | 3000 | Sets the time in milliseconds the alert will be on screen |
| height | string | 'auto' | Sets the height of the flash-alert |
| message | number | '' | The message that will be displayed inside the notification |
| onClose | func | '' | callback used when notification leaves the screen |
| show | bool | false | Determines whether or not the notification appears on screen  |
| timeout | number | 300 | The duration of the transition, in milliseconds. Required unless addEndListener is provided. |
| type | oneOf 'fail', 'success' | 'fail' | Sets the styling for the type of notification |
