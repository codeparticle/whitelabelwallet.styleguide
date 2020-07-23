/* 
 *  This is the default license template.
 *  
 *  File: process-svgs.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

const Case = require('case');
const fs = require('fs');

const svgsDir = './src/svgs';
const outDir = `${svgsDir}/generated`;

// Extract a prop from the svg text such as convert `fill='#123123'` to `fill={fill}`
const parsePropFromSvg = (svg, propName) => {
  let value = '';
  const parsedSvg = svg.replace(new RegExp(`${propName}=('|")[^('|")]*('|")`, 'g'), (string) => {
    if (!string.includes('none')) {
      value = string.replace(/'|"/g, '"').split('"')[1].split('"')[0];
    } else if (!value) {
      value = 'none';
    }

    return `${propName}={${propName}}`;
  });

  return {
    svg: parsedSvg,
    value,
  };
};

// Gets a react component
const getImageComponent = (name, svg) => {
  const hasFill = svg.includes('fill=');
  const hasHeight = svg.includes('height=');
  const hasStroke = svg.includes('stroke=');
  const hasWidth = svg.includes('width=');

  // Add className, remove new lines, and add white space before closing bracket
  const idsFound = [];
  let parsedSvg = svg
    .replace('<svg', '<svg className={className}')
    .replace(/\n/g, '').replace(/\/>/g, ' />')
    .replace(/xmlns[^"]*"[^"]*"/gi, '')
    .replace(/xlink:href/gi, 'xlinkHref')
    .replace(/id="[^"]*"/gi, (match) => {
      const id = match.split('"')[1];

      idsFound.push(id);

      return `id="${name}-${id}"`;
    });

  idsFound.forEach((id) => {
    parsedSvg = parsedSvg.replace(new RegExp(`#${id}`, 'gi'), `#${name}-${id}`);
  });

  // camelCase unknown props
  parsedSvg = parsedSvg.replace(/[^\s]+-[^\s]+=('|")[^('|")]+('|")/g, (prop) => {
    const [propName, propValue] = prop.split('=');

    return `${Case.camel(propName)}=${propValue}`;
  });

  const fillResults = parsePropFromSvg(parsedSvg, 'fill');
  const strokeResults = parsePropFromSvg(fillResults.svg, 'stroke');
  const heightResults = parsePropFromSvg(strokeResults.svg, 'height');
  const widthResults = parsePropFromSvg(heightResults.svg, 'width');
  parsedSvg = widthResults.svg;

  const getPropDefinition = (condition, propName) => (condition ? `\n  ${propName},` : '');
  const getPropType = (condition, propName, propType) => (condition ? `\n  ${propName}: ${propType},` : '');
  const getDefaultProp = (condition, propName, propValue) => (
    condition ? `\n  ${propName}: ${JSON.stringify(propValue).replace(/"/g, '\'')},` : ''
  );

  return `\
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ${name} = ({
  className,\
${getPropDefinition(hasFill, 'fill')}\
${getPropDefinition(hasHeight, 'height')}\
${getPropDefinition(hasStroke, 'stroke')}\
${getPropDefinition(hasWidth, 'width')}
}) => (
  ${parsedSvg}
);

${name}.propTypes = {
  className: PropTypes.string,\
${getPropType(hasFill, 'fill', 'PropTypes.string')}\
${getPropType(hasHeight, 'height', 'PropTypes.oneOfType([PropTypes.string, PropTypes.number])')}\
${getPropType(hasStroke, 'stroke', 'PropTypes.string')}\
${getPropType(hasWidth, 'width', 'PropTypes.oneOfType([PropTypes.string, PropTypes.number])')}
};

${name}.defaultProps = {
  className: '',\
${getDefaultProp(hasFill, 'fill', fillResults.value)}\
${getDefaultProp(hasHeight, 'height', heightResults.value)}\
${getDefaultProp(hasStroke, 'stroke', strokeResults.value)}\
${getDefaultProp(hasWidth, 'width', widthResults.value)}
};

export { ${name} };
`;
};

// Deletes generated files from not existing svgs
const deleteExtraComponents = (existingFiles) => {
  const filesInGenerated = fs.readdirSync(outDir);

  filesInGenerated.forEach((fileGenerated) => {
    if (fileGenerated !== 'index.js' && !existingFiles.includes(fileGenerated)) {
      fs.unlinkSync(`${outDir}/${fileGenerated}`);
    }
  });
};

module.exports = {
  processSvgs: () => {
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    fs.readdir(svgsDir, (err, items) => {
      const allCompiledFileNames = [];
      const listOfItems = [];
      let indexJs = '';

      items.forEach((item) => {
        const dirPath = `${svgsDir}/${item}`;

        if (item !== 'generated' && fs.statSync(dirPath).isDirectory() && item !== outDir.replace(/(\.|\/)/g, '')) {
          const svgs = fs.readdirSync(dirPath);
          let itemExports = `const ${item} = {`;

          svgs.forEach((image) => {
            if (image.includes('.svg')) {
              const svg = fs.readFileSync(`${dirPath}/${image}`, { encoding: 'utf8' });
              const fileName = image.substr(0, image.indexOf('.svg'));
              const jsFileName = image.replace('.svg', '.js');
              const name = `S${Case.camel(`vg.${fileName}`)}`;
              const outFilePath = `${outDir}/${jsFileName}`;
              const imageComponent = getImageComponent(name, svg);

              if (!fs.existsSync(outFilePath) || imageComponent !== fs.readFileSync(outFilePath, { encoding: 'utf8' })) {
                fs.writeFileSync(outFilePath, imageComponent);
              }

              itemExports += `\n  ${name}: require('./${jsFileName}').${name},`;

              allCompiledFileNames.push(jsFileName);
            }
          });

          itemExports += '\n};\n\n';
          indexJs += `${itemExports}`;
          listOfItems.push(item);
        }
      });

      indexJs += 'export {';

      listOfItems.forEach((item) => {
        indexJs += `\n  ${item},`;
      });

      indexJs += '\n};\n';

      const outFilePath = `${outDir}/index.js`;

      if (!fs.existsSync(outFilePath) || indexJs !== fs.readFileSync(outFilePath, { encoding: 'utf8' })) {
        fs.writeFileSync(outFilePath, indexJs);
      }

      deleteExtraComponents(allCompiledFileNames);
    });
  },
};

if (process.argv[2] === '--run') {
  module.exports.processSvgs();
}
