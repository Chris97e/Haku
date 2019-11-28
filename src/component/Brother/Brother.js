import React from 'react';
import './Brother.css';
import Visual from '../Visual/Visual';
import Add from '../Add/Add';
import { Toolbar, Typography, Button } from '@material-ui/core';
import { fb } from '../../container/utils/firebase';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Brother(props) {

    const [open, setOpen] = React.useState(false);
    const [tittle, setTittle] = React.useState("");
    const [error, setError] = React.useState(null);
    const [docs, setDocs] = React.useState({});
    var dataObject = {};
    
    const handleData = () => {
        let db = fb.firestore();
        db.collection('titles').get().then((querySnapshot) => {
            querySnapshot.forEach((event) => {

                var tempDoc = {
                    title:event._document.proto.fields.title.stringValue,
                    text:event._document.proto.fields.text.stringValue,
                    id:event.id
                };
                
                setDocs(tempDoc);
            });
        }).then( ()=>{
            
            console.log(docs);
        }
           );
    }

    React.useEffect(() => {
        handleData();
    }, []);

    const handleLogout = () => {
        fb.auth().signOut();

    }

    if (props.user === null) {
        return <Redirect to="/" />;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleNewDocument = (event) => {

        if (tittle !== null & tittle !== "") {
            let db = fb.firestore();
            db.collection('titles').add({
                title: tittle,
                text: "Texto Dumie",
            }).then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });

        } else {
            setError(null);
            setError("Really? are you not mature enough for this kind jokes? please write a tittle");

        }

    }

    const handleTittleValue = (event) => {

        setTittle(event.target.value);

    }







    return (
        <div className="menu" >

            <Dialog open={open} className="createname" onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Time to write!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        We hope you have had the most pleasures dreams of your life or maybe not. Anyway, please write a title and carry on!
          </DialogContentText>
                    <TextField onChange={handleTittleValue}

                        margin="dense"
                        id="name"
                        label="Tittle"
                        type="text"
                        name="tittle"
                        fullWidth
                    />
                </DialogContent>
                {error && <Typography className="error animated shake">{error}</Typography>}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleNewDocument} color="primary">
                        Haku
          </Button>
                </DialogActions>
            </Dialog>

            <div className="menuBar animated fadeInDown">

                <Toolbar className="upper">
                    <Typography className="text" variant="h6">
                        Hello there, {<strong>{props.user ? props.user.fullname : "no existe"}</strong>}!
                    </Typography>
                    <Typography className="text" variant="h6">
                        Save your dreams, build your reality
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Log out</Button>
                </Toolbar>

            </div>

            <div className="elementos animated slideInUp delay-2s">
                <Add onClick={handleClickOpen} />
                
                <Visual />
                <Visual />
                <Visual />

            </div>



        </div>);


}
export default Brother;