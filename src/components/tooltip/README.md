# Tooltip

A tooltip component built using https://github.com/wwayne/react-tooltip.

The tooltip theme/color changes based on the nearest provider's theme.

## Usage

### Basic

```jsx
import React from 'react';
import { Tooltip } from '@codeparticle/whitelabelwallet.styleguide';

<>
  <div
    className="demo-container"
    data-for="demo-tooltip"
    data-tip
  >
    Hover to trigger tooltip
  </div>
  <Tooltip
    content="Tooltip"
    Id="demo-tooltip"
    place={place}
  />
</>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| clickable | boolean | false | Enables tooltip to respond to mouse (or touch) events |
| content* | oneOfType: string, node | N/A | Sets the content or message of the tooltip |
| dataSelector | string | '' | An optional e2e data-selector attr |
| Id* | string | N/A | A unique identifier for the tooltip (must have corresponding data-for) |
| place | oneOf: 'top', 'bottom', 'left', 'right' | 'top' | Sets the placement of the tooltip |
