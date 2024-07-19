
function ShowCountries({list}){

    return list.length>0?list.map(name => <li key={name}>{name}</li>):null
}

export default ShowCountries