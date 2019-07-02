# Search

The standard Search Input

## Usage

```jsx
import { Search } from '@codeparticle/react-style-guide';

<Search onSubmit={onSubmit} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| onSubmit* | func |  | Callback for submitting a search |
| placeholder | string | 'Search...' | Placeholder text. |
| theme | string | `light` | Toggles the theme. Options are: `light` and `dark` |

**Note:** An asterisk(*) next to a prop's name indicates it is required.