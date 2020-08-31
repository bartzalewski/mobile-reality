import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const HouseDetails = (props) => {
  const { house } = props;

  if (house) {
    return <span>{house.owner}</span>;
  } else {
    return <span>No house</span>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const house = house ? house[id] : null;
  return {
    house: house,
  };
};

export default compose(connect(mapStateToProps))(HouseDetails);
