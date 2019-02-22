import React from 'react';
import Section from './look';

export default function Card({ className, color, text, children }) {
  return (
    <Section className={className} color={color} text={text}>
      {children}
    </Section>
  );
}
