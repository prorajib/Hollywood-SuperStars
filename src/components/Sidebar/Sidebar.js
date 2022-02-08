import React from 'react';
import Sideshow from '../Sideshow/Sideshow';
import './Sidebar.css';

const Sidebar = (props) => {
    const{list,handleremoveActor} = props; 
    let total =0;
    for(const actor of list){
        total+= actor.salary;
    }

     
    return (
    
        <div>
           
            <h3>Actors Added:{list.length}</h3>
            <h3>Selected Actors:</h3>
            <p><strong>Budget:{total} </strong></p>
            {list.map(actor => <Sideshow name={actor.name} id={actor.id} img={actor.img} handleremoveActor={handleremoveActor}></Sideshow>)}
            
        </div>
    );
};

export default Sidebar;