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
      <h2>Please, fill these fields </h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="username" />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoComplete="username" />
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

        <button type="submit">Register</button>
      </form>
    </main>
  );
}
