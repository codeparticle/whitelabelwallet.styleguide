import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../theme-provider';
import { ListHeader } from './list-header';
import { ListItem } from './list-item';
import { sortPropertiesToRender } from './utils';

const ListItems = ({
  columnDefs,
  customSort,
  id,
  rowData,
  ...rest
}) => {
  const [selected, setSelected] = useState({});
  const theme = useTheme('list');
  const sort = customSort || sortPropertiesToRender;
  const rows = sort({
    columnDefs,
    rowData,
  });

  return (
    <div className="list-items">
      {rows.map((row, index) => {
        const key = `${id}-${index}`;

        return (
          <ListItem
            columnDefs={columnDefs}
            columns={row.columns}
            data={row.data}
            id={id}
            index={index}
            key={key}
            selected={selected}
            setSelected={setSelected}
            theme={theme}
            {...rest}
          />
        );
      })}
      <style jsx>
        {`
          .list-items {
            overflow-y: scroll;
          }
        `}
      </style>
    </div>
  );
};

const List = ({
  allowDeselect,
  childToRender,
  columnDefs,
  customRowStyles,
  customSort,
  dataSelector,
  id,
  isStriped,
  matchProperty,
  onDeselect,
  onRowClicked,
  rowData,
  showHeader,
  showSubItems,
}) => (
  <>
    <div className={cx('list', id)}>
      <ListHeader
        columnDefs={columnDefs}
        id={id}
        showHeader={showHeader}
      />
      <ListItems
        allowDeselect={allowDeselect}
        childToRender={childToRender}
        columnDefs={columnDefs}
        customRowStyles={customRowStyles}
        customSort={customSort}
        dataSelector={dataSelector}
        id={id}
        isStriped={isStriped}
        matchProperty={matchProperty}
        onDeselect={onDeselect}
        onRowClicked={onRowClicked}
        rowData={rowData}
        showSubItems={showSubItems}
      />
    </div>
    <style jsx>
      {`
        @import 'styles/fonts';
        @import 'styles/layout';

        .list {
          display: flex;
          flex-direction: column;
          max-height: 100%;
          overflow: hidden;
          width: 100%;
        }

        :global(.list-item) {
          border-radius: 6px;
          font-size: $font-size-xs-3;
          margin-top: $space-2;
          padding: $space-4;
        }
      `}
    </style>
  </>
);

List.propTypes = {
  allowDeselect: PropTypes.bool,
  childToRender: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      property: PropTypes.string.isRequired,
      gridColumns: PropTypes.string.isRequired,
      customRenderer: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
      ]),
    }).isRequired,
  ).isRequired,
  customRowStyles: PropTypes.func,
  customSort: PropTypes.func,
  dataSelector: PropTypes.string,
  id: PropTypes.string.isRequired,
  isStriped: PropTypes.bool,
  matchProperty: PropTypes.string,
  onDeselect: PropTypes.func,
  onRowClicked: PropTypes.func.isRequired,
  rowData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  showHeader: PropTypes.bool,
  showSubItems: PropTypes.bool,
};

List.defaultProps = {
  allowDeselect: true,
  childToRender: null,
  customRowStyles: null,
  customSort: null,
  dataSelector: '',
  isStriped: false,
  matchProperty: null,
  onDeselect: null,
  showHeader: true,
  showSubItems: true,
};

export {
  List,
};
