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
  return (
    <main>
      <h2>Please, logIn to see your contacts</h2>

      <form action="" style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="username" />
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
