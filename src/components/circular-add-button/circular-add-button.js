/* 
 *  This is the default license template.
 *  
 *  File: circular-add-button.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconButton } from 'components/icon-button';
import { icons } from '../../svgs';
import { useTheme } from '../theme-provider';
import styles from './circular-add-button.scss';

const { SvgMobileAdd } = icons;

const CircularAddButton = ({
  className,
  onClick,
  dataSelector,
}) => {
  const theme = useTheme('circularAddButton');
  return (
    <>
      <div className={classNames(styles.blueCircle)}>
        <IconButton
          className={className}
          dataSelector={dataSelector}
          onClick={onClick}
          icon={<SvgMobileAdd height="24px" width="24px" />}
        />
      </div>
      <style jsx>
        {`
          @import 'styles/colors.scss';

          .${styles['blueCircle']} {
            background: ${theme.background};
          }
        `}
      </style>
    </>
  );
};

CircularAddButton.propTypes = {
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  onClick: PropTypes.func,
};

CircularAddButton.defaultProps = {
  className: '',
  dataSelector: '',
  onClick: null,
};

export { CircularAddButton };
