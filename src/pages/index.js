import React from 'react';
import config from 'config';
import BusinessCard from 'components/BusinessCard';
import Education from 'components/EducationFactory';
import Experiences from 'components/ExperiencesFactory';

const IndexPage = () => {
  const { personalInfo, education, experiences } = config;
  return (
    <main>
      <BusinessCard personalInfo={personalInfo} />
      <Education education={education} />
      <Experiences experiences={experiences} />
    </main>
  );
};
export default IndexPage;
