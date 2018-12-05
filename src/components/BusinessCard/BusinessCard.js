import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import Contacts from 'components/ContactFactory';

export default function BusinessCard({ personalInfo }) {
  const { name, jobTitle, contacts } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <Card>
      <p>
        {firstName}
        <strong> {lastName}</strong>
      </p>
      <p>{jobTitle}</p>
      <Contacts info={contacts} />
    </Card>
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
