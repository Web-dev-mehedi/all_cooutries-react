import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
const [countries, setCountries] = useState([]);

const [vistedCountries , setVisitedCountries] = useState([]);


    useEffect(()=>{
           fetch('https://restcountries.com/v3.1/all')
           .then(res => res.json())
           .then(data => setCountries(data)) 
        //    .catch(error) (console.log("error happended on the api",error))
              

    },[])
  

// 

const handleVisitedCountry = (country) =>{

     const newVisitedCountries = [...vistedCountries, country]
     setVisitedCountries(newVisitedCountries)
       console.log('add this to your Visited Country')
       console.log(country)
}




    return (
       <div className="w-11/12 mx-auto">
          <h1 className="text-center text-6xl capitalize font-bold mb-10">All countries : {countries.length}</h1>
        
             <div>
                   <h5>Visited Countries : {vistedCountries.length}</h5>
                   <ul>
                       {
                        vistedCountries.map((item)=> <li key={item.cca2}>{item.name.common}</li>)
                       }
                   </ul>
             </div>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           
               {countries.map(item=>
             <Country key={item.ccn3}  sCountry ={item} handleVisitedCountry={handleVisitedCountry} > </Country>)}
        </div>
       </div>
    );
};

export default Countries;