import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic'

const Autocomplete = dynamic(
  () => import('accessible-autocomplete/react'),
  {
    ssr: false
  }
)
const ResultsFilter = ({ events }) => {
  return <Autocomplete id='autocomplete' source={events} />
}

ResultsFilter.propTypes = {
  events: PropTypes.array.isRequired
};

export default ResultsFilter
