import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      {isLoggedIn && (
        <>
          <span>{email}</span>
          <button
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
