import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getUserEmail } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div>
      <span>{`You are logged in as ${email} `}</span>

      <Button
        variant="contained"
        size="small"
        style={{ marginRight: '15px' }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
