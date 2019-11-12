import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import colors from 'styles/colors.scss';
import {
  cellFormatters,
  List,
  TransferAmount,
} from 'src';
import readme from 'components/list/README.md';
import { ThemeWrapper } from '../utils';
import { alternatingRowMockData } from './mock-data';
import {
  darkBackground,
  lightBackground,
} from '../constants';

const { Text, ChildCount } = cellFormatters;

const preSelectRow = {
  id: 1,
  data: {
    id: 1,
    date: '2015-02-24 08:23:54',
    address: 'Address 3',
    details: 'Deposit from Rosales',
    type: 'deposit',
    amount: 'G 0.96',
  },
};

function CustomChildComponent({ data }) {
  const translations = {
    header: 'Edit Payment',
    memo: 'Edited Memo:',
  };

  const {
    amount,
    details,
  } = data;

  const [memoValue, setMemoValue] = useState(details);
  const [currencyValue, setCurrencyValue] = useState(parseFloat(amount.replace('G', '')));

  const onMemoChange = e => setMemoValue(e.target.value);
  const onCurrencyChange = (e) => {
    setCurrencyValue(e.target.value);

    return currencyValue;
  };

  return (
    <div className="container">
      <TransferAmount
        coinDecimalLimit={-1}
        conversionRate={3.14}
        currencyValue={currencyValue}
        fiatDecimalLimit={2}
        handleCurrencyChange={onCurrencyChange}
        handleMemoChange={onMemoChange}
        memoValue={memoValue}
        translations={translations}
      />
      <style jsx>
        {`
          @import 'styles/layout.scss';

          .container {
            padding: $space-2 0 0;
          }
        `}
      </style>
    </div>
  );
}

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
    const clearSelected = boolean('clearSelected', false);
    const isStripedValue = boolean('isStriped', false);
    const showHeaderValue = boolean('showHeader', true);
    const showSubItemsValue = boolean('showSubItems', true);
    const isSubList = boolean('customRowStyles (subList)', false);
    const usePreselectedValue = boolean('use pre-selected value (preSelect prop)', false);

    function customRowStyles({ isSelected, theme }) {
      if (isSelected) {
        return theme.subItemSelected;
      }

      return theme.subItem;
    }

    const onRowClicked = action(selected => selected);
    const onDeselect = action(deselected => deselected);

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
        childToRender={CustomChildComponent}
        clearSelected={clearSelected}
        columnDefs={columnDefs}
        customRowStyles={isSubList ? customRowStyles : null}
        id="list-demo"
        isStriped={isStripedValue}
        matchProperty="id"
        onDeselect={onDeselect}
        onRowClicked={onRowClicked}
        preSelect={usePreselectedValue ? preSelectRow : null}
        rowData={alternatingRowMockData}
        showHeader={showHeaderValue}
        showSubItems={showSubItemsValue}
      />
    );
  }, {
    backgrounds: [{ ...lightBackground, default: true }, { ...darkBackground }],
  });
