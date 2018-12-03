import React from 'react';
import PropTypes from 'prop-types';
import Contacts from 'components/ContactFactory';

export default function BusinessCard({ name, jobTitle, contacts }) {
  const { firstName, lastName } = name;

  return (
    <section>
      <p>
        {firstName}
        <strong> {lastName}</strong>
      </p>
      <p>{jobTitle}</p>
      <Contacts info={contacts} />
    </section>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  contacts: PropTypes.array,
};
