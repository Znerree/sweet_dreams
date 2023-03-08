
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';

interface ButtonsProps {
    onLogout: () => void;
  }

const Buttons = ({ onLogout}: ButtonsProps) => {
    const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

    return(


        <div className="buttons">
            <Button component={Link} to='/' style={{ height:'60px', color:'#797878', textDecoration:'none',margin:'10px', }}>
                <h3 className={selected === 0 ? 'selected' : ''} onClick={() => handleSelect(0)}> Home </h3></Button>
            <Button component={Link} to='/shop' style={{height:'60px', color:'#797878', textDecoration:'none',margin:'10px' }}>
                <h3 className={selected === 1 ? 'selected' : ''} onClick={() => handleSelect(1)}> Shop </h3></Button>
            <Button component={Link} to='/about' style={{height:'60px', color:'#797878', textDecoration:'none',margin:'10px' }}>
                <h3 className={selected === 2 ? 'selected' : ''} onClick={() => handleSelect(2)}> About Us </h3></Button>
            <Button component={Link} to='/contact' style={{height:'60px', color:'#797878', textDecoration:'none',margin:'10px' }}>
                <h3 className={selected === 3 ? 'selected' : ''} onClick={() => handleSelect(3)}> Contact Us </h3></Button>
            <Button onClick={onLogout} component={Link} to='/' style={{marginBottom:'0px', marginLeft:'10px', fontSize:'10px', textDecoration:'none', color:'#F5279A'}}>
                Logout</Button>
        </div>
    );
};

export default Buttons;