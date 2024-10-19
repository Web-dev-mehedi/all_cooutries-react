import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
const [countries, setCountries] = useState([]);

    useEffect(()=>{
           fetch('https://restcountries.com/v3.1/all')
           .then(res => res.json())
           .then(data => setCountries(data)) 
        //    .catch(error){
        //     console.log("error happended on the api",error)
        //    }     

    },[])
  
    return (
       <>
          <h1 className="text-center text-6xl capitalize font-bold mb-10">All countries : {countries.length}</h1>
           <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           
               {countries.map(item=>
             <Country key={item.ccn3}  sCountry ={item}></Country>)}
        </div>
       </>
    );
};

export default Countries;