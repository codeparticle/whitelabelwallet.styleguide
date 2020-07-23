/* 
 *  This is the default license template.
 *  
 *  File: list-header.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../theme-provider';

const HeaderItem = ({ column, id, index }) => {
  const className = `list-column-${id}-${index}`;
  const { gridColumns, title } = column;

  return (
    <div className={className}>
      <p className="list-header__text">
        {title}
      </p>
      <style jsx>
        {`
          .${className} {
            grid-column: ${gridColumns};
          }
        `}
      </style>
    </div>
  );
};

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
      <style jsx>
        {`
          :global(.list-header__text) {
            color: ${header};
          }
        `}
      </style>
      <style jsx>
        {`
          @import 'styles/layout';

          .list-header {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            padding: 0 $space-4;
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
