import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';

export default function EducationCard({ period, school, major, type, place }) {
  const { beginDate, endDate } = period;

  return (
    <Card>
      <p>
        {beginDate} - {endDate}
      </p>
      <strong>{school}</strong>
      <p>{major}</p>
      <p>{type}</p>
      <p>{place}</p>
    </Card>
  );
}

EducationCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  school: PropTypes.string,
  major: PropTypes.string,
  type: PropTypes.string,
  place: PropTypes.string,
};
