import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as GoTo } from 'react-router-dom';
import { fb } from '../../container/utils/firebase';
import './SignIn.css';
import { Redirect } from 'react-router-dom';


export default function SignIn(props) {

    const [error, setError] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fb.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                var errorMessage = error.message;
                setError(errorMessage);
            });
    }

    console.log(props.user);

    if (props.user) {
        return <Redirect to="/home" />
    }

    return (
        <Container component="main" className="singin animated fadeInUp" maxWidth="xs">
            <CssBaseline />
            <div >

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"

                    >
                        Sign In
                    </Button>
                    {error && <Typography>{error}</Typography>}
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <GoTo to={`/sing-up`}>
                                <Link variant="body2" >
                                    Don't have an account? Sign Up
                                </Link>
                            </GoTo>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}