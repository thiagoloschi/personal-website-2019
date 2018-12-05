import React from 'react';
import PropTypes from 'prop-types';
import { CenteredCard, Title, JobTitle } from './look';

import Contacts from 'components/ContactFactory';

export default function BusinessCard({ personalInfo }) {
  const { name, jobTitle, contacts } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <CenteredCard>
      <Title>
        {firstName}
        <strong> {lastName}</strong>
      </Title>
      <JobTitle>{jobTitle}</JobTitle>
      <Contacts contactInfo={contacts} />
    </CenteredCard>
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
