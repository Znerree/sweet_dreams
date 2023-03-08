import { Box, Button, Icon, Paper, Typography, makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    return(
        <div className='contact-container'>
            <div className='home'>
                <h1 style={{marginBottom:'0',marginTop:'35px', textAlign:'center', fontSize:'50px',
                color:'white', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Contact Us</h1>
                <div style={{alignItems:'center', textAlign:'center' }}>
                    <h1>
                    <EmailIcon />
                    <Typography>sweetdreams@cake.com</Typography>
                    </h1>
                    <h1>
                    <PhoneIcon />
                    <Typography>09123456789</Typography>
                    </h1>
                    <h1>
                    <FacebookIcon />
                    <Typography>Sweet Dreams</Typography>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;