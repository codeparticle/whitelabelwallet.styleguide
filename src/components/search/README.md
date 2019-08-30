# Search

The standard Search Input

## Usage

```jsx
import { Search } from '@codeparticle/whitelabelwallet.styleguide';

<Search onSubmit={onSubmit} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| autoSearch | bool | true | Enables/disables automatically triggering onSubmit after 4 characters have been typed |
| onSubmit* | func |  | Callback for submitting a search |
| dataSelector | string | '' | An optional e2e data-selector attr |
| placeholder | string | 'Search...' | Placeholder text. |

**Note:** An asterisk(*) next to a prop's name indicates it is required.