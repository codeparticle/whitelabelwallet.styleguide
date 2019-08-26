# Contact

A component that displays contact info

## Usage

```jsx
import React from 'react';
import { Contact } from '@codeparticle/whitelabelwallet.styleguide';

const messages = {
  copy: 'Copy Address',
  send: 'Send Funds',
};

const contactName = 'Contact Name';
const address = 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e';

const handleSendClicked = () => {
  alert('send clicked');
};

const handleCopyClicked = () => {
  alert('send clicked');
};

return (
  <ThemeWrapper
    defaultToDark={defaultToDark}
    content={
      <Contact
        address={address}
        contactName={contactName}
        messages={messages}
        onSend={handleSendClicked}
        onCopy={handleCopyClicked}
      />
    }
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| address | string | '' | Sets the wallet address for the contact |
| className | string | '' | Sets the class name of the wallet component |
| contactName | string | '' | Sets the contacts name |
| messages | object | '' | Copy and Send properties of type string |
| onSend | func | '' | callback used on send button clicked |
| onCopy | func | '' | callback used on copy button clicked defaults to copying to the clipboard |
| onEdit | func | '' | callback used on cog icon clicked |
