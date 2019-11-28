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
import './SignUp.css';
import { fb } from '../../container/utils/firebase';
import { Redirect } from 'react-router-dom';




export default function SignUp(props) {

  const [ error, setError ] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.passwordU.value;
    const passwordConfirmation = event.target.passwordConfirmation.value;
    const fullname = event.target.firstName.value +" "+ event.target.lastName.value;
    console.log(password);
    console.log(passwordConfirmation)

    if(password === passwordConfirmation){
      console.log("entre");
      setError(null);
      fb.auth().createUserWithEmailAndPassword(email, password)
        .then(function(info){
          var user = fb.auth().currentUser;
          let db = fb.firestore();
          db.collection('users').doc(user.uid).set({
            fullname: fullname,
            email: email,
          });
        })
        .catch(function(error) {
          var errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError('Wrong password confirmation.');
    }
  }

  if(props.user) {
    return <Redirect to="/home" />
  }

  return (
    <Container className="singcontainer animated fadeInUp" component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Typography component="h1" className="tittleh5" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordU"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirmation"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {error && <Typography className="error animated shake">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
          <GoTo to={"/home"}>
            <Grid item>
            
              <Link  variant="body2" onClick={()=>{console.log("rico")}}>
                Already have an account? Sign in
              </Link>
              
            </Grid>
            </GoTo>
          </Grid>
        </form>
      </div>
    </Container>
  );
}