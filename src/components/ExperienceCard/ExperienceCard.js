import React from 'react';
import PropTypes from 'prop-types';
import {
  FixedSizeCard,
  Image,
  ImageWrapper,
  Description,
  Date,
  Company,
  Title,
} from './look';

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
    <FixedSizeCard color={color} text={text}>
      <Title>
        <Company>{company}</Company>
        <Date>
          {beginDate} - {endDate}
        </Date>
      </Title>
      <p>{jobTitle}</p>
      <p>{location}</p>
      <Description>{description}</Description>
      <ImageWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Image src={image} title={company} alt={company} />
      </ImageWrapper>
    </FixedSizeCard>
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