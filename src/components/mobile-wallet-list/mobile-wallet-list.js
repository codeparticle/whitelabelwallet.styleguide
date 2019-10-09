/**
 * @fileoverview Reusable mobile wallet list
 * @author Gabriel Womble
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Visible } from '@codeparticle/react-visible';
import { List, useTheme } from 'src';
import { childListChevron, getRowStyles, titleWithSubtitle } from './utils';

const THEME_KEY = 'mobileList';
const MOBILE_LIST_HEIGHT = '88px';
const MOBILE_LIST_MARGIN = '1px';

const getParentColumnDefs = subtitleFormatter => [
  {
    title: '',
    gridColumns: '1 / 11',
    property: 'name',
    customRenderer: titleWithSubtitle('name', 'addresses', subtitleFormatter),
  },
  {
    title: '',
    gridColumns: '12',
    property: 'name',
    customRenderer: childListChevron('addresses'),
  },
];

const childColumnDefs = [
  {
    title: '',
    gridColumns: '1 / 12',
    property: 'name',
    customRenderer: titleWithSubtitle('name', 'address'),
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
  onAddressClicked,
  subtitleFormatter,
}) {
  const [rowData, setRowData] = useState(Array.isArray(data) ? data : []);
  const theme = useTheme(THEME_KEY);
  const columnDefs = isChildList ? childColumnDefs : getParentColumnDefs(subtitleFormatter);
  const listId = isChildList ? `${THEME_KEY}-child` : THEME_KEY;
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
  onAddressClicked: PropTypes.func.isRequired,
};

MobileWalletList.defaultProps = {
  dataSelector: 'mobileWalletList',
};

export { MobileWalletList };
