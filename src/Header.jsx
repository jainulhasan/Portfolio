import React from 'react';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
const Contact = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row flex-end">
                        <button onClick={handleClick} className="nav-toggle"><MenuIcon /></button>
                    </div>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <div className="nav-inner">
                            <Link to="/" onClick={handleClose} className="nav-item"><MenuItem ><li>Home</li></MenuItem></Link>
                            <Link to="/about" onClick={handleClose} className="nav-item"><MenuItem><li>About Me</li></MenuItem></Link>
                            <Link to="/portfolio" onClick={handleClose} className="nav-item"><MenuItem><li>Portfolio</li></MenuItem></Link>
                            <Link to="/contact" onClick={handleClose} className="nav-item"><MenuItem><li>Contact</li></MenuItem></Link>
                        </div>
                    </Menu>
                </div>
            </header>
        </>
    );
}

export default Contact;