# ToggleSwitch

The standard ToggleSwitch

## Usage

```jsx
import { ToggleSwitch } from '@codeparticle/whitelabelwallet.styleguide';

const [value, setValue] = useState('');
const onClick = () => {
    setValue(!value);
};

<ToggleSwitch onClick={onClick} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| onClick | func | null | Callback for toggling the ToggleSwitch |
