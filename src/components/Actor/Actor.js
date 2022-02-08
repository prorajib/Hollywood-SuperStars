import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faUser,faUserCheck} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Actor.css';

const Actor = (props) => {
    const {name,age,profession,country,salary,rating,img} = props.actor;
    
    return (
        <div className='actor'>
             <img src={img} alt="" srcset="" />
            <p><strong>Name: </strong>{name}</p>
             <p><strong>Profession: </strong>{profession}</p>
             <p><strong>Age: </strong>{age}</p>
             <p><strong>Country: </strong> {country}</p>
             <p><strong>Salary: </strong>{salary}</p>
             <Rating
             className='rating-color'
             initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
             ></Rating><br /><br />
             <button onClick={()=>props.handleAddToList(props.actor)} className='btn-list'><FontAwesomeIcon icon={faUserCheck} />Add to List</button>

        </div>
    );
};

export default Actor;
