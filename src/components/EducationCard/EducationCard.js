import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Title, Date } from 'components/Card/look';

export default function EducationCard({ period, school, major, type, place }) {
  const { beginDate, endDate } = period;

  return (
    <Card>
      <Title>
        <strong>{school}</strong>
        <Date>
          {beginDate} - {endDate}
        </Date>
      </Title>
      <p>
        {major} - <small>{place}</small>
      </p>

      <small>{type}</small>
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
