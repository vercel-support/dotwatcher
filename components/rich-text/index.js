'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Container = styled.div`
  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  a:link {
    color: var(--blue);
  }
${tachyons}`;

const RichText = ({ source }) => {
  return (
    <Container>
      { documentToReactComponents(source) }
    </Container>
  )
};

RichText.propTypes = {
  source: PropTypes.object.isRequired
};

export default RichText;
