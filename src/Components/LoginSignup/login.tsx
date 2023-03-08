

import { Alert, Button, Card, CardContent, CardHeader, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Nav from '../nav/nav';

export interface user{
    username:string
    password:string
}

interface LogInProps{
    onLogIn: (username: string, password: string) => void;
}

const Login = (props: LogInProps) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginFailed, setLoginFailed] = useState(false);
    const [user, setUser] = useState<user>()

    function findUser() {
        if (username === "" || password === "") {
          console.log("Empty")
        } else {
          axios.get("http://localhost:8080/sweetdreams/userLogin?username="+username+"&password="+password)
            .then((response) => {
              console.log(response.data)
              setUser(response.data)
              if (response.status === 200) {
                props.onLogIn(username, password)
              } else {
                setLoginFailed(true)
              }
            })
            .catch((error) => {
              console.log(error.message)
              setLoginFailed(true)
            })
        }
      }

    const userData =()=>{
        setUser(user);
    }
        

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', maxWidth:'100%' }}>
            <Nav />
            <Card className='cardcontain'>
                <CardContent>
                    <h1 style={{textAlign:'center', color:'#F5279A'}}>Please log in first</h1>
                <TextField
                    id = "username"
                    label = "Username"
                    type = "username"
                    margin = "normal"
                    sx={{width:'450px'}}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <br/>

                <TextField
                    id = "password"
                    label = "Password"
                    type = "password"
                    margin = "normal"
                    sx={{width:'450px'}}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>

                {loginFailed && (
                    <Alert severity="error" sx={{ marginBottom: '5px' }}>
                        Incorrect username or password. Please try again.
                    </Alert>
                )}
                <br/>

                <text><a href='#' style={{color:'#F5279A',textDecoration:'none'}}>Forgot password?</a></text>
                <br/>

                <Button onClick={findUser} sx={{color:'#F5279A', width:'450px', marginTop:'10px', border:'1.5px solid',marginBottom:'15px'}} >
                    Log In
                </Button>

                <br/>
                <text > Don't have an account? Sign up <a href='/createaccount' style={{color:'#F5279A',textDecoration:'none'}}>here</a></text>

                </CardContent>
            </Card>
            </div>
    );
};
export default Login;