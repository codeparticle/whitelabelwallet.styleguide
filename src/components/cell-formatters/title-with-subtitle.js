/**
 * @fileoverview TitleWithSubtitle cellFormatter
 * @author Gabriel Womble
 */
import React from 'react';

/**
 * This is a curried cellRenderer, useful for mobile lists
 * Usage example:
 * ```js
 * const columnDefs = [
 *  {
 *    title: 'My Column Name,
 *    gridColumns: '1 / 12',
 *    property: 'name',
 *    customRenderer: TitleWithSubtitle('name', 'addresses', formatSubtitle),
 *  },
 * ```
 * @returns {func} - CellRenderer
 * @param {string} titleKey - title key param to render the title
 * @param {string} subtitleKey - subtitle key param to render the title
 * @param {func} subtitleFormatter - (optional) If the subtitle key returns an array, this function is used to format the array in a renderable manner
 */
function TitleWithSubtitle(titleKey, subtitleKey, subtitleFormatter = () => {}) {
  return ({ data }) => {
    const {
      [titleKey]: title,
      [subtitleKey]: subtitleProperty,
    } = data;

    let subtitle = subtitleProperty;

    if (Array.isArray(subtitleProperty)) {
      subtitle = subtitleFormatter(subtitleProperty);
    }

    return (
      <div className="titleWithSubtitle">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <style jsx>
          {`
            .titleWithSubtitle {
              display: flex;
              flex-direction: column;
              justify-content: center;
              overflow: hidden;
              width: 100%;
              white-space: nowrap;

              h2,
              h4 {
                margin: 0px;
                overflow: hidden;
                padding: 0px;
                text-overflow: ellipsis;
              }
            }
          `}
        </style>
      </div>
    );
  };
}

export { TitleWithSubtitle };
