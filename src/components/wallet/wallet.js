/**
 * @file Wallet Component
 * @author Kevin Van Beek
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { VictoryAxis } from 'victory';
import {
  AreaChart,
  Button,
  IconButton,
} from 'src';
import { noPropagation } from 'src/utils';
import styles from './wallet.scss';
import { useTheme } from '../theme-provider';
import { icons } from '../../svgs';

const { SvgCog } = icons;

const WalletFundsContainer = ({
  coinBalance,
  coinSymbol,
  currencySymbol,
  currencyBalance,
  dataSelector,
  onDeposit,
  onWithdraw,
  translations,
}) => {
  const theme = useTheme('wallet');

  return (
    <div
      className={classNames(
        styles['wallet-funds']
      )}
    >
      <div
        className={classNames(
          styles['wallet-funds__coin-balance']
        )}
      >
        <h1 data-selector={`${dataSelector}-coin-balance`}>
          {coinSymbol} {coinBalance}
        </h1>
        <h4
          className="currency-balance"
          data-selector={`${dataSelector}-currency-balance`}
        >
          {currencySymbol} {currencyBalance}
        </h4>
      </div>
      <div
        className={classNames(
          styles['wallet-funds__actions']
        )}
      >
        <Button
          dataSelector={`${dataSelector}-receive`}
          variant={theme.receiveBtnType}
          onClick={noPropagation(onDeposit)}
        >
          {translations.deposit}
        </Button>
        <Button
          dataSelector={`${dataSelector}-withdraw`}
          variant={theme.withdrawBtnType}
          onClick={noPropagation(onWithdraw)}
        >
          {translations.withdraw}
        </Button>
      </div>
      <style jsx>
        {`
          .${styles['wallet-funds__coin-balance']} {
            color: ${theme.textTitle};
          }
  
          .currency-balance {
            color: ${theme.textValue};
          }
        `}
      </style>
    </div>
  );
};

const WalletTitle = ({
  onEdit,
  title,
}) => {
  const theme = useTheme('wallet');

  return (
    <div
      className={classNames(
        styles['wallet__wallet-title']
      )}
    >
      <h3>
        {title}
      </h3>
      <IconButton icon={<SvgCog />} onClick={onEdit} />
      <style jsx>
        {`
          .${styles['wallet__wallet-title']} {
            color: ${theme.textTitle};
          }
        `}
      </style>
    </div>
  );
};

const Wallet = ({
  className,
  title,
  coinData,
  coinBalance,
  coinSymbol,
  currencySymbol,
  currencyBalance,
  dataSelector,
  onDeposit,
  onWithdraw,
  onEdit,
  onClick,
  translations,
  ...rest
}) => {
  const theme = useTheme('wallet');

  const walletClass = classNames(
    styles.wallet,
    'wallet',
    className
  );

  return (
    <div
      {...rest}
      data-selector={dataSelector}
      className={walletClass}
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
    >
      <div
        className={classNames(
          styles['wallet__wallet-graph']
        )}
      >
        <AreaChart
          data={coinData}
          colors={[theme.gradientStart, theme.gradientEnd]}
          padding={0}
        >
          <VictoryAxis style={{ axis: { stroke: 'none' } }} />
        </AreaChart>
      </div>
      <div
        className={classNames(
          styles['wallet__wallet-content']
        )}
      >
        <WalletTitle
          onEdit={noPropagation(onEdit)}
          title={title}
        />
        <WalletFundsContainer
          dataSelector={dataSelector}
          translations={translations}
          coinBalance={coinBalance}
          coinSymbol={coinSymbol}
          currencySymbol={currencySymbol}
          currencyBalance={currencyBalance}
          onDeposit={onDeposit}
          onWithdraw={onWithdraw}
        />
      </div>
      <style jsx>
        {`
          .wallet {
            background: ${theme.bg};
          }
        `}
      </style>
    </div>
  );
};

Wallet.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  coinBalance: PropTypes.number,
  coinData: PropTypes.arrayOf(PropTypes.object),
  currencyBalance: PropTypes.number,
  currencySymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dataSelector: PropTypes.string,
  coinSymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onEdit: PropTypes.func,
  onDeposit: PropTypes.func,
  onClick: PropTypes.func,
  onWithdraw: PropTypes.func,
  translations: PropTypes.shape({
    deposit: PropTypes.string,
    withdraw: PropTypes.string,
  }),
};

Wallet.defaultProps = {
  className: '',
  title: '',
  coinBalance: 0,
  coinData: [],
  currencyBalance: 0,
  coinSymbol: null,
  currencySymbol: null,
  dataSelector: '',
  onEdit: null,
  onDeposit: null,
  onClick: null,
  onWithdraw: null,
  translations: {
    deposit: 'Receive Funds',
    withdraw: 'Withdraw Funds',
  },
};

export { Wallet };
