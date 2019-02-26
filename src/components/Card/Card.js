import React from 'react';
import Article from './look';
import PropTypes from 'prop-types';

Card.PropTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
  tagName: PropTypes.string,
}

export default function Card({ className, color, text, children, tagName }) {
  return (
    <Article className={className} color={color} text={text} as={tagName}>
      {children}
    </Article>
  );
}
