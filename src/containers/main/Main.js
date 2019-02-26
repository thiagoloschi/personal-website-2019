import React from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { personalInfo, education, experiences, theme } from 'config';
import BusinessCard from 'components/BusinessCard';
import Education from 'components/EducationFactory';
import Experiences from 'components/ExperiencesFactory';
import { Main, LeftSection, RightSection, FixedContent } from './look';

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
export default withTheme(MainPage);
