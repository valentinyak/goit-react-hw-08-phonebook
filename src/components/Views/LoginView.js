import { useDispatch } from 'react-redux';
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

export default function LoginView() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target;

    dispatch(
      authOperations.logIn({ email: email.value, password: password.value }),
    );
  };

  return (
    <main>
      <h2>Please, logIn to see your contacts</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit">LogIn</button>
      </form>
    </main>
  );
}
