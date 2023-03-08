import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css'

const About = () => {
    return(
        <div className='about-container'>
            <div className='home'>
                <h2 style={{marginBottom:'0',marginTop:'100px', marginLeft:'250px', fontSize:'3em'}}>nice to meet you</h2>
                <p style={{ marginLeft:'250px'}}>Lorem ipsum dolor sit amet, 
                at cum dico nulla, mediocrem adolescens inciderint has ex,<br />  at duis essent numquam eos. 
                Ea legere animal iudicabit per, et nam dicit pericula <br /> abhorreant. Ne nihil diceret pri. </p>
            </div>
        </div>
    );
}

export default About;