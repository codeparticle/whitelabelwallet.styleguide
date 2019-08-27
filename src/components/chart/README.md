# Chart

A Container for Chart components. Enables charts to be responsive. 

## Usage

```jsx
import { Chart } from '@codeparticle/whitelabelwallet.styleguide';
import { VictoryArea } from 'victory';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const defaultStyle = {
  width: '100%',
  height: 280,
};

return (
<div style={defaultStyle}>
  <Chart>
    <VictoryArea
      data={data}
    />
  </Chart>
</div>
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the class name on the root element |
| dataSelector | string | '' | Optional e2e data-selector attr |

**Note:** Any other properties supplied to this component will be spread to the root element.
