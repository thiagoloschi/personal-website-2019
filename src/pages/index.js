import React from 'react';
import config from 'config';
import BusinessCard from 'components/BusinessCard';

const IndexPage = () => {
  const { name, jobTitle, contacts } = config;
  return (
    <main>
      <BusinessCard name={name} jobTitle={jobTitle} contacts={contacts} />
    </main>
  );
};
export default IndexPage;
