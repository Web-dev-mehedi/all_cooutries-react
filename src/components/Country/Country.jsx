

const Country = ({sCountry}) => {
   const {flags} = sCountry
    const {common,official } = sCountry.name
    console.log(sCountry)
    return (
        <div className="border border-green-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl capitalize font-semibold">country name : {common}</h3>
            <p>Official Name : {official}</p>
           <img src={flags.svg} alt={flags.alt} className="w-10/12 object-cover h-[120px] rounded-md mt-6"/>
        </div>
    );
};

export default Country;