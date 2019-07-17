# Area Chart

An AreaChart. The chart is responsive to the height and width of its container. 

## Usage

```jsx
import { AreaChart } from '@codeparticle/whitelabelwallet.styleguide';
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const colors = ['red', 'green'];

  return (
    <div style={{ height: 300, width: 300 }}>
      <AreaChart
        data={data}
        colors={colors}
      />
    </div>
  );
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| data | object | {} | The data the chart should render |
| colors | array | ['red'] | The colors that the chart should display as a gradient |

**Note:** Any other properties supplied to this component will be spread to the root element.
