/**
 * @fileoverview Mobile Contact List
 * @author Gabriel Womble
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { List, useTheme } from 'src';
import { ContactRenderer } from './utils';

const LIST_ID = 'mobileContactList';
const MOBILE_LIST_HEIGHT = '88px';
const MOBILE_LIST_MARGIN = '1px';

const columnDefs = [
  {
    title: '',
    property: 'name',
    gridColumns: '1 / 12',
    customRenderer: ContactRenderer('name', 'address'),
  },
];

function MobileContactList({ data, dataSelector, onContactClicked }) {
  const [rowData, setRowData] = useState(Array.isArray(data) ? data : []);
  const { primary } = useTheme('mobileList');
  const getStyles = () => primary;

  function onRowClicked(row) {
    onContactClicked(row.address);
  }

  useEffect(() => {
    if (data !== rowData) {
      setRowData(data);
    }
  }, [data]);

  return (
    <>
      <List
        customRowStyles={getStyles}
        columnDefs={columnDefs}
        dataSelector={dataSelector}
        id={LIST_ID}
        onRowClicked={onRowClicked}
        rowData={rowData}
        showHeader={false}
      />
      <style jsx>
        {`
          :global(.${LIST_ID}) {
            :global(.list-item) {
              margin-top: ${MOBILE_LIST_MARGIN} !important;
              height: ${MOBILE_LIST_HEIGHT} !important;
            }
          }

          :global(.titleWithSubtitle > h4) {
            color: ${primary.subtitle} !important;
          }
        `}
      </style>
    </>
  );
}

MobileContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataSelector: PropTypes.string,
  onContactClicked: PropTypes.func.isRequired,
};

MobileContactList.defaultProps = {
  dataSelector: LIST_ID,
};

export { MobileContactList };
