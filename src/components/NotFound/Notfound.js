import React from 'react';
import'./NotaFound.css'
import notfound from '../../images/notfound.jpg'
const Notfound = () => {
   
    return (
        <div className="notfound-img">
            <img src={notfound} alt=""/>
        </div>
    );
};

export default Notfound;
{/* <div style="background-image: url('img_girl.jpg');"></div> */}
{/* <div style={{ backgroundImage: `url({${strBanner})` }}> */}