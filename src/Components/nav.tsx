import logo from '../images/logo.jpg';

function Nav () {
    return(
        <div>
            <img src={logo} alt="SweetDreams_Logo" style={{width:'80px', float:'left', margin:'20px'}}/>
            <text style={{float:'left', }}>Sweet Dreams</text>
        </div>
    );
}

export default Nav;