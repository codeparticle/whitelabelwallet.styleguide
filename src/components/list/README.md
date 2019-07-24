# List

A fully customizable list component. This component also exposes a few generic cellFormatters such as `Text` and `ChildCount`.

## Usage

```jsx
import React from 'react';
import { cellFormatters, List } from '@codeparticle/react-style-guide';

const {
  Text, // Default renderer
  ChildCount,
} = cellFormatters;

const onRowClicked = () => {};

function ChildCountRenderer({ cellStyles, column, data }) {
  const count = data['someProperty'].length;

  return (
    <div>
      <Text value={column} />
      <ChildCountRenderer
        childCount={count}
        style={cellStyles.childCount}
      />
    </div>
  );
}

function AmountRenderer({ data, column }) {
  const color = data.type === 'payment'
    ? colors.red
    : colors.green;

  return (
    <>
      <p>{column}</p>
      <style jsx>
        {`
          p {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

const columnDefs = [
  {
    title: 'Date',
    gridColumns: '1 / 3',
    property: 'date',
    customRenderer: Text,
  },
  {
    title: 'Address',
    gridColumns: '4 / 7',
    property: 'address',
  },
  {
    title: 'Details',
    gridColumns: '7 / 10',
    property: 'details',
  },
  {
    title: 'Amount',
    gridColumns: '12',
    property: 'amount',
    customRenderer: AmountRenderer,
  },
];

return (
  <List
    id="my-list"
    columnDefs={columnDefs}
    onRowClicked={onRowClicked}
    rowData={dataSet}
  />
);
```

## Props

### id* (string)

Always pass your list a unique id.

### columnDefs* (array of objects)

columnDefs defines the columns of each row. It is an array of objects that each require a `title`, `gridColumns`, and `property`. The order of the array technically does not matter as they will be ordered via their gridColumns property.    

`Title` (string): Readable column title (applied to header at the top of the list)    
`gridColumns` (string): Uses css [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column). The list provides 12 columns for content to be rendered inside of. The most common way to specify grid-column would either be declaring start and end like so: `'1 / 3'`, or the exact column: `'4'`.    
`property` (string): The property of the data to be displayed in your column.    
`customRenderer` (React Component): A custom component that will render the cell. Defaults to renderering as text. The customRenderer also receives five props:    

```jsx
// props
  {
    cellStyles, // a style object that contains child objects for each stock cellFormatter
    data, // the column's dataset
    colIndex, // the column's index
    column, // the column's value to render
    index, // the row's index
  }
```

Example

```jsx
const columnDefs = [
  {
    title: 'Date',
    gridColumns: '1 / 3',
    property: 'date',
  },
  {
    title: 'Address',
    gridColumns: '4 / 7',
    property: 'address',
  },
  {
    title: 'Details',
    gridColumns: '7 / 10',
    property: 'details',
  },
  {
    title: 'Amount',
    gridColumns: '12',
    property: 'amount',
    customRenderer: customAmountRenderer,
  },
];

return (
  <List columnDefs={columnDefs} {...rest} />
);
```

customAmountRenderer

```jsx
function customAmountRenderer({ data, column }) {
  const color = data.type === 'payment'
    ? 'red'
    : 'green';

  return (
    <>
      <p>{column}</p>
      <style jsx>
        {`
          p {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}
```

----
### rowData* (array of objects)

rowData is the second most important prop. It works w/ columnDefs to power your list. Using the default sorting, rowData needs to be provided as an array of objects. The columnDefs will render each property defined in columnDefs from the objects in rowData.    

Using the previously shown columnDefs with this rowData would provide a list that displays `date`, `address`, `details`, and `amount` from left to right.

```jsx
[
  {
    'date': '2015-02-24 08:23:54',
    'address': 'Address 3',
    'details': 'Deposit from Rosales',
    'type': 'deposit',
    'amount': 'G 0.96',
  },
  {
    'date': '2016-08-20 03:05:56',
    'address': 'Address 8',
    'details': 'Payment to Nieves',
    'type': 'payment',
    'amount': 'G 10.36',
  },
]
```

----
### onRowClicked* (func)

onRowClicked is a function that is triggered whenever a row is clicked. It receives the row's dataset as it's only arg 

```jsx
function onRowClicked(data) {
  const { someProperty } = data;

  doSomethingTo(someProperty);
}
```

----
### childToRender (element) default: null

The childToRender prop accepts a function or React element. When a list item/row is clicked, the prop will be rendered. It receives the row's dataset via the `data` prop. This prop can be used to nest lists as well.

```jsx
function ChildComponent({ data }) {
  const { message } = data;

  return <p>{message}</p>;
}

return (
  <List childToRender={ChildComponent} {...rest} />
);
```


----
### customSort (func) default: null

The customSort prop allows you to provide a customSorting function. It will receive columnDefs and rowData as params via an object. The sort just needs to return an array of objects w/ two properties: `columns`, and `data`.    

`columns` (array): Values to be iterated on and rendered    
`data` (object): The entire row's dataset.    

An example of how this would look using the above data & columnDefs:

```jsx
[
  {
    columns: [
      '2015-02-24 08:23:54',
      'Address 3',
      'Deposit from Rosales',
      'G 0.96',
    ],
    data: {
      date: '2015-02-24 08:23:54',
      address: 'Address 3',
      details: 'Deposit from Rosales',
      type: 'deposit',
      amount: 'G 0.96',
    }
  }
]
```

----
### customRowStyles (func) default: null

The customRowStyles prop allows you to style your list rows based on given params

Params
```jsx
{
  data, // row's dataset
  index, // row's index
  isSelected, // true when row has been clicked
  isStriped, // true if isStriped prop is passed to list
  theme, // provides the theme if you want to use it
}
```

Theme object
```jsx
  {
    header: coolGreyDark,
    primary: {
      background: dark,
      border: dark,
      color: grey,
      count: {
        background: darkBg,
        color: white,
      },
    },
    selected: {
      background: coolGreyDark,
      border: coolGreyDark,
      color: white,
      count: {
        background: dark,
        color: white,
      },
    },
    secondary: {
      background: darkBg,
      border: coolGreyDark,
      color: grey,
      count: {
        background: dark,
        color: white,
      },
    },
    subItem: {
      background: darkBg,
      border: coolGreyDark,
      color: grey,
      icon: coolGreyDark,
    },
    subItemSelected: {
      background: coolGreyDark,
      border: white,
      color: white,
      icon: white,
    },
  },
  ```
Every sub-theme (primary, secondary, etc) within the list needs `background`, `border`, and `color` to be provided. For sub-list items, an `icon` property should be provided. If you plan on showing subItem count via the `showSubItemCount` prop, for top-level list sub-themes, you need to provide a `count` property as demonstrated above.

The customRowStyles function should return a sub-theme.

```jsx
function customRowStyles({
  isSelected,
  theme,
}) {
  if (isSelected) {
    return {
      background: color1,
      border: color2,
      color: color2,
      count: {
        background: color3,
        color: color2,
      },
    }
  }

  // rest of func
}
```
----
### allowDeselect (bool) default: true

> When true, allows a row to be clicked a second time to deselect it.

----
### isStriped (bool) default: false

> When true, displays the list as a striped list

----
### showHeader (bool) default: true

> When false, does not render list headers. Always false for sub-lists

----
### showSubList (bool) default: true

> When true, shows subList. Can be used to control when the subList of a selected row will be displayed.
