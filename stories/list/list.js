import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeWrapper } from '../utils';
import { alternatingRowMockData } from './mock-data';
import {
  cellFormatters,
  List,
} from '../../src';
import colors from '../../src/styles/colors.scss';
import readme from '../../src/components/list/README.md';
import {
  darkBackground,
  lightBackground,
} from '../constants';

const { Text, ChildCount } = cellFormatters;

const ListDemo = ({ defaultToDark = false, ...props }) => (
  <div style={{ padding: '25px 10%' }}>
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <List
          {...props}
        />
      }
    />
  </div>
);

storiesOf('List', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => {
    const allowDeselectValue = boolean('allowDeselect', true);
    const isStripedValue = boolean('isStriped', false);
    const showHeaderValue = boolean('showHeader', true);
    const showSubItemsValue = boolean('showSubItems', true);

    const onRowClicked = action(selected => selected);

    function withCountRenderer({ cellStyles, data, column }) {
      const childCount = data.related && data.related.length;

      return (
        <>
          <Text value={column} />
          <ChildCount
            childCount={childCount}
            style={cellStyles.childCount}
          />
        </>
      );
    }

    function customAmountRenderer({ data, column }) {
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
        customRenderer: withCountRenderer,
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
      <ListDemo
        allowDeselect={allowDeselectValue}
        columnDefs={columnDefs}
        id="list-demo"
        isStriped={isStripedValue}
        onRowClicked={onRowClicked}
        rowData={alternatingRowMockData}
        showHeader={showHeaderValue}
        showSubItems={showSubItemsValue}
      />
    );
  }, {
    backgrounds: [{ ...lightBackground, default: true }, { ...darkBackground }],
  });
