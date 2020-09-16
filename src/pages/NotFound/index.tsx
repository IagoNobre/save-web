import React from 'react';
import { Redirect } from 'react-router-dom';

function NotFound() {
  return <Redirect to="/privacy"></Redirect>;
}

export default NotFound;
