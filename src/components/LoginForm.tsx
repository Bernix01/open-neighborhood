import React, { useContext, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { useMutation, ClientContext } from 'graphql-hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

const LOGIN_MUTATION = `mutation LoginUser ($name: String!, $password: String!) {
    tokenAuth(username: $name, password: $password) {
        token
        payload
        refreshExpiresIn
    }
  }`;
function LoginForm() {
  const client = useContext(ClientContext);
  const classes = useStyles();
  const [loginUserMutation] = useMutation(LOGIN_MUTATION);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (username && password) {
      submit(e);
    } else {
      validar(e);
    }
  }

  async function submit(e: React.FormEvent) {
    // eslint-disable-next-line no-console
    e.preventDefault();
    const { data, error } = await loginUserMutation({
      variables: { username, password },
    });
    if (error) {
      // mensaje de error
    } else {
      const { token } = data.loginUser;
      client.setHeader('Authorization', `Bearer ${token}`);
      // your code to handle token in browser and login redirection
    }
  }

  function validar(e: React.FormEvent) {
    e.preventDefault();
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Login App" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
}

export default LoginForm;
