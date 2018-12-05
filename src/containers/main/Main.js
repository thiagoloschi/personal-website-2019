import React from 'react';
import config from 'config';
import BusinessCard from 'components/BusinessCard';
import Education from 'components/EducationFactory';
import Experiences from 'components/ExperiencesFactory';
import { Main, LeftSection, RightSection } from './sections';

const MainPage = () => {
  const { personalInfo, education, experiences } = config;
  return (
    <Main>
      <LeftSection>
        <BusinessCard personalInfo={personalInfo} />
        <Education education={education} />
      </LeftSection>
      <RightSection>
        <Experiences experiences={experiences} />
      </RightSection>
    </Main>
  );
};
export default MainPage;
