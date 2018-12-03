import React from 'react';
import config from 'config';
import BusinessCard from 'components/BusinessCard';
import Experiences from 'components/ExperiencesFactory';

const IndexPage = () => {
  const { name, jobTitle, contacts, experiences } = config;
  return (
    <main>
      <BusinessCard name={name} jobTitle={jobTitle} contacts={contacts} />
      <Experiences experiences={experiences} />
    </main>
  );
};
export default IndexPage;
