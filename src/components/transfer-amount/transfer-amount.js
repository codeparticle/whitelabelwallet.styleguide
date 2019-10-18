import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Visible } from '@codeparticle/react-visible';
import { TextArea } from '../text-area';
import { useTheme } from '../theme-provider';
import { utils } from '../..';
import { icons } from '../../svgs';
import styles from './transfer-amount.scss';

const {
  SvgCurrencyConversionSymbol,
  SvgCoinSymbol,
} = icons;

const {
  convertCurrency,
  fiatSymbols,
  getFloatRegex,
} = utils;

const defaultFontSize = '64px';
const defaultLength = '150px';

function calculateFontSize(inputLength, inputRef) {
  const width = inputRef.current && inputRef.current.offsetWidth;
  const scrollWidth = inputRef.current && inputRef.current.scrollWidth;
  let fontSize = defaultFontSize;

  if (width <= scrollWidth) {
    if ((width / inputLength * 1.6) < parseFloat(defaultFontSize)) {
      fontSize = `calc((${width}px / ${inputLength}) * 1.6)`;
    }
  }

  return fontSize;
}

function calculateInputWidth(inputVal, fontSize, isFullWidth) {
  const inputLength = inputVal.length;

  if (inputLength < 4) {
    return defaultLength;
  }

  const hasDecimal = inputVal.includes('.');
  const lengthDiff = hasDecimal ? 1.4 : 1;
  const subtractor = isFullWidth ? 0 : lengthDiff;

  return `calc(${fontSize} * ${inputLength - subtractor})`;
}


function renderIconOrTicker({ fill, tickerSymbol }) {
  if (tickerSymbol) {
    return (
      <>
        <h1 className="transfer-amount__ticker">
          {tickerSymbol}
        </h1>
        <style jsx>
          {`
            @import 'styles/fonts.scss';

            .transfer-amount__ticker {
              color: ${fill};
              font-size: $font-size-lg-3;
              margin: 0;
            }
          `}
        </style>
      </>
    );
  }

  return (
    <SvgCoinSymbol
      fill={fill}
      height="48px"
      width="34px"
    />
  );
}

const CurrencyContainer = ({
  coinDecimalLimit,
  conversionRate,
  currencyValue,
  dataSelector,
  fiatDecimalLimit,
  fiatSymbolKey,
  handleCurrencyChange,
  translations,
  theme,
  tickerSymbol,
  width = '50%',
}) => {
  const [value, setValue] = useState(currencyValue);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [inputWidth, setInputWidth] = useState(defaultLength);
  const convertedValue = convertCurrency(value, conversionRate, fiatDecimalLimit);
  const floatRegex = getFloatRegex(coinDecimalLimit);
  const fiatSymbol = fiatSymbols[fiatSymbolKey];
  const inputEl = useRef(null);
  const isFullWidth = width === '100%';

  useEffect(() => {
    setFontSize(calculateFontSize(`${value}`.length, inputEl));
  }, [value]);

  useEffect(() => {
    setInputWidth(calculateInputWidth(`${value}`, fontSize, isFullWidth));
  }, [fontSize, value]);

  useEffect(() => {
    if (currencyValue !== value) {
      setValue(currencyValue);
    }
  }, [currencyValue]);


  function onCurrencyChange(e) {
    if (!floatRegex.test(e.target.value)) {
      return;
    }

    setValue(e.target.value);
    handleCurrencyChange(e);
  }

  return (
    <div className={classNames(styles['transfer-amount__currency'])}>
      <Visible when={!isFullWidth}>
        <h2 className="currency__title" data-selector={`${dataSelector}-header`}>
          {(translations && translations.header) || ''}
        </h2>
      </Visible>
      <div className={classNames(styles['currency__input'])}>
        {renderIconOrTicker({
          fill: theme.icons,
          tickerSymbol,
        })}
        <input
          className={classNames(styles['currency__input-input'])}
          data-selector={`${dataSelector}-currency-input`}
          onChange={onCurrencyChange}
          placeholder="0.00"
          ref={inputEl}
          type="text"
          value={value}
        />
      </div>
      <div
        className={classNames(
          styles['currency__conversion'],
          'currency__conversion'
        )}
      >
        <SvgCurrencyConversionSymbol
          fill={theme.icons}
          height="14px"
          width="14px"
        />
        <h4 data-selector={`${dataSelector}-currency-value`}>
          {`${fiatSymbol}${convertedValue}`}
        </h4>
      </div>
      <style jsx>
        {`
          @import 'styles/fonts.scss';

          .currency__title {
            color: ${theme.textTitle};
          }

          .${styles['transfer-amount__currency']} {
            width: ${width};
          }

          .${styles['currency__input-input']} {
            color: ${theme.currencyAmount};
            width: ${inputWidth};
            font-size: ${fontSize};
          }

          .currency__conversion h4 {
            color: ${theme.conversionAmount};
          }
        `}
      </style>
    </div>
  );
};

