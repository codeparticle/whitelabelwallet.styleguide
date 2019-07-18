/**
 * @file Wallet Component
 * @author Kevin Van Beek
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { VictoryAxis } from 'victory';
import { AreaChart } from 'components/area-chart';
import { Button } from 'components/button';
import styles from './wallet.scss';
import { useTheme } from '../theme-provider';
import { icons } from '../../svgs';

const { SvgCog } = icons;

const WalletFundsContainer = ({
  coinBalance,
  coinSymbol,
  currencySymbol,
  currencyBalance,
  onDeposit,
  onWithdraw,
  messages,
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
        <h1>
          {coinSymbol} {coinBalance}
        </h1>
        <h4
          className="currency-balance"
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
          variant={theme.receiveBtnType}
          onClick={onDeposit}
        >
          {messages.deposit}
        </Button>
        <Button
          variant={theme.withdrawBtnType}
          onClick={onWithdraw}
        >
          {messages.withdraw}
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
      <SvgCog />
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
  onDeposit,
  onWithdraw,
  messages,
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
      className={walletClass}
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
          title={title}
        />
        <WalletFundsContainer
          messages={messages}
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
  coinSymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func,
  messages: PropTypes.shape({
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
  onDeposit: null,
  onWithdraw: null,
  messages: {
    deposit: 'Receive Funds',
    withdraw: 'Withdraw Funds',
  },
};

export { Wallet };
