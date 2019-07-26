
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
      listColumns.push(row[property] || ' ');
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
