import React from 'react';
import PropTypes from 'prop-types';

BusinessCard.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  socials: PropTypes.arrayOf,
};

export default function BusinessCard({ name, jobTitle }) {
  const { firstName, lastName } = name;

  return (
    <section>
      <p>
        {firstName}
        <strong> {lastName}</strong>
      </p>
      <p>{jobTitle}</p>
    </section>
  );
}
