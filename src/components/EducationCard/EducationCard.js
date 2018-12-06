import React from 'react';
import PropTypes from 'prop-types';
import { Title, Date, ImageWrapper } from 'components/Card/look';
import { School, Major, Badge, ContainedCard, InfoSection } from './look';

export default function EducationCard({
  period,
  school,
  major,
  type,
  place,
  badge,
  url,
}) {
  const { beginDate, endDate } = period;

  return (
    <ContainedCard>
      <ImageWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Badge src={badge} title={school} alt={school} />
      </ImageWrapper>
      <InfoSection>
        <Title>
          <School>{school}</School>
          <Date>
            {beginDate} - {endDate}
          </Date>
        </Title>
        <Major>
          {major} - <small>{place}</small>
        </Major>
        <small>{type}</small>
      </InfoSection>
    </ContainedCard>
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
