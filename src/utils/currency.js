/* 
 *  This is the default license template.
 *  
 *  File: currency.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Utilities to facilitate operations with currencies and numbers;
 * @author Gabriel Womble
 * TODO: INCLUDE FILE AS WELL AS ANY OTHER HELPERS IN DOCUMENTATION WEEK TASKS
 */

/**
 * @returns {number} The converted amount
 * @param {number} val - The amount to be converted
 * @param {number} rate - The rate at which the val is converted
 * @param {number} decimalLimit - The number of decimal points returned
 */
function convertCurrency(val, rate, decimalLimit) {
  const convertedValue = parseFloat(val || 0) * rate;
  const limit = decimalLimit >= 0 ? decimalLimit : 2;

  return Number.isNaN(convertedValue) ? '0.00' : convertedValue.toFixed(limit);
}

/**
 * @returns {RegExp} floatRegex - a regex to validate a floating point number
 * @param {number} limit - Limits the amount of decimal places a user can input
 */
function getFloatRegex(limit) {
  const decimalMatchLimit = limit >= 0 ? `{0,${limit}}` : '*';

  return new RegExp(`^\\d*\\.?\\d${decimalMatchLimit}$`, 'g');
}

function getNumberRegex() {
  return new RegExp('^[0-9]*$');
}

/**
 * This list references the symbols on this page:
 * https://www.toptal.com/designers/htmlarrows/currency/
 * The below list matches order and naming (to camelCase)
 * for ease of reference
 */
const fiatSymbols = {
  dollarSign: '\u0024',
  centSign: '\u00A2',
  poundSign: '\u00A3',
  euroSign: '\u20AC',
  yenSign: '\u00A5',
  indianRupeeSign: '\u20B9',
  rubleSign: '\u20BD',
  yuanCharacterChina: '\u5143',
  currencySign: '\u00A4',
  euroCurrencySign: '\u20A0',
  colonSign: '\u20A1',
  cruzeiroSign: '\u20A2',
  frenchFrancSign: '\u20A3',
  liraSign: '\u20A4',
  millSign: '\u20A5',
  nairaSign: '\u20A6',
  pesetaSign: '\u20A7',
  rupeeSign: '\u20A8',
  wonSign: '\u20A9',
  newSheqelSign: '\u20AA',
  dongSign: '\u20AB',
  kipSign: '\u20AD',
  tugrikSign: '\u20AE',
  drachmaSign: '\u20AF',
  germanPennySymbol: '\u20B0',
  pesoSign: '\u20B1',
  guaraniSign: '\u20B2',
  australSign: '\u20B3',
  hryvniaSign: '\u20B4',
  cediSign: '\u20B5',
  livreTournoisSign: '\u20B6',
  tengeSign: '\u20B8',
  turkishLiraSign: '\u20BA',
  manatSign: '\u20BC',
  bengaliRupeeMark: '\u09F2',
  bengaliRupeeSign: '\u09F3',
  gujaratiRupeeSign: '\u0AF1',
  tamilRupeeSign: '\u0BF9',
  thaiCurrencySymbolBaht: '\u0E3F',
  khmerCurrencySymbolRiel: '\u17DB',
  squareYuan: '\u3350',
  yenCharacter: '\u5186',
  yenYuanCharacterV1: '\u5706',
  yenYuanCharacterV2: '\u570E',
  yuanCharacterHongKongTaiwan: '\u5713',
  yenYuanCharacterV3: '\u571C',
  wonCharacter: '\uC6D0',
  rialSign: '\uFDFC',
  fullWidthDollarSign: '\uFF04',
  fullWidthCentSign: '\uFFE0',
  fullWidthPoundSign: '\uFFE1',
  fullWidthYenSign: '\uFFE5',
  fullWidthWonSign: '\uFFE6',
};

export {
  convertCurrency,
  fiatSymbols,
  getFloatRegex,
  getNumberRegex,
};
