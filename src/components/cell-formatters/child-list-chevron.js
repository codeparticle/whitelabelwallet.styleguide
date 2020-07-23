/* 
 *  This is the default license template.
 *  
 *  File: child-list-chevron.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview childListChevron cellFormatter
 * @author Gabriel Womble
 */
import React from 'react';
import { svgs } from 'src';
import { grey, blue } from 'src/styles/colors.scss';

const { SvgChevronLeft, SvgChevronDown } = svgs.icons;

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
 *      customRenderer: ChildListChevron('addresses'),
 *    },
 * ```
 * @returns {func} - cellRenderer
 * @param {string} propertyKey - propertyKey to determine if ChildListChevron should render
 */
function ChildListChevron(propertyKey) {
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

export { ChildListChevron };
