import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';

export default function ContactFactory({ info }) {
  const Contacts = info.map(info => <Contact {...info} key={info.name} />);
  return <Fragment>{Contacts}</Fragment>;
}
