import React from 'react';
import { personalInfo, education, experiences } from 'config';
import BusinessCard from 'components/BusinessCard';
import Education from 'components/EducationFactory';
import Experiences from 'components/ExperiencesFactory';
import { Main, LeftSection, RightSection, FixedContent } from './sections';

const MainPage = () => {
  return (
    <Main>
      <LeftSection>
        <FixedContent>
          <BusinessCard personalInfo={personalInfo} />
          <Education education={education} />
        </FixedContent>
      </LeftSection>
      <RightSection>
        <Experiences experiences={experiences} />
      </RightSection>
    </Main>
  );
};
export default MainPage;