const MemoContainer = ({
  dataSelector,
  translations,
  onChange,
  theme,
  value,
}) => (
  <div className={classNames(styles['transfer-amount__memo'])}>
    <TextArea
      dataSelector={`${dataSelector}-memo`}
      customColor={theme.textAreaBg}
      label={translations.memo}
      onChange={onChange}
      rows={8}
      textAreaClassName={styles['transfer-amount__text-area']}
      value={value}
    />
  </div>
);

export const TransferAmount = ({
  coinDecimalLimit,
  conversionRate,
  currencyValue,
  dataSelector,
  fiatDecimalLimit,
  fiatSymbolKey,
  handleCurrencyChange,
  handleMemoChange,
  memoValue,
  translations,
  tickerSymbol,
}) => {
  const theme = useTheme('transferAmount');

  return (
    <div className={classNames(styles['transfer-amount'])}>
      <CurrencyContainer
        coinDecimalLimit={coinDecimalLimit}
        conversionRate={conversionRate}
        currencyValue={currencyValue}
        dataSelector={dataSelector}
        fiatDecimalLimit={fiatDecimalLimit}
        fiatSymbolKey={fiatSymbolKey}
        handleCurrencyChange={handleCurrencyChange}
        translations={translations}
        theme={theme}
        tickerSymbol={tickerSymbol}
      />
      <MemoContainer
        dataSelector={dataSelector}
        translations={translations}
        onChange={handleMemoChange}
        theme={theme}
        value={memoValue}
      />
      <style jsx>
        {`
          .${styles['transfer-amount']} {
            background: ${theme.bg};
          }
        `}
      </style>
    </div>
  );
};

TransferAmount.propTypes = {
  coinDecimalLimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  conversionRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currencyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataSelector: PropTypes.string,
  fiatDecimalLimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fiatSymbolKey: PropTypes.string,
  handleCurrencyChange: PropTypes.func.isRequired,
  handleMemoChange: PropTypes.func.isRequired,
  memoValue: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    header: PropTypes.string.isRequired,
    memo: PropTypes.string.isRequired,
  }),
  tickerSymbol: PropTypes.string,
};

TransferAmount.defaultProps = {
  coinDecimalLimit: null,
  currencyValue: '',
  dataSelector: '',
  fiatDecimalLimit: 2,
  fiatSymbolKey: 'dollarSign',
  translations: {
    header: 'Transfer Amount',
    memo: 'Memo:',
  },
  tickerSymbol: null,
};

export const CurrencyAmount = ({
  coinDecimalLimit,
  conversionRate,
  currencyValue,
  dataSelector,
  fiatDecimalLimit,
  fiatSymbolKey,
  handleCurrencyChange,
  tickerSymbol,
}) => {
  const theme = useTheme('transferAmount');
  const width = '100%';

  return (
    <div className="currency-container-wrapper">
      <CurrencyContainer
        coinDecimalLimit={coinDecimalLimit}
        conversionRate={conversionRate}
        currencyValue={currencyValue}
        dataSelector={dataSelector}
        fiatDecimalLimit={fiatDecimalLimit}
        fiatSymbolKey={fiatSymbolKey}
        handleCurrencyChange={handleCurrencyChange}
        theme={theme}
        tickerSymbol={tickerSymbol}
        width={width}
      />
      <style jsx>
        {`
          @import 'styles/layout';

          .currency-container-wrapper {
            padding-bottom: $spacing-xxl;
            width: ${width};
          }
        `}
      </style>
    </div>
  );
};


CurrencyAmount.propTypes = {
  coinDecimalLimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  conversionRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currencyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataSelector: PropTypes.string,
  fiatDecimalLimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fiatSymbolKey: PropTypes.string,
  handleCurrencyChange: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }),
  tickerSymbol: PropTypes.string,
};

CurrencyAmount.defaultProps = {
  coinDecimalLimit: null,
  currencyValue: '',
  dataSelector: '',
  fiatDecimalLimit: 2,
  fiatSymbolKey: 'dollarSign',
  translations: {
    header: 'Transfer Amount',
  },
  tickerSymbol: null,
};
