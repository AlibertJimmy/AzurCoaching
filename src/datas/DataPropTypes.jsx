// Import React Libraries
import PropTypes from 'prop-types';

export const serviceListPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired
});

export const serviceDetailType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      li: PropTypes.string.isRequired
    })
  )
});

export const servicesListDetailPropTypes = PropTypes.arrayOf(serviceDetailType);

export const homeTitlesPropTypes = PropTypes.arrayOf(PropTypes.string);
