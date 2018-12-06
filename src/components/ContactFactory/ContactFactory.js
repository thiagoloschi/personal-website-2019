import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { IconWrapper } from './look';

export default function ContactFactory({ contactInfo }) {
  const Contacts = contactInfo.map(info => (
    <Contact {...info} key={info.name} />
  ));
  return <IconWrapper>{Contacts}</IconWrapper>;
}

ContactFactory.propTypes = {
  contactInfo: PropTypes.arrayOf(Object),
};
