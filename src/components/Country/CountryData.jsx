
const CountryData = (props) => {
    const{sCountry,handleVisitedCountry}= props
    return (
        <div>
            <h1>{sCountry.name.common}</h1>
        </div>
    );
};

export default CountryData;