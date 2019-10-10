# Carousel

A carousel like dot indicator component primarily designed for mobile. The selected dot updates on a user's swipe left or right.

## Usage

```jsx
import { Carousel } from '@codeparticle/whitelabelwallet.styleguide';
  
  const data = [
    { name: 'Address 1' },
    { name: 'Address 2' },
    { name: 'Address 3' },
    { name: 'Address 4' }
  ];

  const onChangeHandler = (selectedItem) => {
    console.log('change fired', selectedItem);
  };

  return (
    <Carousel dataSet={dataSet} onChange={onChangeHandler} />
  );
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | A custom class to apply to the component |
| dataSet | array | | A array of objects that will correspond with the dots |
| defaultIndex | number | 0 | The default selected dot to display |
| onChange | func | | A callback function to call when selected dot changes on swipe |
| size | number | 10 | the diameter in px of the dots. |

**Note:** Any other properties supplied to this component will be spread to the root element.
