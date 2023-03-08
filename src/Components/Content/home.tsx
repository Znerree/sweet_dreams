import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return(
        <div className='home-container'>
            <div className='home'>
                <h2 style={{marginBottom:'0',marginTop:'100px', marginLeft:'250px', fontSize:'3em'}}>Serving You <br/> Homebaked Treats</h2>
                <p style={{ marginLeft:'250px'}}>Lorem ipsum dolor sit amet, 
                at cum dico nulla, mediocrem adolescens inciderint has ex,<br />  at duis essent numquam eos. 
                Ea legere animal iudicabit per, et nam dicit pericula <br /> abhorreant. Ne nihil diceret pri. </p>
                <Link to='' style={{ textDecoration:'none'}}>
                <h3 style={{color:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', marginLeft:'245px',marginTop:'35px', width:'7%', padding:'20px',
                    borderRadius:'40px'}}> SHOP NOW </h3></Link>
            </div>
        </div>
    );
}

export default Home;