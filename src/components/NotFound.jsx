

import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The route <code>{location.pathname}</code> does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
export default NotFound;