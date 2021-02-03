import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import authOperations from '../../redux/auth/auth-operations';

const styles = {
  form: {
    width: '400px',
    padding: '10px',
    border: '1px solid black',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '250px',
    margin: '10px',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target;

    dispatch(
      authOperations.register({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    );
  };

  return (
    <main>
      <h2>Please fill these fields for register</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          name="email"
          autoComplete="email"
          style={{ margin: '10px' }}
        />

        <TextField
          label="Name"
          variant="outlined"
          size="small"
          name="name"
          autoComplete="username"
          style={{ margin: '10px' }}
        />

        <TextField
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          name="password"
          autoComplete="current-password"
          style={{ margin: '10px' }}
        />

        <Button variant="contained" size="small" type="submit">
          Register
        </Button>
      </form>
    </main>
  );
}
