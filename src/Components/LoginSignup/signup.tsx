
import logo from '../assets/images/logo.jpg';
import { AlertColor, Button, Card, CardContent, CardHeader, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Nav from '../nav/nav';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertvalue, setAlertValue] = useState("")
    const [severity1, setSeverity] = useState<AlertColor>()

    const params = ({
        "username": username,
        "password": password
    });

    function newUser() {
        if(params.username === "" || params.password === ""){
            setAlertValue("Please fill up the fields correctly!")
            setSeverity("error")
        }

        else {
            axios.post("http://localhost:8080/sweetdreams/postSweetDreams", params,{       
                })
                .then((response)=>{
                    console.log(response.data)
                    setAlertValue("Account Successfully Created!")
                    setSeverity("success")
                    setUsername("")
                    setPassword("")
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    const [open, setOpen] = useState(false);
  

    return (
        <div className='form-container'>
            <Nav/>  
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card>
                <CardContent>
                    <h1 style={{textAlign:'center', color:'#F5279A'}}>Create an account</h1>
                <TextField
                    id = "username"
                    label = "Username"
                    type = "username"
                    sx={{width:'450px'}}
                    margin = "normal"
                    onChange={e => setUsername(e.target.value)} value={username} defaultValue={username}
                />
                <br/>

                <TextField
                    id = "password"
                    label = "Password"
                    type = "password"
                    sx={{width:'450px'}}
                    margin = "normal"
                    onChange={e => setPassword(e.target.value)} value={password} defaultValue={password}
                />
                <br/>

                <text style={{opacity:'50%'}}>Please remember your password</text>
                <br/>
                <Button onClick={newUser} sx={{color:'#F5279A', marginTop:'10px', border:'1.5px solid',marginBottom:'15px', width:'450px'}} fullWidth>
                    Sign Up
                </Button>
                <br/>
                <text > Already have an account? Log in <a href='/' style={{color:'#F5279A',textDecoration:'none'}}>here</a></text>
        
                </CardContent>
            </Card>
            </div>  
            <Outlet/>
            </div>
    );
};
export default Signup;