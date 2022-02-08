import React, { useEffect, useState } from 'react';
import Actor from '../../components/Actor/Actor';
import Sidebar from '../../components/Sidebar/Sidebar';
import { addToDb, deleteFromDb, getStoredList } from '../../utilities/fakedb';
import './Actors.css';

const Actors = () => {
    const [actors, setActors] = useState([]);
    const [list , setList] = useState([]);
    const [displayActors, setDisplayActors] = useState([]);
    useEffect(()=>{
        fetch('./actors.JSON')
        .then(res=> res.json())
        .then(data =>{
             setActors(data);
             setDisplayActors(data);
        
        });
    },[]);


    useEffect(()=>{
        if(actors.length) { 
           const savedList = getStoredList();
           const storedList = [];
           for(const id in savedList){
              const addedActor = actors.find(actor => actor.id == id);
              if(addedActor){
                 const quantity = savedList[id];
                 addedActor.quantity = quantity;
                 storedList.push(addedActor);
           }
           
        }
        setList(storedList);
    }

    },[actors])


    const handleAddToList = (actor) =>{
        const newlist = [...list];
        const exist = newlist.includes(actor);
        if(!exist){
           const vnewlist =[...list, actor]; 
           setList(vnewlist);
           addToDb(actor.id);
        }else{
            setList(newlist)
        }
       
    }

    const handleremoveActor = (id)=>{
        
       deleteFromDb(id);
        if(actors.length) { 
            const savedList = getStoredList();
            
            const storedList = [];
            for(const id in savedList){
                console.log(id);
               const addedActor = actors.find(actor => actor.id == id);
               if(addedActor){
                  const quantity = savedList[id];
                  addedActor.quantity = quantity;
                  storedList.push(addedActor);
            }
            
         }
         console.log(storedList);
         setList(storedList);
     }
    }

    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedActors = actors.filter(actor => actor.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayActors(matchedActors);
    }
    return (
        
       <div> 
             <div className='search-box'>
                <input onChange={handleSearch} type="text"  placeholder='Search your Favourite Actor'/>
            </div>
          <div className='main-section'>
             <div className='actors-list'>
                {           
                   displayActors.map(actor => <Actor key={actor.name} actor={actor}
                   handleAddToList ={handleAddToList}
                   ></Actor> )

                }
            </div>
            <div className='sidebar'>
                 <Sidebar list={list} handleremoveActor={handleremoveActor}></Sidebar>
            </div>
            
         </div>
      </div>
    );
};

export default Actors;