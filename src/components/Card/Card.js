import React from 'react';
import Section from './look';

export default function Card({ classNames, color, text, children }) {
  return (
    <Section classNames={classNames} color={color} text={text}>
      {children}
    </Section>
  );
}
