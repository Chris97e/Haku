import React from 'react';
import './App.css';
import Brother from '../component/Brother/Brother';
import Write from '../component/Write/Write';
import Hello from '../component/Hello/Hello';
import SingIn from '../component/SignIn/SignIn';
import { HashRouter as Router, Route } from 'react-router-dom';
import SignUp from '../component/SignUp/SignUp';
import { fb } from './utils/firebase';




function App() {

  const [ user, setUser ] = React.useState(null);
  
  React.useEffect(() => {
    return fb.auth().onAuthStateChanged(function(user) {
      if(user){
        let db = fb.firestore();
        db.collection('users').doc(user.uid).get()
          .then((doc) => {
            setUser({
              ...doc.data(),
              uid: user.uid,
            });
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>

        <Route exact path="/">
          <Hello />
          <SingIn user={user}></SingIn>
        </Route>

        <Route path="/add">
          <Write></Write>
        </Route>

        <Route path="/sing-up">
          <SignUp user={user}></SignUp>
        </Route>
        
        <Route path="/home">
          <Brother user={user}></Brother>
        </Route>

    </Router>
  );

}




export default App;
