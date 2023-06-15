import { useState } from 'react'
import { puppyList } from './data';
import './App.css'
import './style.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);

 

  return (
    
    <div className="App">
            
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
            
            
          </p>
        );
      })}      
      {featPupId && (
        <div className="detailsDiv">
          <h2><p className='nameTag'>{featuredPup.name}</p></h2>
          <ul>
            <li><p className='ageTag'>Age: {featuredPup.age}</p></li>
            <li><p className='emailTag'>Email: {featuredPup.email}</p></li>
          </ul>
        </div>
      )}
    </div>
  );
}




export default App
