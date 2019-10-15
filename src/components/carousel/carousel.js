import React, { useState, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Hammer from 'hammerjs';
import { useTheme } from '../theme-provider';
import styles from './carousel.scss';

function shiftIndex(arr, index, amt) {
  return (arr.length + index + amt) % arr.length;
}

const Carousel = ({
  className,
  dataSet,
  defaultIndex,
  onChange,
  size,
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const elm = useRef(null);
  const [hammerListener, setHammerListener] = useState(null);
  const theme = useTheme('carousel');

  useLayoutEffect(() => {
    if (elm.current) {
      if (!hammerListener) {
        setHammerListener(new Hammer(elm.current));
      } else {
        const onSwipeLeft = () => {
          setActiveIndex((previousIndex) => {
            const index = shiftIndex(dataSet, previousIndex, 1);
            onChange(dataSet[index]);

            return index;
          });
        };

        const onSwipeRight = () => {
          setActiveIndex((previousIndex) => {
            const index = shiftIndex(dataSet, previousIndex, -1);
            onChange(dataSet[index]);

            return index;
          });
        };

        hammerListener.on('swiperight', onSwipeRight);
        hammerListener.on('swipeleft', onSwipeLeft);

        return () => {
          hammerListener.off('swiperight', onSwipeRight);
          hammerListener.off('swipeleft', onSwipeLeft);
        };
      }
    }

    return () => {};
  }, [hammerListener, dataSet]);

  const onClickHandler = (index) => {
    setActiveIndex(index);
    onChange(dataSet[index]);
  };

  return (
    <>
      <div ref={elm} className={classNames(styles.carousel, className)} {...rest}>
        <ul className={styles.carouselList}>
          {dataSet.map((item, index) => (
            <li>
              <div
                onClick={() => onClickHandler(index)}
                onKeyPress={() => onClickHandler(index)}
                className={index === activeIndex ? 'dot active' : 'dot'}
                key={index}
                role="button"
                tabIndex={index}
              />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          $border-width: 2px;

          .dot {
            height: ${size}px;
            width: ${size}px;
            border: $border-width solid ${theme.borderColor};
          }

          .active {
            background: ${theme.bgActive};
          }
        `}
      </style>
    </>

  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  dataSet: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number,
};

Carousel.defaultProps = {
  className: '',
  defaultIndex: 0,
  size: 10,
};

export { Carousel };
