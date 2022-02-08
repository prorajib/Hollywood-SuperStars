// use local storage as my db for now
const addToDb = id =>{
  const exists = getDb();
  let actors_list = {};
  if(!exists){
      actors_list[id] =1;
  }else{
      actors_list = JSON.parse(exists);
      if(actors_list[id]){
          const newcount = actors_list[id]+1;
          actors_list[id] = newcount;
      }else{
          actors_list[id] = 1;
      }
  }
  updateDb(actors_list);
}

const getDb = ()=> localStorage.getItem('actors_list');
const updateDb = list =>{
    localStorage.setItem('actors_list', JSON.stringify(list));
}

const removeFromDb = id=>{

    const exists = getDb();
    if(!exists){

    }else{
        const actors_list = JSON.parse(exists);
        delete actors_list[id];
        updateDb(actors_list);
    }
    
} 

const getStoredList = ()=>{
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheList = () =>{
    localStorage.removeItem('actors_list');
}

export{ addToDb, removeFromDb as deleteFromDb, clearTheList, getStoredList}



