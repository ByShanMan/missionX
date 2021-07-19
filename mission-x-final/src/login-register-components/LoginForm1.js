import React, {useState} from 'react'
import axios from "axios";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles (theme => ({
    root: { 
        fontWeight: '900',
        paddingLeft: '55px',
        paddingRight: '55px',
        paddingTop: '4px',
        paddingBottom: '4px',
        borderRadius: '8px',
        backgroundColor: '#F4499B',
        color: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
    }
}));

function LoginForm1() {

    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        axios.post('http://localhost:4000/login', {
            email: email,
            password: password,
        })
        .then(response => {
            console.log(response.status)
            console.log("Login Successful")
        })
        .catch(err => {
            console.log("Login Unsuccessful")
            console.log(err)
        })
    }


    return (
        <>
        <div>        
        <input className="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address"></input>
        <br />
        <input className="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>            
        </div> 
        <div>
        <Button onClick={handleLogin} className={classes.root} variant="contained">Log In</Button>             
                                
        </div>
        </>
    )
}

export default LoginForm1;
