# ToggleSwitch

The standard ToggleSwitch

## Usage

```jsx
import { ToggleSwitch } from '@codeparticle/whitelabelwallet.styleguide';

const [value, setValue] = useState(false);
const onClick = () => {
    setValue(!value);
};

<ToggleSwitch onClick={onClick} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| dataSelector | string | '' | An optional e2e data-selector attr |
| onClick | func | null | Callback for toggling the ToggleSwitch |
