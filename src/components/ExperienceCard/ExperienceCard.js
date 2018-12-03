import React from 'react';
import PropTypes from 'prop-types';

export default function BusinessCard({
  period,
  jobTitle,
  company,
  description,
  url,
  image,
}) {
  const { beginDate, endDate } = period;

  return (
    <section>
      <p>
        {beginDate} - {endDate}
      </p>
      <strong> {company}</strong>
      <p>{jobTitle}</p>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" />
      <img src={image} title={company} alt={company} />
    </section>
  );
}

BusinessCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};
