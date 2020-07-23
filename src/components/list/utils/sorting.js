/* 
 *  This is the default license template.
 *  
 *  File: sorting.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import _ from 'lodash';
/**
* Single level list sort fn
* @returns {array} listItems - an array of objects to be rendered in each row
* @param {Object} - {
*  @param {array} columnDefs - defines properties to be rendered
*  @param {Object} rowData - data object to be sorted through
* }
*/
function sortPropertiesToRender({
  columnDefs,
  rowData,
}) {
  const listItems = [];

  rowData.forEach((row) => {
    const listColumns = [];

    columnDefs.forEach(({ property }) => {
      const value = _.isNil(row[property])
        ? ''
        : row[property];

      listColumns.push(value);
    });

    const propertiesToRender = {
      columns: listColumns,
      data: row,
    };

    listItems.push(propertiesToRender);
  });


  return listItems;
}

export {
  sortPropertiesToRender,
};
