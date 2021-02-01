import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRestricted = routeProps.restricted;
  const shouldRedirect = isLoggedIn && isRestricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={routeProps.redirectTo} /> : children}
    </Route>
  );
}
