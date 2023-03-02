import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import './nav.css'

function Business () {
    return(
        <div className="container">
            <div className='business'>
                <img src={logo} alt="SweetDreams_Logo" style={{width:'75px', float:'left', margin:'20px'}}/>
                <h1 className='business_name' style={{fontFamily:'Allura', fontSize:'2.5em', color:'#EB007C'}}> Sweet Dreams </h1>
            </div>

            <div className='navigators'>
                <ul>
                    <Link to="/dashboard" style={{color:'#D8323C', textDecoration:'none'}}><li>Home</li></Link>
                    <Link to="/aboutloggedin" style={{color:'white', textDecoration:'none'}}><li>About Us</li></Link>
                    <Link to="/contactusloggedin" style={{color:'white', textDecoration:'none'}}><li>Contact Us</li></Link>
                </ul>
            </div> 
        </div>
    );
}

export default Business;