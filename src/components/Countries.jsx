import  { useEffect, useState } from 'react'
import Country from './Country.jsx';
import '../css/countries.css'


function Countries() {
    const [countries,setCoutries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCoutries(data))
    },[])

    const handleVisitedCountries = country =>{
    //  console.log(country);
    const newVisitedCountries =[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
    }
    //console.log(countries);
  return (
    <div>
        <h3>Countries : {countries.length}</h3>
        <div>
          <h2>Visited Countries:{visitedCountries.length} </h2>
          <ul>
             {
              visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
             }
          </ul>
        </div>
    
      <div className='country_container'>
      {
            countries.map(country =><Country key={country.cca2} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
        }
      </div>
    </div>
  )
}

export default Countries