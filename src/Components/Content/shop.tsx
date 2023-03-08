import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from '@mui/material';
import './home.css'
import bbshark from '../assets/images/bbshark.jpg';
import twotiered from '../assets/images/towtiered.jpg';
import cupcakes from '../assets/images/cupcakes.jpg';
import bento from '../assets/images/bento.jpg';
import minimalist from '../assets/images/minimalist.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
    return(
        <div className='shop-container'>
            <h1 style={{textAlign:'center', fontSize:'45px', color:'white', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}> 
            Create your dream cakes with us </h1>
            <Grid container spacing={30} className='container'>
                <Grid item >
                    <Card className='card'>
                        <CardContent sx={{textAlign:'center'}}>
                            <text style={{fontWeight:'bold'}}>Themed Cakes</text>
                        <CardMedia component='img'
                        image={bbshark} 
                        height='150'/>
                        <text style={{fontSize:'10px', fontWeight:'normal', color:'gray'}}>price starts at</text><br/>
                        <text style={{ fontWeight:'bolder', fontSize:'20px'}}>₱600</text><br/>
                        <Button style={{color:'white', backgroundColor:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', 
                        borderRadius:'20px'}} component={Link} to='https://web.facebook.com/profile.php?id=100063746633503'
                        target="_blank" 
                        rel="noopener noreferrer">
                            Order Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item >
                    <Card className='card'>
                        <CardContent sx={{textAlign:'center'}}>
                            <text style={{fontWeight:'bold'}}>Minimalist Cakes</text>
                        <CardMedia component='img'
                        image={minimalist} 
                        height='150'/>
                        <text style={{fontSize:'10px', fontWeight:'normal', color:'gray'}}>price starts at</text><br/>
                        <text style={{ fontWeight:'bolder', fontSize:'20px'}}>₱500</text><br/>
                        <Button style={{color:'white', backgroundColor:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', 
                        borderRadius:'20px'}} >
                            Order Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item >
                    <Card className='card'>
                        <CardContent sx={{textAlign:'center'}}>
                            <text style={{fontWeight:'bold'}}>Two tiered Cakes</text>
                        <CardMedia component='img'
                        image={twotiered} 
                        height='150'/>
                        <text style={{fontSize:'10px', fontWeight:'normal', color:'gray'}}>price starts at</text><br/>
                        <text style={{ fontWeight:'bolder', fontSize:'20px'}}>₱1500</text><br/>
                        <Button style={{color:'white', backgroundColor:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', 
                        borderRadius:'20px'}} >
                            Order Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item >
                    <Card className='card'>
                        <CardContent sx={{textAlign:'center'}}>
                            <text style={{fontWeight:'bold'}}>Cupcakes</text>
                        <CardMedia component='img'
                        image={cupcakes} 
                        height='150'/>
                        <text style={{fontSize:'10px', fontWeight:'normal', color:'gray'}}>price starts at</text><br/>
                        <text style={{ fontWeight:'bolder', fontSize:'20px'}}>₱250</text><br/>
                        <Button style={{color:'white', backgroundColor:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', 
                        borderRadius:'20px'}} >
                            Order Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className='card'>
                        <CardContent sx={{textAlign:'center'}}>
                            <text style={{fontWeight:'bold'}}>Bento Cakes</text>
                        <CardMedia component='img'
                        image={bento} 
                        height='150'/>
                        <text style={{fontSize:'10px', fontWeight:'normal', color:'gray'}}>price starts at</text><br/>
                        <text style={{ fontWeight:'bolder', fontSize:'20px'}}>₱180</text><br/>
                        <Button style={{color:'white', backgroundColor:'#F5279A', border:'1.5px solid', borderColor:'#F5279A', 
                        borderRadius:'20px'}} >
                            Order Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Shop;