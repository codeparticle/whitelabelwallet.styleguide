/* 
 *  This is the default license template.
 *  
 *  File: mobile-wallet-list.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Reusable mobile wallet list
 * @author Gabriel Womble
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Visible } from '@codeparticle/react-visible';
import { cellFormatters, List, useTheme } from 'src';
import { getRowStyles } from './utils';

const { ChildListChevron, TitleWithSubtitle } = cellFormatters;

const LIST_ID = 'mobileWalletList';
const THEME_KEY = 'mobileList';
const MOBILE_LIST_HEIGHT = '88px';
const MOBILE_LIST_MARGIN = '1px';

const getParentColumnDefs = (subtitleFormatter) => {
  function formatter(addresses) {
    return addresses.length === 1
      ? addresses[0].address
      : subtitleFormatter(addresses);
  }

  return [
    {
      title: '',
      gridColumns: '1 / 11',
      property: 'name',
      customRenderer: TitleWithSubtitle('name', 'addresses', formatter),
    },
    {
      title: '',
      gridColumns: '12',
      property: 'name',
      customRenderer: ChildListChevron('addresses'),
    },
  ];
};

const childColumnDefs = [
  {
    title: '',
    gridColumns: '1 / 12',
    property: 'name',
    customRenderer: TitleWithSubtitle('name', 'address'),
  },
];

function WalletListChild({ data, dataSelector, onAddressClicked }) {
  const { addresses } = data;

  return (
    <Visible when={addresses.length > 1}>
      <MobileWalletList
        columnDefs={childColumnDefs}
        data={addresses}
        dataSelector={`${dataSelector}-child`}
        isChildList
        onAddressClicked={onAddressClicked}
      />
    </Visible>
  );
}

function MobileWalletList({
  data,
  dataSelector,
  isChildList,
  preSelect = null,
  onAddressClicked,
  subtitleFormatter,
}) {
  const [rowData, setRowData] = useState(Array.isArray(data) ? data : []);
  const theme = useTheme(THEME_KEY);
  const columnDefs = isChildList ? childColumnDefs : getParentColumnDefs(subtitleFormatter);
  const listId = isChildList ? `${LIST_ID}-child` : LIST_ID;
  const appliedTheme = isChildList ? theme.secondary : theme.primary;

  const ChildList = props => (
    <WalletListChild {...props} dataSelector={dataSelector} onAddressClicked={onAddressClicked} />
  );

  function onRowClicked(row) {
    if (row.addresses && row.addresses.length === 1) {
      const [{ address }] = row.addresses;

      onAddressClicked(address);
    } else if (row.address) {
      onAddressClicked(row.address);
    }
  }

  useEffect(() => {
    if (data !== rowData) {
      setRowData(data);
    }
  }, [data]);

  return (
    <>
      <List
        childToRender={isChildList ? null : ChildList}
        columnDefs={columnDefs}
        customRowStyles={getRowStyles(theme, isChildList)}
        dataSelector={dataSelector}
        id={listId}
        rowData={rowData}
        preSelect={preSelect}
        matchProperty="id"
        onRowClicked={onRowClicked}
        showHeader={false}
      />
      <style jsx>
        {`
          :global(.${listId}) {
            :global(.list-item) {
              margin-top: ${MOBILE_LIST_MARGIN} !important;
              height: ${MOBILE_LIST_HEIGHT} !important;
            }
          }

          :global(.titleWithSubtitle > h4) {
            color: ${appliedTheme.subtitle} !important;
          }
        `}
      </style>
    </>
  );
}

MobileWalletList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataSelector: PropTypes.string,
  // eslint-disable-next-line
  preSelect: PropTypes.object,
  onAddressClicked: PropTypes.func.isRequired,
};

MobileWalletList.defaultProps = {
  dataSelector: LIST_ID,
  preSelect: null,
};

export { MobileWalletList };
