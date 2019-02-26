import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { IconsList, Icon } from './look';

export default function ContactFactory({ contactInfo }) {
  const Contacts = contactInfo.map(info => (
    <li>
      <Contact {...info} key={info.name} />
    </li>
  ));
  return <IconsList>{Contacts}</IconsList>;
}

ContactFactory.propTypes = {
  contactInfo: PropTypes.arrayOf(Object),
};
