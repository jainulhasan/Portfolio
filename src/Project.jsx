import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
const Project = (props) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        const a=document.getElementById("projects")
        
        a.classList.add("hidden");
        
        setOpen(true);
    };
    
    const handleClose = () => {
        const a=document.getElementById("projects")
        // const d=document.getElementById("popup");
        a.classList.remove("hidden");
        // d.classList.remove("open");
        setOpen(false);
    };

    return (
        <>

            <div className="portfolio-item">
                <h3 className="portfolio-item-title"><b>{props.title}</b></h3>
                <div className="portfolio-item-thumbnail">
                    <img src={props.image} alt="portfolio item thumb" />
                </div>
                <div className='viewbtn'>
                <Link onClick={handleOpen} className="btnn view-project-btn">Veiw project</Link>
                </div>
                {/* <Link onClick={handleOpen } className="btnn view-project-btn">Veiw project</Link> */}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className="portfolio-popup open">
                        <div className="pp-inner">
                            <div className="pp-content">
                                <div className="pp-header">
                                    <button onClick={handleClose} className="btnn pp-close"><HighlightOffRoundedIcon/></button>
                                    <div className="pp-thumbnail">
                                        <img src={props.image} alt="pp-thumbnail" />
                                    </div>
                                    <h3>{props.title}</h3>
                                </div>
                                <div className="pp-body">
                                    <div className="description">
                                        <p>{props.desp}</p>
                                    </div>
                                    <div className="general-info">
                                        
                                            <li><span>{props.created}</span></li>
                                            <li><span>{props.tech}</span></li>
                                            <li><span><a style={{textDecoration:"none",color:"blue"}} href={props.link} target="__blank">{props.github}</a></span></li>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Project;