import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>This page does not exist.</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}
