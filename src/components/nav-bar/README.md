# NavBar

A simple to use NavBar component

----
### Usage

```jsx
import { NavBar } from '@codeparticle/whitelabelwallet.styleguide';

const [isOpen, setIsOpen] = useState(false);

const navBarItems = [
  {
    label: 'My Wallets',
    Icon: svgs.icons.SvgWallet,
    path: '/my-wallets',
  },
  {
    label: 'Contacts',
    Icon: svgs.icons.SvgContact,
    path: '/contacts',
  },
];

function onClose() {
  setIsOpen(false);
}

return (
  <NavBar
    isOpen={isOpen}
    onClose={onClose}
    navItems={navBarItems}
  />
);
```

----
### Props

----
#### onClose

A callback for when the close button is clicked.

----
#### labelLink

Intl'd string for the link displayed on the footer of the NavBar.

----
#### labelPoweredBy

Intl'd string for the text displayed above the link on the footer of the NavBar.

----
#### linkHref

Link to redirect the user when the user clicks on the link on the footer of the NavBar.

----
#### isOpen (Only applied to mobile/tablet innerWidth <= widthBreakpointMd)

If true, the navbar is visible. If false, the navbar is hidden.

----
#### navItems

Links to be rendered.

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| isOpen | bool | false |
| labelLink | string | 'Crypto Particle' |
| labelPoweredBy | string | 'Powered by' |
| linkHref | string | 'https://www.cryptoparticle.io/' |
| onClose | func | null |
| navItems | array | [] |
