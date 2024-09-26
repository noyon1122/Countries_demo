import { useState } from 'react';
import '../css/Country.css'
function Country({country,handleVisitedCountries}) {
     const {name,flags,population,area}=country; 
    console.log(country);
    //Use State 

    // const [visited,setVisited]=useState(false);
  // const handleVisited =()=>{
  //   setVisited(!visited)
  // }
  
  return (
    <div className='country'>
        <h3>Name: {name?.common}</h3>
        <img src={flags.png} alt='' />
        <p>Population : {population}</p>
        <p>Area : {area}</p>
        <button onClick={ () => handleVisitedCountries(country)}>Visited</button>
        {/* {
         visited ? 'This country is visited': 'Try to visit in this country'
        } */}
    </div>
  )
}

export default Country