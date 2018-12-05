import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Image, Description, Date, Company } from './look';

export default function ExperienceCard({
  period,
  jobTitle,
  company,
  location,
  description,
  url,
  image,
  color,
  text,
}) {
  const { beginDate, endDate } = period;

  return (
    <Card color={color} text={text}>
      <Date>
        {beginDate} - {endDate}
      </Date>
      <Company> {company}</Company>
      <p>{jobTitle}</p>
      <p>{location}</p>
      <Description>{description}</Description>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={image} title={company} alt={company} />
      </a>
    </Card>
  );
}

ExperienceCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
