import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';

export default function ContactFactory({ info }) {
  const Contacts = info.map(({ name, url }) => (
    <Contact name={name} url={url} key={name} />
  ));
  return <Fragment>{Contacts}</Fragment>;
}
