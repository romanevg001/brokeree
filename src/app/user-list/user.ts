export interface User {
    
  "id": number;
  "name": string;
  "username": string;
  "email": string;
  "address"?: Address;
  "phone": string;
  "website": string;
  "company"?: Company;

}

interface Address {
    "street":  string;
    "suite":  string;
    "city":  string;
    "zipcode":  string;
    "geo": Geo
  
}

interface Geo {
    "lat": number;
    "lng": number;
}

interface Company {
    "name": string;
    "catchPhrase"?: string;
    "bs"?: string;
}

interface zoomba extends Array<Geo & Company> {
    
}

var zmb:zoomba  = [{
    "lat": 3,
    "lng": 4,
    "name": 'df'
}]
// var zmb2:zoomba  = [3,5,7, ...zmb]

console.log(zmb)