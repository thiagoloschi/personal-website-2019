import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExperienceCard from 'components/ExperienceCard';

export default function ExperiencesFactory({ experiences }) {
  const Experiences = experiences.map(info => (
    <ExperienceCard {...info} key={info.company} />
  ));
  return <Fragment>{Experiences}</Fragment>;
}
