import logo from '../assets/images/logo.jpg';
import Buttons from './buttons';
import './nav.css'

const Nav = () => {
    return(
        <div className="header-container">
                <header className='header'>
                    <img src={logo} draggable='false' alt="SweetDreams_Logo" style={{width:'75px', float:'left', margin:'20px'}}/>
                    <h1 className='business_name' style={{fontFamily:'Allura', fontSize:'2.5em', color:'#EB007C'}}> Sweet Dreams </h1>
                </header>
            </div>
    );
};

export default Nav;