import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import widont from '../../utils/widont';
import { Link } from '../../routes';

const Div = styled.div`${tachyons}`;
const H2 = styled.h2`${tachyons}`;
const P = styled.p`${tachyons}`;
const A = styled.a`${tachyons}`;
const Img = styled.img`${tachyons}`;
const GridContainer = styled.div`
  display: grid;
  grid-gap: var(--spacing-large);
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 48em) {
    grid-gap: var(--spacing-extra-large);
  }
${tachyons}`;
const H3 = styled.h3`
  grid-column: 1/3;
${tachyons}`;

const Grid = ({blocks}) => {
  return (
    <GridContainer mh4 mb4 mh5_ns mb5_ns>
      <H3 lh_solid f2 ma0 fw6>Recently on Dotwatcher</H3>
      {
        blocks.map(block => (
          <Link href="/races" as="/races" passHref>
              <A db link near_black hover_blue key={block.sys.id}>
              <Div>
                <Img mw_100 src={`${block.image.fields.file.url}?w=800&h=500&fit=fill&fm=jpg&q=60`} />
              </Div>
              <H2 lh_solid fw6 f5 f3_ns>{block.heading}</H2>
              <P f6 f5_l measure ma0 lh_copy>
                {widont(block.words)}
              </P>
            </A>
          </Link>
        ))
      }
    </GridContainer>
  );
}

Grid.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default Grid;
