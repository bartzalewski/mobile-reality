import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SecondPage() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios.get('http://mr-test-backend.sadek.usermd.net/houses').then((res) => {
      setHouses(res.data.houses);
    });
  }, []);

  const houseItems = houses.map((house) => (
    <Link to={'/house/' + house._id} key={house._id}>
      <h4>{house.owner}</h4>
      <h5>{house.address}</h5>
    </Link>
  ));

  return (
    <div>
      <h1>Houses</h1>
      {houseItems}
    </div>
  );
}

const mapStateToProps = (state) => ({
  houses: state.houses,
});

export default connect(mapStateToProps)(SecondPage);
