/* 
 *  This is the default license template.
 *  
 *  File: header-button.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Button pattern for the PageHeader
 * @author Gabriel Womble
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src';
import { Visible } from '@codeparticle/react-visible';
import styles from './header-button.scss';

const Fallback = ({ label }) => <span>{label}</span>;

Fallback.propTypes = {
  label: PropTypes.string.isRequired,
};

function IconWithLabel({ Icon, label }) {
  return (
    <Fragment>
      <span className={styles.btnContent}>
        <Icon height={12} width={12} />
        {label}
      </span>
    </Fragment>
  );
}

IconWithLabel.propTypes = {
  Icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

function HeaderButton({
  dataSelector,
  Icon,
  label,
  onClick,
  variant,
}) {
  return (
    <Button
      dataSelector={dataSelector}
      onClick={onClick}
      variant={variant}
      size="sm"
      className={styles.headerButton}
    >
      <Visible when={Boolean(Icon)} fallback={<Fallback label={label} />}>
        <IconWithLabel
          label={label}
          Icon={Icon}
        />
      </Visible>
    </Button>
  );
}

HeaderButton.propTypes = {
  dataSelector: PropTypes.string,
  Icon: PropTypes.func,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
    'slate-clear',
    'green',
    'slate',
    'alert',
    'teal',
  ]),
};

HeaderButton.defaultProps = {
  dataSelector: '',
  Icon: null,
  variant: 'primary',
};

export { HeaderButton };
