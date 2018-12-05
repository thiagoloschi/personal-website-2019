import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EducationCard from 'components/EducationCard';

export default function EducationFactory({ education }) {
  const Education = education.map(info => (
    <EducationCard {...info} key={info.school} />
  ));
  return <Fragment>{Education}</Fragment>;
}

EducationFactory.propTypes = {
  education: PropTypes.arrayOf(Object),
};
