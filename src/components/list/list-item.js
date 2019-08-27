import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cellFormatters, getRowStyles } from './utils';

const { Text } = cellFormatters;

function CellRenderer({
  cellStyles,
  colIndex,
  column,
  customRenderer: CustomRenderer,
  data,
  gridColumns,
  id,
  index,
}) {
  const gridClass = `list-column-${id}-${colIndex}`;

  function renderCell() {
    if (CustomRenderer) {
      return (
        <CustomRenderer
          cellStyles={cellStyles}
          colIndex={colIndex}
          column={column}
          data={data}
          index={index}
        />
      );
    }

    return <Text value={column} />;
  }

  return (
    <div className={gridClass}>
      {renderCell()}
      <style jsx>
        {`
          :global(.${gridClass}) {
            align-items: center;
            display: flex;
            grid-column: ${gridColumns};
          }
        `}
      </style>
    </div>
  );
}

function renderChild({
  childToRender: ChildComponent,
  data,
  isSelected,
  showSubItems,
}) {
  if (data && ChildComponent && isSelected) {
    if (showSubItems) {
      return <ChildComponent data={data} />;
    }
  }

  return null;
}

export function ListItem({
  allowDeselect,
  childToRender,
  columnDefs,
  columns,
  customRowStyles,
  data,
  dataSelector,
  id,
  index,
  isStriped,
  onRowClicked,
  selected,
  setSelected,
  showSubItems,
  theme,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const selectedCondition = index === selected.index;

  useEffect(() => {
    setIsSelected(selectedCondition);
  }, [selected]);

  const styleParams = {
    data,
    index,
    isSelected,
    isStriped,
    theme,
  };

  const rowStyle = customRowStyles
    ? customRowStyles(styleParams)
    : getRowStyles(styleParams);

  const {
    background,
    border,
    color,
    count = null,
    icon = null,
  } = rowStyle;

  const cellStyles = {
    childCount: count,
    childIcon: icon,
  };

  function handleSelection() {
    if (allowDeselect && isSelected) {
      setSelected({});

      return;
    }

    const selectedValue = {
      data,
      index,
    };

    setSelected(selectedValue);
    onRowClicked(selectedValue.data);
  }

  return (
    <>
      <div
        className="list-item"
        data-selector={`${dataSelector}-item`}
        onClick={handleSelection}
        onKeyPress={handleSelection}
        role="row"
        tabIndex={index + 1}
      >
        {columns.map((column, colIndex) => {
          const { customRenderer, gridColumns } = columnDefs[colIndex];

          return (
            <CellRenderer
              colIndex={colIndex}
              column={column}
              cellStyles={cellStyles}
              customRenderer={customRenderer}
              data={data}
              gridColumns={gridColumns}
              id={id}
              index={index}
              key={`${index}-${colIndex}`}
            />
          );
        })}
        <style jsx>
          {`
            .list-item {
              background: ${background};
              border: 1px solid ${border};
              color: ${color};
              display: grid;
              grid-template-columns: repeat(12, 1fr);
            }
          `}
        </style>
      </div>
      {renderChild({
        childToRender,
        data,
        isSelected,
        showSubItems,
      })}
    </>
  );
}


ListItem.propTypes = {
  allowDeselect: PropTypes.bool,
  childToRender: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
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
  columns: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
  customRowStyles: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  dataSelector: PropTypes.string,
  id: PropTypes.string.isRequired,
  isStriped: PropTypes.bool,
  onRowClicked: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    index: PropTypes.number,
    data: PropTypes.object,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  showSubItems: PropTypes.bool,
  index: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
};

ListItem.defaultProps = {
  allowDeselect: true,
  childToRender: null,
  customRowStyles: null,
  dataSelector: '',
  isStriped: false,
  showSubItems: true,
};
