import React from 'react';
import PropTypes from 'prop-types';
import Contacts from 'components/ContactFactory';

export default function BusinessCard({ personalInfo }) {
  const { name, jobTitle, contacts } = personalInfo;
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
