import $ from 'jquery';
import { Doctor } from './apiCall.js';

export class Info{
  getInfo(input) {
    debugger;
    let length = input.data.length;
    console.log(input.data);
    console.log(length);
    let object = [];
    for(let i = 0; i < length; i++) {
      let array = [];
      let results = input.data[i];
      console.log(results);
      let firstName = results.profile.first_name;
      let lastName = results.profile.last_name;
      let picture = results.profile.image_url;
      let street = results.practices[0].visit_address.street;
      let city = results.practices[0].visit_address.city;
      let state = results.practices[0].visit_address.state_long;
      let zip = results.practices[0].visit_address.zip;
      let phone  results.practices[0].phones[0].number;
      let newPatients = results.practices[0].accepts_new_patients;
      let website = results.practices[0].website;
      array = [firstName, lastName, picture, street, city, state, zip, phone, newPatients, website];
      object[i] = array;
    }
    return object;
  }







}
