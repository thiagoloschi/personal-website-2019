import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export default function Contact({ name, url }) {
  library.add(fab);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fab', name]} />
    </a>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
