import React from 'react';
import PropTypes from 'prop-types';

const MagnifyingGlassIcon = ({
  fill,
}) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // eslint-disable-next-line max-len
      d="M7.14441 9.5181C6.49455 9.82709 5.76747 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 6.27532 9.52253 7.43912 8.73661 8.32239L12.7071 12.2929C13.0976 12.6834 13.0976 13.3166 12.7071 13.7071C12.3166 14.0976 11.6834 14.0976 11.2929 13.7071L7.29289 9.70711C7.23474 9.64895 7.18524 9.58541 7.14441 9.5181ZM8.5 5C8.5 6.933 6.933 8.5 5 8.5C3.067 8.5 1.5 6.933 1.5 5C1.5 3.067 3.067 1.5 5 1.5C6.933 1.5 8.5 3.067 8.5 5Z"
      fill={fill}
    />
  </svg>
);


MagnifyingGlassIcon.propTypes = {
  fill: PropTypes.string,
};

MagnifyingGlassIcon.defaultProps = {
  fill: '#607998',
};

export default MagnifyingGlassIcon;
