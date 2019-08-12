import React from 'react';
import PropTypes from 'prop-types';
import { space4 } from 'styles/layout.scss';
import { useTheme } from '../theme-provider';

const HeaderItem = ({ column, id, index }) => (
  <div className={`list-column-${id}-${index}`}>
    <p className="list-header__text">
      {column.title}
    </p>
  </div>
);

const ListHeader = ({ columnDefs, id, showHeader }) => {
  const { header } = useTheme('list');
  if (!showHeader) {
    return null;
  }

  return (
    <>
      <div className="list-header">
        {columnDefs.map((column, index) => (
          <HeaderItem
            column={column}
            id={id}
            index={index}
            key={column.title}
          />
        ))}
      </div>
      <style jsx="true">
        {`
          :global(.list-header__text) {
            color: ${header};
          }
        `}
      </style>
      <style jsx="true">
        {`
          .list-header {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            padding: 0 ${space4};
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

ListHeader.propTypes = {
  columnDefs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]))).isRequired,
  id: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
};

export { ListHeader };
