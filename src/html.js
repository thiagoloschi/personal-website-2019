import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { personalInfo } from './config';
const { firstName, lastName } = personalInfo.name;

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <title>
            {firstName} {lastName}
          </title>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.75, maximum-scale=1"
          />
          {this.props.headComponents}
        </head>
        <body
          style={{ margin: 0, overflow: 'hidden' }}
          {...this.props.bodyAttributes}
        >
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
