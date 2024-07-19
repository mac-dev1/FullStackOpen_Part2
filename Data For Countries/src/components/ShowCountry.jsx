

function ShowCountry({country}) {
    if(country){
        const languagesKeys = Object.keys(country.languages)        
            
        return(
            <div>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <h3>Languages:</h3>
                <ul>
                    {languagesKeys.map( key => <li key={key}>{country.languages[key]}</li>)}
                </ul>
                <img src={country.flags.png} style={{width:200,height:120,border:"solid black"}} />
            </div>
        )
    }else{return}
}

export default ShowCountry