import { useEffect, useState } from "react";
import CountryData from "./CountryData";


const Country = (props) => {
    const {sCountry,handleVisitedCountry} = props;
   const {flags,population,independent,region,languages,capital,area} = sCountry
    const {common,official } = sCountry.name
    const totalLan =sCountry.languages
     const [visited,setVisited] = useState(true);
 
     const handleClick = ()=>{
        setVisited(!visited);
    
     }

    // console.log(sCountry.languages)
    return (
        <div className={`border border-green-700 p-4 rounded-lg shadow-md capitalize ${!visited? 'bg-slate-200' : 'bg-white'}`}>
              {/*props drills <CountryData {...props}></CountryData> */}
            <h3 className="text-xl  font-semibold">country name : {common}</h3>
            <p className="text-base font-semibold">Official Name : {official}</p>
            <p className="text-base font-semibold">Capital : {capital} </p>
            <p className="text-base font-semibold">Region : {region} </p>
            <p className="text-base font-semibold">independent : {independent? 'yes': 'no'} </p>
            <p className="text-base font-semibold">population: {population} million</p>
          
{/*                 
                {
                    Object.keys(totalLan).map((key)=> ( <p key={key} className="text-base font-semibold">languages :{key}:{totalLan[key] } </p>))
                }
           */}
            <p className="text-base font-semibold">area :{area} Squre km </p>
           <img src={flags.svg} alt={flags.alt} className="w-10/12 object-cover h-[120px] rounded-md mt-6"/>
           <button onClick={()=>handleVisitedCountry(sCountry)} className="px-5 py-2 mt-8 border rounded-lg mr-4 ">Mark Visited</button><br></br>
           <button style={{color:!visited?"white": 'black'}} className={`px-5 py-2 mt-8 border rounded-lg mr-4 ${!visited? 'bg-red-500':'bg-transparent' }`} onClick={handleClick}> {visited ?'Going' : 'Visited'}</button>
           { visited?'i wanted to Visit':'I have visited this country'}


         
        </div>
    );
};

export default Country;