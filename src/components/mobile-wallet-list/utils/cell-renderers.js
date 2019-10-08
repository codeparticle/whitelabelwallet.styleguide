/**
 * @fileoverview Mobile Wallet List cell renderers
 * @author Gabriel Womble
 */
import React from 'react';
import { svgs } from 'src';
import { grey, blue } from 'src/styles/colors.scss';

const { SvgChevronLeft, SvgChevronDown } = svgs.icons;

/**
 * This is a curried cellRenderer, useful for mobile lists
 * Usage example:
 * ```js
 * const columnDefs = [
 *  {
 *    title: 'My Column Name,
 *    gridColumns: '1 / 12',
 *    property: 'name',
 *    customRenderer: titleWithSubtitle('name', 'addresses', formatSubtitle),
 *  },
 * ```
 * @returns {func} - CellRenderer
 * @param {string} titleKey - title key param to render the title
 * @param {string} subtitleKey - subtitle key param to render the title
 * @param {func} subtitleFormatter - (optional) If the subtitle key returns an array, this function is used to format the array in a renderable manner
 */
function titleWithSubtitle(titleKey, subtitleKey, subtitleFormatter = () => {}) {
  return ({ data }) => {
    const {
      [titleKey]: title,
      [subtitleKey]: subtitleProperty,
    } = data;

    let subtitle = subtitleProperty;

    if (Array.isArray(subtitleProperty)) {
      subtitle = subtitleProperty.length === 1
        ? subtitleProperty[0].address
        : subtitleFormatter(subtitleProperty);
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

/**
 * This is a curried cellRenderer that renders a chevron indicating a sublist
 * Usage example:
 * ```js
 *  const columnDefs = [
 *    {
 *      title: 'My Column Name,
 *      gridColumns: '1 / 11',
 *      property: 'name',
 *    },
 *    {
 *      title: '',
 *      gridColumns: '12',
 *      property: 'addresses',
 *      customRenderer: childListChevron('addresses'),
 *    },
 * ```
 * @returns {func} - cellRenderer
 * @param {string} propertyKey - propertyKey to determine if childListChevron should render
 */
function childListChevron(propertyKey) {
  return ({ data, isSelected }) => {
    if (!data[propertyKey] || data[propertyKey].length < 2) {
      return null;
    }

    const Svg = isSelected
      ? props => <SvgChevronDown fill={blue} {...props} />
      : props => <SvgChevronLeft fill={grey} {...props} />;

    return (
      <Svg height={12} width={12} />
    );
  };
}

export { childListChevron, titleWithSubtitle };
