import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NotFound() {
  let location = useLocation();
  return (
    <div className="container is-max-fullscreen has-text-center">
        <h1 className="google-font-ss is-size-3">
          Page<code>{location.pathname}</code> not found.
          <Link to="/"> Click Here</Link> to return to site.
        </h1>
    </div>
  );
}

export default NotFound;
