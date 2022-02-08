import React from 'react';
import './Sideshow.css';

const Sideshow = (props) => {
    const { id,name,img, handleremoveActor} = props;

    return (
        <div className='sideshow'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <button onClick={()=> handleremoveActor(id)}><i class="fas fa-window-close"></i></button>
        </div>
    );
};

export default Sideshow;