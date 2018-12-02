import React from 'react';
import BusinessCard from '../components/BusinessCard';

const IndexPage = () => (
  <main>
    <BusinessCard name={{ firstName: 'Thiago', lastName: 'Loschi' }} jobTitle="Senior Front End Engineer" />
  </main>
);

export default IndexPage;
