# MobilePage

A mobile page pattern

### Usage

```jsx
// Only MobilePage is needed, other imports are for example purposes
import { MobilePage, Contact, svgs } from '@codeparticle.whitelabelwallet.styleguide';

const {
  SvgAdd,
  SvgIconContact,
  SvgMenu,
} = svgs.icons;

function ContactsPage({ contacts = [] }) {
  return (
    <MobilePage
      NavigationButton={SvgMenu}
      PrimaryAction={SvgAdd}
      Icon={SvgIconContact}
      title="Contacts"
      dataSelector="contacts"
    >
      {contacts.map((contact, i) => <Contact contact={contact} key={i} />)}
    </MobilePage>
  );
}
```

### Props

----
#### title {string}*

The title prop is string that is always required. The text should be intl'd before being passed

----
#### Icon {func}*

The Icon prop is rendered above the title, it should always be passed as well

----
#### NavigationButton {func}*

The NavigationButton prop should handle rendering of a navbar trigger or backbutton

----
#### onAddClicked {func}*

The onAddClicked will be called when the circular add button is clicked.

----
#### PrimaryAction {func}*

The PrimaryAction prop handles rendering of of a page's primary action, such as adding a resource

----
#### dataSelector {string} default: 'mobile-page'

The dataSelector is an optional (but recommended) prop used for E2E testing.

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| dataSelector | string | '' |
| Icon | func | required |
| NavigationButton | func | required |
| onAddClicked | func | null |
| PrimaryAction | func | required |
| title | string | required |
