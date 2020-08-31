import React from 'react';
import * as reactStore from '../../store/actions/actions';
import { connect } from 'react-redux';

function HouseSummary(props) {
  return <span>{props.owner}</span>;
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHouses: (e) => dispatch(reactStore.fetchHouses(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseSummary);
