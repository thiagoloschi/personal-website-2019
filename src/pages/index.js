import React from 'react';
import BusinessCard from 'components/BusinessCard';

const IndexPage = () => (
  <main>
    <BusinessCard
      name={{ firstName: 'Thiago', lastName: 'Loschi' }}
      jobTitle="Senior Front End Engineer"
      contacts={[
        {
          name: 'facebook',
          url: 'https://facebook.com/thiagoloschi',
        },
        {
          name: 'github',
          url: 'https://github.com/thiagoloschi',
        },
      ]}
    />
  </main>
);

export default IndexPage;
