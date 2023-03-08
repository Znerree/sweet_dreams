import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../Content/about';
import Contact from '../Content/contact';
import Home from '../Content/home';
import Shop from '../Content/shop';
import Login from '../LoginSignup/login';
import Signup from '../LoginSignup/signup';
import Buttons from '../nav/buttons';
import Nav from '../nav/nav';

interface LogoutProps {
    onLogout: () => void;
  }

const Layout = ({onLogout}: LogoutProps) => {
  
    return(
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Buttons onLogout={onLogout}/>
    </Router>
    );
};

export default Layout;